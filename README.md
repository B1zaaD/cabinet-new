# Cabinet d’orthophoniste Imane Bouzaria

Site vitrine d’une page pour le cabinet d’orthophonie de Mme Imane Bouzaria (ép. Lounici), centre médical Belle Vue, Sidi Abdellah.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Page principale (structure, styles et images intégrés) |
| `script.js` | Animations du titre, apparition au scroll, formulaire de rendez-vous |
| `README.md` | Ce fichier |

## Fonctionnalités

- Titre animé lettre par lettre, avec « ép. Lounici » en effet shimmer
- Apparition progressive des sections au défilement
- Formulaire de prise de rendez-vous (nom, téléphone, date, heure, message)
  - Téléphone formaté automatiquement par groupes de 2 chiffres (`05 61 47 83 29`), 10 chiffres requis
  - Date libre ; le cabinet est fermé le vendredi
  - Récapitulatif puis envoi par WhatsApp
- Boutons Appeler, Google Maps et réseaux sociaux
- Thème clair/sombre automatique, adapté mobile, respect de `prefers-reduced-motion`

## Mise en ligne

Le site est statique : aucun build ni serveur nécessaire. Gardez `index.html` et `script.js` dans le même dossier.

**GitHub Pages**
1. Créez un dépôt et envoyez les 3 fichiers à la racine.
2. Settings → Pages → Branch `main` / dossier `/ (root)` → Save.

**Netlify / Vercel / Cloudflare Pages** : glissez-déposez le dossier.

**Hébergement classique (FTP)** : envoyez les fichiers à la racine du site.

## Personnalisation

- **Numéro du cabinet** : remplacez `0552 72 36 63` et `213552723663` dans `index.html` et `script.js`.
- **Jours de fermeture** : cherchez `getDay()===5` dans `script.js` (5 = vendredi).
- **Horaires proposés** : modifiez les `<option>` du champ « Heure souhaitée » dans `index.html`.
- **Couleurs** : variables CSS au début de la balise `<style>` (`:root`).

## Notes

- Les polices viennent de Google Fonts (connexion internet requise pour les afficher).
- Le formulaire n’enregistre rien : il prépare un message WhatsApp envoyé au cabinet.
