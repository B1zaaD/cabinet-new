# Cabinet d’orthophoniste Imane Bouzaria

One-page website for the speech therapy clinic of Mme Imane Bouzaria (ép. Lounici), centre médical Belle Vue, Sidi Abdellah. The site is in French.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole website: design, animations, booking form and Supabase settings (everything is inside this one file) |
| `config.js` | Copy of the Supabase settings. Optional: `index.html` already contains them, so it is not loaded by the site |
| `README.md` | This file |

## Features

- Animated title, letter by letter, with a shimmer on "ép. Lounici"
- Sections fade in while scrolling; light/dark theme; mobile friendly; respects `prefers-reduced-motion`
- Booking form
  - Required: name and phone. Date and time are optional.
  - Phone is formatted in groups of 2 digits (`05 61 47 83 29`), 10 digits required
  - If a date is chosen, Fridays are refused (the clinic is closed)
  - The request is saved in Supabase, then a recap and a WhatsApp button are shown
  - If Supabase is unreachable, the form still works through WhatsApp
- Call, Google Maps and social buttons

## Database (Supabase)

1. Create a project at https://supabase.com.
2. Open **SQL Editor → New query**, paste this, click **Run**:

```sql
create table if not exists public.rendez_vous (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  nom           text not null check (char_length(nom) between 2 and 100),
  telephone     text not null check (telephone ~ '^[0-9]{2}( [0-9]{2}){4}$'),
  date_rdv      date check (date_rdv is null or extract(dow from date_rdv) <> 5),
  heure         text check (heure is null or heure ~ '^[0-2][0-9]:[0-5][0-9]$'),
  message       text check (message is null or char_length(message) <= 500),
  statut        text not null default 'en_attente'
                check (statut in ('en_attente','confirme','annule','termine')),
  notes_cabinet text
);

alter table public.rendez_vous enable row level security;
revoke all on public.rendez_vous from anon, authenticated;
grant insert on public.rendez_vous to anon;

create policy "visitors can create a booking" on public.rendez_vous
  for insert to anon
  with check (statut = 'en_attente' and notes_cabinet is null);
```

3. In **Project Settings → API Keys**, copy the **Project URL** and the **publishable key**, and put them in the `RDV_CONFIG` block near the end of `index.html`.
4. Read your bookings in **Table Editor → rendez_vous**. Use **Export → CSV** to keep a copy.

Visitors can only add bookings. Only the project owner (logged in to Supabase) can read, edit or delete them.

## Publish on GitHub Pages

1. Put `index.html` in the root of the repository.
2. **Settings → Pages →** Branch `main`, folder `/ (root)` → Save.
3. After about a minute the site is live at `https://<user>.github.io/<repo>/`.
4. Open `…/?diag` to show a test box that tells you if the site can reach the database.

## Customize

- Clinic phone: search `0552 72 36 63` and `213552723663` in `index.html`.
- Closed day: search `getDay()===5` (5 = Friday).
- Time slots: edit the `<option>` list of the "Heure souhaitée" field.

## Notes

- Fonts come from Google Fonts, so an internet connection is needed to display them.
- Phone numbers are personal data: keep your Supabase account secure and never share the secret key.
