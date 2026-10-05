"""Compare built articles with the untouched baseline; run after both Docker builds."""
import json,re,sys,html
from pathlib import Path
from urllib.parse import unquote
from xml.etree import ElementTree as ET
baseline=Path(sys.argv[1]); current=Path('docs/.vitepress/dist')
entries=json.loads(Path('migration/articles.json').read_text())
for entry in entries:
 name=entry['url'].removeprefix('/wiki/')+'.html'
 old=(baseline/name).read_text(); new=(current/name).read_text()
 for pattern in [r'<title>(.*?)</title>', r'<meta name="description" content="([^"]*)"']:
  assert re.findall(pattern,old)==re.findall(pattern,new),(name,'title/description changed')
 # Breadcrumbs and navigation may add IDs; all original article anchors must survive.
 old_ids=set(re.findall(r'\bid="([^"]+)"',old)); new_ids=set(re.findall(r'\bid="([^"]+)"',new))
 assert old_ids<=new_ids,(name,old_ids-new_ids)
 canonical='https://docs.mume.org'+entry['url']
 assert f'rel="canonical" href="{canonical}"' in html.unescape(new),(name,'canonical')
 if True:
  assert 'aria-label="Breadcrumb"' in new,name
  assert entry['destination'].removeprefix('docs/') in html.unescape(new),(name,'edit path')
 assert not (current/entry['destination'].removeprefix('docs/').replace('.md','.html')).exists() or entry['destination']==entry['original'],(name,'duplicate physical route')
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls=[unquote(n.text) for n in ET.parse(current/'sitemap.xml').findall('.//s:loc',ns)]
assert len(urls)==len(set(urls)),'duplicate sitemap URLs'
for entry in entries: assert 'https://docs.mume.org'+entry['url'] in urls,entry['url']
assert not any('/pages/Software/' in url for url in urls)
old_meta=json.loads((baseline/'pages-meta.json').read_text());new_meta=json.loads((current/'pages-meta.json').read_text())
for tag,pages in old_meta['tags'].items():
 assert sorted(pages,key=lambda p:p['url'])==sorted(new_meta['tags'][tag],key=lambda p:p['url']),tag
for term,url in old_meta['terms'].items():
 if url.startswith('/pages/'): assert new_meta['terms'].get(term)==url,(term,url)
print(f'Verified {len(entries)} generated article URLs, original anchors, canonicals, sitemap, tags and aliases.')
