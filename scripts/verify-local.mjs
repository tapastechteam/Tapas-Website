import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const base=process.env.TAPAS_TEST_URL||'http://127.0.0.1:3110';
const read=p=>fs.readFileSync(p,'utf8');
const eventData=read('src/modules/events/data.ts');
const past=eventData.split('export const pastEvents: PastEvent[] = [')[1];
const eventIds=[...past.matchAll(/^    id: '([^']+)'/gm)].map(x=>x[1]);
assert.equal(eventIds.length,31);
const galleryIds=[...read('src/modules/gallery/data/events.js').matchAll(/^    "id": "([^"]+)"/gm)].map(x=>x[1]);
const homeIds=[...read('src/tapas-home-grid/data/events.js').matchAll(/^    "id": "([^"]+)"/gm)].map(x=>x[1]);
for(const id of homeIds)assert(galleryIds.includes(id),'Home grid album missing: '+id);
const generatedPhotos=[...past.matchAll(/photos: eventPhotos\('([^']+)', (\d+),/g)].flatMap(([,slug,count])=>Array.from({length:Number(count)},(_,i)=>`/images/events-page/${slug}-${i+1}.jpg`));
assert.equal(generatedPhotos.length,139);
for(const photo of generatedPhotos)assert(fs.existsSync('public'+photo),photo);
const routes=['/','/about','/team','/events','/resources','/join','/gallery',...eventIds.map(x=>'/events/'+x),...galleryIds.map(x=>'/gallery?event='+x),...['2022','2023','2024','2025','2026'].map(x=>'/events?year='+x)];
const result={base,pages:[],assets:[],galleryAlbums:galleryIds.length,homeAlbumMappings:homeIds.length,eventPhotos:generatedPhotos.length};
for(const route of routes){
 const response=await fetch(base+route);const html=await response.text();
 assert.equal(response.status,200,route);assert(!html.includes('Album unavailable'),route);
 result.pages.push({route,status:response.status});
}
const unknown=await fetch(base+'/events/no-such-event');assert.equal(unknown.status,404);result.invalidEventStatus=404;
const meditation=await fetch(base+'/meditation',{redirect:'manual'});assert([307,308].includes(meditation.status));assert.equal(meditation.headers.get('location'),'/about#how-to-attend');result.meditationRedirect=meditation.headers.get('location');
function files(folder){return fs.readdirSync(folder,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(folder,e.name)):[path.join(folder,e.name)]);}
const assets=[...files('public').map(f=>'/'+path.relative('public',f).split(path.sep).join('/')),...files('.next/static/media').map(f=>'/_next/static/media/'+path.basename(f))];
let index=0;
await Promise.all(Array.from({length:8},async()=>{
 while(index<assets.length){const asset=assets[index++];const response=await fetch(base+encodeURI(asset),{method:'HEAD'});assert.equal(response.status,200,asset);result.assets.push({asset,status:response.status});}
}));
fs.mkdirSync('verification',{recursive:true});fs.writeFileSync('verification/http-checks.json',JSON.stringify(result,null,2));
console.log(`Passed: ${result.pages.length} page/album/filter URLs, ${assets.length} asset URLs, 31 event details, ${galleryIds.length} Gallery albums, ${homeIds.length} Home album mappings, 139 event photos, invalid-event 404 and Meditation redirect.`);
