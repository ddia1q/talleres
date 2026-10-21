const V='domi-supabase-v1',T='talleres-tiles';
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png',
'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css','https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==V&&n!==T).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET')return; const u=new URL(r.url);
  if(u.hostname.endsWith('arcgisonline.com')||u.hostname==='tile.openstreetmap.org'){
    e.respondWith(caches.open(T).then(c=>c.match(r).then(h=>{const n=fetch(r).then(x=>{if(x.ok)c.put(r,x.clone());return x}).catch(()=>h);return h||n})));return}
  if(u.origin===location.origin){
    e.respondWith(fetch(r).then(x=>{if(x.ok){const y=x.clone();caches.open(V).then(c=>c.put(r,y))}return x}).catch(()=>caches.match(r)));return}
  if(u.hostname==='unpkg.com'||u.hostname.startsWith('fonts.g')){
    e.respondWith(caches.match(r).then(h=>{const n=fetch(r).then(x=>{if(x.ok){const y=x.clone();caches.open(V).then(c=>c.put(r,y))}return x}).catch(()=>h);return h||n}));}
});
