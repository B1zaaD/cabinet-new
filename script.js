(function(){var t=document.querySelector('h1.ttl');if(!t)return;var n=0;
[].forEach.call(t.querySelectorAll('.l1,.l2,.l3'),function(el){var txt=el.textContent,i=0,base=el.classList.contains('l3')?1.1:(el.classList.contains('l1')?0.2:0.5);el.setAttribute('aria-hidden','true');el.textContent='';
txt.split(' ').forEach(function(word,wi,arr){var w=document.createElement('span');w.className='w';
for(var k=0;k<word.length;k++){var c=document.createElement('span');c.className='lt';c.textContent=word[k];var d=(base+(n++)*0.045).toFixed(2)+'s';c.style.setProperty('--d',d);w.appendChild(c)}
el.appendChild(w);if(wi<arr.length-1)el.appendChild(document.createTextNode(' '))})});})();
(function(){var b=document.body;b.classList.remove('nojs');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.08});[].forEach.call(document.querySelectorAll('.rv'),function(el){io.observe(el)})}else{b.classList.add('nojs')}
var f=document.getElementById('rdvForm');if(!f)return;
var done=document.getElementById('rdvDone'),err=document.getElementById('rdvErr');
f.elements.tel.addEventListener('input',function(){var c=this.value.replace(/\D/g,'').slice(0,10).replace(/(\d{2})(?=\d)/g,'$1 ');if(c!==this.value)this.value=c});
function v(n){return (f.elements[n].value||'').trim()}
function el(tag,cls,txt){var x=document.createElement(tag);if(cls)x.className=cls;if(txt!=null)x.textContent=txt;return x}
f.addEventListener('submit',function(e){e.preventDefault();err.textContent='';
if(!v('nom')||!v('tel')||!v('date')||!v('heure')){err.textContent='Merci de remplir : nom, téléphone, date et heure.';return}
if(new Date(v('date')+'T12:00:00').getDay()===5){err.textContent='Le cabinet est fermé le vendredi. Merci de choisir un autre jour (samedi au jeudi).';return}
if(!/^\d{10}$/.test(v('tel').replace(/\s/g,''))){err.textContent='Le téléphone doit contenir exactement 10 chiffres.';return}
var dt=new Date(v('date')+'T12:00:00'),dtxt=isNaN(dt.getTime())?v('date'):dt.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
var rows=[['Nom',v('nom')],['Téléphone',v('tel')],['Date souhaitée',dtxt],['Heure',v('heure')],['Message',v('msg')]].filter(function(r){return r[1]});
done.textContent='';done.appendChild(el('h3',null,'Récapitulatif de votre rendez-vous'));
done.appendChild(el('p','ok','Votre demande est prête : envoyez-la au cabinet sur WhatsApp (0552 72 36 63).'));
var dl=el('dl');rows.forEach(function(r){dl.appendChild(el('dt',null,r[0]));dl.appendChild(el('dd',null,r[1]))});done.appendChild(dl);
var lines=['Bonjour, je souhaite prendre rendez-vous au cabinet.','','Nom : '+v('nom'),'Téléphone : '+v('tel'),'Date souhaitée : '+dtxt,'Heure : '+v('heure')];if(v('msg'))lines.push('Message : '+v('msg'));
var wa=el('a','btn wabtn','💬 Envoyer sur WhatsApp');wa.href='https://wa.me/213552723663?text='+encodeURIComponent(lines.join('\n'));wa.target='_blank';wa.rel='noopener';
var tel=el('a','btn light','📞 Appeler le 0552 72 36 63');tel.href='tel:+213552723663';
var ed=el('button','btn edit','Modifier');ed.type='button';
ed.addEventListener('click',function(){done.hidden=true;f.hidden=false;f.scrollIntoView({block:'center'})});
var acts=el('div','acts');acts.appendChild(wa);acts.appendChild(tel);acts.appendChild(ed);done.appendChild(acts);
f.hidden=true;done.hidden=false;done.scrollIntoView({block:'center'});try{wa.click()}catch(x){}});
})();
