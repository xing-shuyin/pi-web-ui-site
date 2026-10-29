import base64
import json
import urllib.request
import websocket
from pathlib import Path

pages = json.load(urllib.request.urlopen('http://127.0.0.1:9333/json'))
page = next(p for p in pages if p['type'] == 'page')
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

call('Page.enable')
reports = []
root = Path(__file__).parent
for variant in ['a', 'b', 'c']:
    for width in [1440, 390]:
        call('Emulation.setDeviceMetricsOverride', {'width': width, 'height': 1000 if width == 1440 else 844, 'deviceScaleFactor': 1, 'mobile': width == 390})
        call('Page.navigate', {'url': f'http://127.0.0.1:4198/proposals/docs-redesign/option-{variant}.html'})
        evaluate("new Promise(resolve => { const poll=()=>{if(document.querySelector('.topic-card'))resolve(true);else setTimeout(poll,50)};poll()})")
        reports.append(evaluate("({variant:document.body.dataset.variant,width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,cards:document.querySelectorAll('.topic-card').length})"))
        if width == 390:
            reports.append(evaluate("document.querySelector('.menu-toggle').click();({mobileMenu:document.querySelector('.sidebar').classList.contains('open')})"))
            evaluate("document.querySelector('.menu-toggle').click()")
        image = call('Page.captureScreenshot', {'format': 'png', 'captureBeyondViewport': False})
        (root / f'preview-{variant}-{width}.png').write_bytes(base64.b64decode(image['data']))
call('Emulation.clearDeviceMetricsOverride')
call('Page.navigate', {'url': 'http://127.0.0.1:4198/proposals/docs-redesign/index.html'})
ws.close()
print(json.dumps(reports, ensure_ascii=False, indent=2))
