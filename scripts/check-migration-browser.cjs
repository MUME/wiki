const fs = require('fs');
const http = require('http');
const path = require('path');
const manifest = JSON.parse(fs.readFileSync('migration/articles.json'));
const { chromium } = require('playwright');
(async () => {
 const base = process.env.TEST_BASE || '/wiki/';
 const server = http.createServer((request,response) => {
   const url = new URL(request.url,'http://localhost');
   const rel = decodeURIComponent(url.pathname).slice(base.length);
   let file=path.resolve('docs/.vitepress/dist',rel || 'index.html');
   if(!path.extname(file)) file+='.html';
   if(!fs.existsSync(file)) { response.statusCode=404; file=path.resolve('docs/.vitepress/dist/404.html'); }
   const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml'};
   response.setHeader('Content-Type',mime[path.extname(file)] || 'application/octet-stream');
   response.end(fs.readFileSync(file));
 });
 await new Promise(resolve=>server.listen(4174,'127.0.0.1',resolve));
 const browser = await chromium.launch({headless:true,args:['--no-sandbox']});
 const page = await browser.newPage();
 const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:4174';
 const errors=[]; page.on('pageerror',error=>errors.push(error.message));
 for(const name of ['Client','Powwow_Scripts','Tintin++']) {
  const response=await page.goto(origin+base+'pages/'+name);
  if(response.status()!==200) throw Error('Article does not serve directly: '+name);
  await page.locator('[aria-label="Breadcrumb"]').waitFor();
  const edit=await page.locator('a.edit-link-button').getAttribute('href');
  if(!edit.includes('/'+manifest.find(e=>e.url==='/wiki/pages/'+name).destination)) throw Error('Wrong edit source: '+edit);
  if(!base.includes('pr-') && await page.locator('link[rel="canonical"]').getAttribute('href')!=='https://docs.mume.org/wiki/pages/'+name) throw Error('Wrong canonical');
 }
 await page.goto(origin+base+'topics/software');
 await page.getByRole('link',{name:'Client',exact:true}).first().click();
 await page.locator('[aria-label="Breadcrumb"]').waitFor();
 await page.goto(origin+base+'tags');
 await page.getByRole('button',{name:'Search',exact:false}).first().click();
 const input=page.locator('#localsearch-input'); await input.fill('PandoraMapper');
 await page.locator('a[href*="/pages/PandoraMapper"]').first().waitFor();
 await page.goto(origin+base+'index.php?title=Client');
 await page.waitForURL('**/pages/Client');
 await page.locator('[aria-label="Breadcrumb"]').waitFor();
 await page.goto(origin+base+'missing-example');
 await page.getByRole('combobox').selectOption('pages/Software/C-Z');
 const create = await page.getByRole('link',{name:'Create page via Pull Request',exact:true}).getAttribute('href');
 if(!create.includes('/docs/pages/Software/C-Z?filename=')) throw Error('Wrong creation collection');
 if(base.includes('pr-')) {
  if(fs.existsSync('docs/.vitepress/dist/sitemap.xml')) throw Error('Preview has a sitemap');
  if(await page.locator('meta[name="robots"]').getAttribute('content')!=='noindex, nofollow') throw Error('Preview is indexable');
 }
 if(errors.length) throw Error(errors.join('\n'));
 await browser.close(); server.close(); console.log('Browser routes, breadcrumbs, physical edit links, tags and search passed at '+base);
})();
