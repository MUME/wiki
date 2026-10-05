const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { getMarkdownFiles } = require('./utils.cjs');
const { publicRoute } = require('./routes.cjs');
const manifest = JSON.parse(fs.readFileSync('migration/articles.json'));
const documentationChanges = fs.existsSync('migration/documentation-changes.json') ? JSON.parse(fs.readFileSync('migration/documentation-changes.json')) : {};
const current = getMarkdownFiles('docs/pages');
const routes = new Map();
for (const file of current) {
 const url = '/wiki' + publicRoute(file.slice(5));
 if(routes.has(url)) throw Error('Duplicate route: '+url);
 routes.set(url,file);
}
for (const entry of manifest) {
 const file = routes.get(entry.url);
 if(file && file !== entry.original && file !== entry.destination) throw Error('Wrong destination: '+file);
 if(!file) throw Error('Missing original URL: '+entry.url);
 const text = fs.readFileSync(file,'utf8').replace(/<!--@include:\s*(.*?)-->/g,(_,target)=>'<!--@include: '+path.basename(target.trim())+'-->');
 if(crypto.createHash('sha256').update(text).digest('hex')!==(documentationChanges[entry.url] || entry.hash)) throw Error('Changed article: '+file);
 const raw = fs.readFileSync(file,'utf8');
 for(const match of raw.matchAll(/^<!--@include:\s*(.*?)-->/gm)) if(!fs.existsSync(path.resolve(path.dirname(file),match[1].trim().split('{')[0]))) throw Error('Unresolved include: '+file);
}
console.log(`Verified ${manifest.length} original article URLs and contents; ${current.length-manifest.length} new articles.`);
