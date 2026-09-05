#!/usr/bin/env bun
// memo.ts — the result store (METHOD M1). A verified deliverable records what produced it;
// if the same inputs, METHOD, template, model and effort are present now, the deliverable is
// reused instead of regenerated.
//
//   bun scripts/synthesis/memo.ts check <unit-id> [--model <id>] [--effort <lvl>]
//        one line per deliverable of the unit: HIT <card> | MISS <card> — <what changed> | ABSENT <card>
//        exit 0 when every deliverable is a HIT, 1 otherwise
//   bun scripts/synthesis/memo.ts stamp <card.md> --model <id> --effort <lvl> [--inputs p1,p2]
//        (re)writes the memo fields into the card's frontmatter from the current inputs (the card's `path:`,
//        or --inputs for concept cards); never sets `verified`
//   bun scripts/synthesis/memo.ts audit
//        every card under docs/analysis/{inventory,concepts}: STALE if any recorded hash differs from now,
//        UNSTAMPED if the fields are missing, OK otherwise; exit 1 if any STALE
//
// Memo fields (frontmatter):
//   memo_inputs:  [{path: <source path>, sha256: <hex>}]   sources/<pkg>/<path>
//   method_sha:   sha256 of docs/plan/METHOD.md
//   template_sha: sha256 of the template the card was written from
//   model:        the model id that produced the card         (never inferred; `unknown` if not recorded)
//   effort:       the effort level                            (never inferred; `unknown` if not recorded)
//   verified:     <YYYY-MM-DD> <check>  — written by the primary agent at METHOD §7 step 6, after quote-check + coverage pass
import { readFileSync, writeFileSync, existsSync } from "fs";
import { parseFrontmatter, fileSha, readUnits, slugOf, walkMd, isFile, sourcePath } from "./_lib";

const [cmd, ...rest] = process.argv.slice(2);
const opt = (k: string) => { const i = rest.indexOf(k); return i >= 0 ? rest[i + 1] : undefined; };
const METHOD = "docs/plan/METHOD.md";
const TEMPLATE: Record<string, string> = { inventory: "docs/plan/templates/inventory-entry.md", concepts: "docs/plan/templates/concept-card.md" };

function templateFor(card: string) { return (card.includes("/concepts/") ? TEMPLATE.concepts : TEMPLATE.inventory) ?? ""; }
function inputsNow(pkg: string, paths: string[]) {
  return paths.map(p => ({ path: p, sha256: isFile(sourcePath(pkg, p)) ? fileSha(sourcePath(pkg, p)) : "MISSING" }));
}
function recorded(card: string) {
  const { fm } = parseFrontmatter(readFileSync(card, "utf8"));
  const inputs = Array.isArray(fm.memo_inputs) ? fm.memo_inputs as { path: string; sha256: string }[] : null;
  return { fm, inputs };
}
/** Compare a card's record with the present state. Returns [] when it matches. */
function diff(card: string, pkg: string, paths: string[], model?: string, effort?: string): string[] | null {
  const { fm, inputs } = recorded(card);
  if (!inputs || !fm.method_sha || !fm.template_sha) return null; // unstamped
  const out: string[] = [];
  const now = inputsNow(pkg, paths);
  const recMap = new Map(inputs.map(i => [i.path, i.sha256]));
  for (const n of now) if (recMap.get(n.path) !== n.sha256) out.push(`input ${n.path}`);
  for (const r of inputs) if (!now.find(n => n.path === r.path)) out.push(`input removed ${r.path}`);
  if (fm.method_sha !== fileSha(METHOD)) out.push("METHOD.md");
  if (fm.template_sha !== fileSha(templateFor(card))) out.push("template");
  if (model && fm.model !== model) out.push(`model (${fm.model} → ${model})`);
  if (effort && fm.effort !== effort) out.push(`effort (${fm.effort} → ${effort})`);
  return out;
}

if (cmd === "check") {
  const unit = rest[0];
  const rows = readUnits().filter(r => r.unit === unit);
  if (!rows.length) { console.error(`memo: unit ${unit} not found in docs/analysis/manifest/units.md`); process.exit(2); }
  let allHit = true;
  for (const r of rows) {
    const card = `docs/analysis/inventory/${r.pkg}/${slugOf(r.path)}`;
    if (!existsSync(card)) { console.log(`ABSENT ${card}`); allHit = false; continue; }
    const d = diff(card, r.pkg, [r.path], opt("--model"), opt("--effort"));
    const { fm } = recorded(card);
    if (d === null) { console.log(`MISS ${card} — unstamped`); allHit = false; }
    else if (d.length) { console.log(`MISS ${card} — ${d.join("; ")}`); allHit = false; }
    else if (!fm.verified) { console.log(`MISS ${card} — not verified`); allHit = false; }
    else console.log(`HIT ${card} (verified ${fm.verified})`);
  }
  process.exit(allHit ? 0 : 1);
}

if (cmd === "stamp") {
  const card = rest[0] ?? ""; const model = opt("--model") ?? "unknown"; const effort = opt("--effort") ?? "unknown";
  const text = readFileSync(card, "utf8");
  const { fm, body, raw } = parseFrontmatter(text);
  const pkg = String(fm.package);
  const paths = opt("--inputs") ? opt("--inputs")!.split(",").map(s => s.trim()).filter(Boolean) : fm.path ? [String(fm.path)] : [];
  if (!paths.length) { console.error("memo stamp: no inputs (card has no `path:`; pass --inputs a,b,c)"); process.exit(2); }
  const inputs = inputsNow(pkg, paths);
  const kept = raw.split("\n").filter(l => !/^(memo_inputs|method_sha|template_sha|model|effort):/.test(l) && !/^\s+-\s+\{path:/.test(l));
  const memo = [
    "memo_inputs:", ...inputs.map(i => `  - {path: ${i.path}, sha256: ${i.sha256}}`),
    `method_sha: ${fileSha(METHOD)}`, `template_sha: ${fileSha(templateFor(card))}`, `model: ${model}`, `effort: ${effort}`,
  ];
  writeFileSync(card, `---\n${kept.join("\n")}\n${memo.join("\n")}\n---\n${body}`);
  console.log(`stamped ${card} (${inputs.length} input(s), model ${model}, effort ${effort})`);
  process.exit(0);
}

if (cmd === "audit") {
  const cards = [...walkMd("docs/analysis/inventory"), ...walkMd("docs/analysis/concepts")].filter(p => !p.includes("/_units/") && !p.includes("/_divergence/"));
  let ok = 0, stale = 0, unstamped = 0;
  for (const card of cards) {
    const { fm, inputs } = recorded(card);
    if (!inputs) { unstamped++; console.log(`UNSTAMPED ${card}`); continue; }
    const d = diff(card, String(fm.package), inputs.map(i => i.path));
    if (d && d.length) { stale++; console.log(`STALE ${card} — ${d.join("; ")}`); } else ok++;
  }
  console.log(`memo audit: ${ok} OK, ${stale} STALE, ${unstamped} UNSTAMPED across ${cards.length} card(s)`);
  process.exit(stale ? 1 : 0);
}

console.error("usage: memo.ts check <unit> | stamp <card> --model <id> --effort <lvl> | audit");
process.exit(2);
