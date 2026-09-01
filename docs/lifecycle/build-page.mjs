// Builds the standalone artifact page from Main.dc.html: same template, same logic class, a tiny renderer over Preact.
import { readFileSync, writeFileSync } from 'node:fs';
const src = readFileSync('Main.dc.html', 'utf8');
const dc = src.slice(src.indexOf('<x-dc>') + 6, src.indexOf('</x-dc>'));
const helmet = dc.slice(dc.indexOf('<helmet>') + 8, dc.indexOf('</helmet>'));
const template = dc.slice(dc.indexOf('</helmet>') + 9).trim();
const logic = src.match(/<script data-dc-script[^>]*>([\s\S]*?)<\/script>/)[1];
const styles = helmet.match(/<style>([\s\S]*?)<\/style>/)[1].replace(/\n\s*body \{[^}]*\}/, '');
const fontLink = helmet.match(/<link[^>]*>/)[0];
const page = `<title>Brain Lifecycle Map</title>
${fontLink}
<style>
  :root { color-scheme: dark; }
  html, body { height: 100%; }
  body { margin: 0; background: #0a0a0a; color: #ededed; font-family: "Google Sans", sans-serif; overflow: hidden; }
  #viewport { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: #0a0a0a; }
  #stage { width: 1440px; height: 900px; flex: 0 0 auto; transform-origin: 0 0; }
  .note { position: fixed; left: 12px; bottom: 8px; font-size: 11px; color: #5c5c5c; }
  @media (prefers-reduced-motion: reduce) { .root * { transition: none !important; } }
${styles}
</style>
<div id="viewport"><div id="stage"></div></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/preact/10.19.3/preact.umd.min.js"></script>
<script>
(function () {
  const { h, Component: PComponent, render } = window.preact;
  // ---- the template, parsed once ----
  const tpl = new DOMParser().parseFromString('<div id="tpl">' + ${JSON.stringify(template)} + '</div>', 'text/html').getElementById('tpl');
  // every template element gets a stable id, so vnodes are keyed by template position (plus loop indices)
  const TID = new WeakMap(); let tidSeq = 0;
  tpl.querySelectorAll('*').forEach((el) => TID.set(el, 'e' + (tidSeq++)));
  const HOLE = /\\{\\{\\s*([^}]+?)\\s*\\}\\}/g;
  function resolve(path, scope) {
    path = path.trim();
    if (path === 'true') return true; if (path === 'false') return false;
    let cur = scope;
    for (const k of path.split('.')) { if (cur == null) return undefined; cur = cur[k]; }
    return cur;
  }
  function interp(str, scope) {
    const whole = str.match(/^\\s*\\{\\{\\s*([^}]+?)\\s*\\}\\}\\s*$/);
    if (whole) return resolve(whole[1], scope);
    return str.replace(HOLE, (_, p) => { const v = resolve(p, scope); return v == null ? '' : String(v); });
  }
  function renderNodes(nodes, scope, out) {
    for (const n of nodes) {
      if (n.nodeType === 3) { const t = n.nodeValue; if (t.trim() === '') continue; out.push(interp(t, scope)); continue; }
      if (n.nodeType !== 1) continue;
      const tag = n.tagName.toLowerCase();
      if (tag === 'sc-for') {
        const listName = n.getAttribute('list').replace(/[{}]/g, '').trim();
        const list = resolve(listName, scope) || [];
        const as = n.getAttribute('as');
        list.forEach((item, i) => {
          const loopKey = (scope.$k || '') + '/' + TID.get(n) + ':' + i;
          const kids = []; renderNodes(Array.from(n.childNodes), Object.assign({}, scope, { [as]: item, $index: i, $k: loopKey }), kids);
          out.push(h(preact.Fragment, { key: loopKey }, kids));
        });
        continue;
      }
      if (tag === 'sc-if') {
        if (resolve(n.getAttribute('value').replace(/[{}]/g, ''), scope)) renderNodes(Array.from(n.childNodes), scope, out);
        continue;
      }
      const props = { key: (scope.$k || '') + '#' + TID.get(n) };
      for (const a of Array.from(n.attributes)) {
        if (a.name.startsWith('hint-')) continue;
        const v = interp(a.value, scope);
        if (a.name === 'onclick') props.onClick = typeof v === 'function' ? v : undefined;
        else if (a.name === 'class') props.class = v;
        else props[a.name] = v;
      }
      const kids = []; renderNodes(Array.from(n.childNodes), scope, kids);
      out.push(h(tag, props, kids));
    }
  }
  class DCLogic extends PComponent {}
  ${logic}
  Component.prototype.render = function () { const vals = this.renderVals(); const out = []; renderNodes(Array.from(tpl.childNodes), vals, out); return out; };
  const stage = document.getElementById('stage');
  render(h(Component, {}), stage);
  function fit() {
    const s = Math.min(window.innerWidth / 1440, window.innerHeight / 900, 1.25);
    stage.style.transform = 'scale(' + s + ')';
    stage.style.marginLeft = ((window.innerWidth - 1440 * s) / 2) + 'px';
    stage.style.marginTop = ((window.innerHeight - 900 * s) / 2) + 'px';
    document.getElementById('viewport').style.justifyContent = 'flex-start';
    document.getElementById('viewport').style.alignItems = 'flex-start';
  }
  fit(); window.addEventListener('resize', fit);
})();
</script>
`;
writeFileSync('lifecycle-map.html', page);
console.log('wrote lifecycle-map.html', page.length, 'bytes');
