"""Optional browser regression check. Requires Chrome CDP at :9333 and websocket-client.
Start the site first: PORT=4198 npm run dev (or equivalent environment on Windows).
Only the temporary browser tab created by this check is closed.
"""
import argparse
import base64
import json
import urllib.request
from pathlib import Path
import websocket

parser = argparse.ArgumentParser()
parser.add_argument('--url', default='http://127.0.0.1:4198/docs.html')
args = parser.parse_args()
request = urllib.request.Request('http://127.0.0.1:9333/json/new?about:blank', method='PUT')
page = json.load(urllib.request.urlopen(request))
ws = websocket.create_connection(page['webSocketDebuggerUrl'], suppress_origin=True)
seq = 0

def call(method, params=None):
    global seq
    seq += 1
    ws.send(json.dumps({'id': seq, 'method': method, 'params': params or {}}))
    while True:
        response = json.loads(ws.recv())
        if response.get('id') == seq:
            if 'error' in response:
                raise RuntimeError(response['error'])
            return response.get('result', {})

def evaluate(expression):
    result = call('Runtime.evaluate', {'expression': expression, 'awaitPromise': True, 'returnByValue': True})
    if 'exceptionDetails' in result:
        raise RuntimeError(result['exceptionDetails'])
    return result['result'].get('value')

root = Path(__file__).resolve().parent.parent / 'proposals' / 'docs-redesign'
reports = []
try:
    call('Page.enable')
    call('Runtime.enable')
    call('Emulation.setDeviceMetricsOverride', {'width': 1440, 'height': 1000, 'deviceScaleFactor': 1, 'mobile': False})
    call('Page.navigate', {'url': args.url})
    evaluate("new Promise((resolve,reject)=>{let n=0;const poll=()=>{if(document.querySelector('.topic-card'))resolve(true);else if(n++>100)reject('Document failed to initialize');else setTimeout(poll,50)};poll()})")
    report = evaluate("""(async()=>{
      const out=[];const pause=()=>new Promise(r=>setTimeout(r,80));
      const links=[...document.querySelectorAll('.sidebar section>a')].map(a=>a.hash);
      for(const hash of links){location.hash=hash;await pause();const main=document.querySelector('main');out.push({chapter:hash,pass:(main.querySelector('.doc-body')?.textContent.trim().length||0)>100&&main.scrollWidth<=main.clientWidth&&document.documentElement.scrollWidth<=innerWidth,headings:main.querySelectorAll('h2[id]').length});}
      location.hash='tools-and-markers';await pause();out.push({test:'dynamic catalog',pass:!!document.querySelector('[data-dynamic-table] table tbody tr')});location.hash='cli-and-env';await pause();
      const heading=document.querySelector('.toc [data-heading]');const id=heading.dataset.heading;heading.click();await pause();out.push({test:'heading deep link',pass:decodeURIComponent(location.hash.slice(1))===id&&!!document.getElementById(id)});
      document.querySelector('.search-trigger').click();const input=document.querySelector('#search-input');input.value='PI_WEB_PORT';input.dispatchEvent(new Event('input'));out.push({test:'search generated tables',pass:!!document.querySelector('.search-result[href="#cli-and-env"]')});document.querySelector('.search-result[href="#cli-and-env"]').click();await pause();out.push({test:'search navigation',pass:!document.querySelector('#search-dialog').open&&location.hash==='#cli-and-env'});
      document.querySelector('#language-toggle').click();out.push({test:'English',pass:document.documentElement.lang==='en'&&document.querySelector('main h1').textContent==='CLI & environment'});for(const hash of links){location.hash=hash;await pause();out.push({english:hash,pass:(document.querySelector('.doc-body')?.textContent.trim().length||0)>100});}document.querySelector('#language-toggle').click();
      const before=document.documentElement.dataset.theme;document.querySelector('#theme-toggle').click();out.push({test:'theme',pass:document.documentElement.dataset.theme!==before});document.querySelector('#theme-toggle').click();
      location.hash='overview';await pause();const img=document.querySelector('.image-zoom');if(img){img.click();out.push({test:'image viewer',pass:document.querySelector('#image-dialog').open});document.querySelector('#image-dialog').close();}
      location.hash='';await pause();return out;
    })()""")
    reports.extend(report)
    for width in [1440, 390]:
        call('Emulation.setDeviceMetricsOverride', {'width': width, 'height': 1000 if width == 1440 else 844, 'deviceScaleFactor': 1, 'mobile': width == 390})
        reports.append(evaluate("({test:'homepage '+innerWidth,pass:document.documentElement.scrollWidth<=innerWidth&&document.querySelectorAll('.path-steps>a').length===3})"))
        image = call('Page.captureScreenshot', {'format': 'png', 'captureBeyondViewport': False})
        (root / f'implemented-home-{width}.png').write_bytes(base64.b64decode(image['data']))
        if width == 390:
            reports.append(evaluate("document.querySelector('#menu-toggle').click();({test:'mobile navigation',pass:document.querySelector('.sidebar').classList.contains('open')&&document.querySelector('#menu-toggle').getAttribute('aria-expanded')==='true'})"))
            evaluate("document.querySelector('.nav-backdrop').click()")
            reports.extend(evaluate("""(async()=>{const out=[];for(const a of [...document.querySelectorAll('.sidebar section>a')]){location.hash=a.hash;await new Promise(r=>setTimeout(r,50));out.push({mobile:a.hash,pass:document.documentElement.scrollWidth<=innerWidth&&document.querySelector('main').scrollWidth<=document.querySelector('main').clientWidth});}return out})()"""))
    call('Emulation.setDeviceMetricsOverride', {'width': 1440, 'height': 1000, 'deviceScaleFactor': 1, 'mobile': False})
    evaluate("location.hash='installation'")
    evaluate("new Promise(r=>setTimeout(r,200))")
    image = call('Page.captureScreenshot', {'format': 'png', 'captureBeyondViewport': False})
    (root / 'implemented-article-1440.png').write_bytes(base64.b64decode(image['data']))
finally:
    ws.close()
    urllib.request.urlopen(f"http://127.0.0.1:9333/json/close/{page['id']}").close()
print(json.dumps(reports, ensure_ascii=False, indent=2))
failed = [r for r in reports if not r.get('pass')]
if failed:
    raise SystemExit(f'{len(failed)} checks failed')
print(f'Passed {len(reports)} browser checks')
