#!/usr/bin/env bun
// memo.ts — the result store (METHOD M1). A verified deliverable records what produced it;
// if the same inputs, METHOD, template, model and effort are present now, the deliverable is
// reused instead of regenerated.
//
//   bun scripts/synthesis/memo.ts check <unit-id> [--model <id>] [--effort <lvl>]
//        one line per deliverable of the unit: HIT <card> | MISS <card> — <what changed> | ABSENT <card>
//        exit 0 when every deliverable is a HIT, 1 otherwise
//   bun scripts/synthesis/memo.ts stamp <card.md> --model <id> --effort <lvl> [--inputs p1,p2]
//        (re)writes the memo fields into the card's frontmatter from the current inputs (an inventory card's `path:`;
//        a concept card's cited source files, derived from the concept index — --inputs overrides); never sets `verified`
//   bun scripts/synthesis/memo.ts stamp-unit <unit-id> --model <id> --effort <lvl>
//        stamp every card the unit produced (unit-facts' Deliverables), one summary line — the §7 step 5 loop in one call (D-023:
//        a 30-concept unit would otherwise print 30 lines into the primary conversation)
//   bun scripts/synthesis/memo.ts verify <unit-id> [--date YYYY-MM-DD]
//        §7 step 6 in one call: runs quote-check.ts --summary on the unit's cards; if zero FAIL, writes
//        `verified: <date> quote-check+coverage` into every card that lacks it and prints one line; exit 1 (and writes nothing)
//        on any FAIL or missing card. coverage.ts --quiet is still run once per run by the primary agent.
//   bun scripts/synthesis/memo.ts restamp <card.md>… | --all
//        recompute the hashes of already-stamped cards, keeping their model, effort and verified fields — for the case
//        where the hash DEFINITION changed (D-020) or a template was reformatted without changing what it asks for
//   bun scripts/synthesis/memo.ts audit
//        every card under docs/analysis/{inventory,concepts}: STALE if any recorded hash differs from now,
//        UNSTAMPED if the fields are missing, OK otherwise; exit 1 if any STALE
//
// Memo fields (frontmatter):
//   memo_inputs:  [{path: <source path>, sha256: <hex>}]   sources/<pkg>/<path> — an inventory card's one source file; a concept
//                 card's every source file the inventory cites for that concept (derived from the concept index, D-023)
//   method_sha:   sha256 of the EXTRACTION CONTRACT — the METHOD.md sections that govern what a card contains:
//                 §2.4 (duplication ledger), §3 (R1–R11), §4 (the checklist). Not the whole manual: an edit to the
//                 session protocol, the budget or the repository layout changes no card, so it invalidates none (D-020).
//                 Sessions 002–003 (2026-09-05) stopped on 90 STALE cards after such an edit; that is what this fixes.
//   template_sha: sha256 of the template the card was written from
//   model:        the model id that produced the card         (never inferred; `unknown` if not recorded)
//   effort:       the effort level                            (never inferred; `unknown` if not recorded)
//   verified:     <YYYY-MM-DD> <check>  — written by the primary agent at METHOD §7 step 6, after quote-check + coverage pass
import { readFileSync, writeFileSync, existsSync } from "fs";
import { execSync } from "child_process";
import { parseFrontmatter, fileSha, readUnits, slugOf, walkMd, isFile, sourcePath, sha256, isCardPath, isConceptUnit, conceptIndex, cardsFor } from "./_lib";

const [cmd, ...rest] = process.argv.slice(2);
const opt = (k: string) => { const i = rest.indexOf(k); return i >= 0 ? rest[i + 1] : undefined; };
const METHOD = "docs/plan/METHOD.md";
/** sha256 of the extraction contract: METHOD §2.4 + §3 + §4, cut at their headings. Fails loudly if a heading is missing. */
function contractSha(): string {
  const t = readFileSync(METHOD, "utf8");
  const cut = (start: string, end: string) => { const a = t.indexOf(start); const b = t.indexOf(end, a + 1); if (a < 0 || b < 0) { console.error(`memo: METHOD.md heading not found: ${start} … ${end}`); process.exit(2); } return t.slice(a, b); };
  return sha256(cut("### 2.4 Duplication ledger", "## 3. Hard rules") + cut("## 3. Hard rules", "## 4. What") + cut("## 4. What", "## 5. Phases"));
}
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
  if (fm.method_sha !== contractSha()) out.push("extraction contract (METHOD §2.4/§3/§4)");
  if (fm.template_sha !== fileSha(templateFor(card))) out.push("template");
  if (model && fm.model !== model) out.push(`model (${fm.model} → ${model})`);
  if (effort && fm.effort !== effort) out.push(`effort (${fm.effort} → ${effort})`);
  return out;
}

/** The source files a concept card depends on: every path the inventory cites for the slug (from the concept index). */
const conceptCache = new Map<string, Map<string, { occurrences: { card: string; path: string }[] }>>();
function conceptInputs(pkg: string, slug: string): string[] {
  if (!conceptCache.has(pkg)) conceptCache.set(pkg, conceptIndex(pkg) as any);
  const c = conceptCache.get(pkg)!.get(slug);
  if (!c) return [];
  const paths = new Set<string>();
  for (const o of c.occurrences) {
    const p = o.path || String((readFileSync(o.card, "utf8").match(/^path:\s*(.+)$/m) || [])[1] ?? "").trim();
    if (p) paths.add(p);
  }
  return [...paths].sort();
}

if (cmd === "check") {
  const unit = rest[0] ?? "";
  const rows = readUnits().filter(r => r.unit === unit);
  if (!rows.length) { console.error(`memo: unit ${unit} not found in docs/analysis/manifest/units.md or units-p2.md`); process.exit(2); }
  let allHit = true;
  for (const r of rows) {
    const concept = isConceptUnit(unit);
    const card = concept ? `docs/analysis/concepts/${r.pkg}/${r.path}.md` : `docs/analysis/inventory/${r.pkg}/${slugOf(r.path)}`;
    if (!existsSync(card)) { console.log(`ABSENT ${card}`); allHit = false; continue; }
    const d = diff(card, r.pkg, concept ? conceptInputs(r.pkg, r.path) : [r.path], opt("--model"), opt("--effort"));
    const { fm } = recorded(card);
    if (d === null) { console.log(`MISS ${card} — unstamped`); allHit = false; }
    else if (d.length) { console.log(`MISS ${card} — ${d.join("; ")}`); allHit = false; }
    else if (!fm.verified) { console.log(`MISS ${card} — not verified`); allHit = false; }
    else console.log(`HIT ${card} (verified ${fm.verified})`);
  }
  process.exit(allHit ? 0 : 1);
}

function writeStamp(card: string, model: string, effort: string, pathsOverride?: string[]) {
  const text = readFileSync(card, "utf8");
  const { fm, body, raw } = parseFrontmatter(text);
  const pkg = String(fm.package);
  const slug = card.includes("/concepts/") ? (String(fm.slug || "") || card.replace(/^.*\//, "").replace(/\.md$/, "")) : "";
  const paths = pathsOverride ?? (slug ? conceptInputs(pkg, slug) : Array.isArray(fm.memo_inputs) && fm.memo_inputs.length ? (fm.memo_inputs as { path: string }[]).map(i => i.path) : fm.path ? [String(fm.path)] : []);
  if (!paths.length) { console.error(`memo: ${card}: no inputs (${slug ? `concept \`${slug}\` is not in the inventory index` : "card has no `path:`"}; pass --inputs a,b,c)`); process.exit(2); }
  const inputs = inputsNow(pkg, paths);
  const kept = raw.split("\n").filter(l => !/^(memo_inputs|method_sha|template_sha|model|effort):/.test(l) && !/^\s+-\s+\{path:/.test(l));
  const memo = [
    "memo_inputs:", ...inputs.map(i => `  - {path: ${i.path}, sha256: ${i.sha256}}`),
    `method_sha: ${contractSha()}`, `template_sha: ${fileSha(templateFor(card))}`, `model: ${model}`, `effort: ${effort}`,
  ];
  writeFileSync(card, `---\n${kept.join("\n")}\n${memo.join("\n")}\n---\n${body}`);
  return inputs.length;
}

if (cmd === "stamp") {
  const card = rest[0] ?? ""; const model = opt("--model") ?? "unknown"; const effort = opt("--effort") ?? "unknown";
  const paths = opt("--inputs") ? opt("--inputs")!.split(",").map(s => s.trim()).filter(Boolean) : undefined;
  const n = writeStamp(card, model, effort, paths ?? (parseFrontmatter(readFileSync(card, "utf8")).fm.path ? [String(parseFrontmatter(readFileSync(card, "utf8")).fm.path)] : undefined));
  console.log(`stamped ${card} (${n} input(s), model ${model}, effort ${effort})`);
  process.exit(0);
}

if (cmd === "stamp-unit") {
  const unit = rest[0] ?? ""; const model = opt("--model") ?? "unknown"; const effort = opt("--effort") ?? "unknown";
  const cards = cardsFor(unit);
  if (!cards.length) { console.error(`memo: unit ${unit} not found`); process.exit(2); }
  let n = 0, missing = 0, inputs = 0;
  for (const card of cards) { if (!existsSync(card)) { missing++; continue; } inputs += writeStamp(card, model, effort); n++; }
  console.log(`memo stamp-unit ${unit}: ${n} card(s) stamped (${inputs} input(s), model ${model}, effort ${effort})${missing ? `, ${missing} MISSING card(s)` : ""}`);
  process.exit(missing ? 1 : 0);
}

if (cmd === "verify") {
  const unit = rest[0] ?? ""; const date = opt("--date") ?? new Date().toISOString().slice(0, 10);
  const cards = cardsFor(unit);
  if (!cards.length) { console.error(`memo: unit ${unit} not found`); process.exit(2); }
  const missing = cards.filter(c => !existsSync(c));
  if (missing.length) { console.log(`memo verify ${unit}: ${missing.length} card(s) MISSING — nothing written: ${missing.join(" ")}`); process.exit(1); }
  let summary = "";
  try { summary = execSync(`bun scripts/synthesis/quote-check.ts --summary ${cards.map(c => `"${c}"`).join(" ")}`, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim(); }
  catch (e: any) { summary = (String(e.stdout ?? "") + String(e.stderr ?? "")).trim(); }
  const last = summary.split("\n").filter(Boolean).pop() ?? "";
  const fails = Number((last.match(/(\d+) FAIL/) || [])[1] ?? NaN);
  if (!Number.isFinite(fails)) { console.log(`memo verify ${unit}: could not read quote-check's summary — nothing written:\n${summary}`); process.exit(1); }
  if (fails > 0) { console.log(`memo verify ${unit}: quote-check ${last} — nothing written; mark the unit rolled-back (§7 step 6)`); process.exit(1); }
  let written = 0, unstamped = 0;
  for (const card of cards) {
    const text = readFileSync(card, "utf8"); const { fm, body, raw } = parseFrontmatter(text);
    if (!fm.method_sha) unstamped++;
    if (fm.verified) continue;
    const lines = raw.split("\n").filter(l => !/^verified:/.test(l));
    writeFileSync(card, `---\n${lines.join("\n")}\nverified: ${date} quote-check+coverage\n---\n${body}`); written++;
  }
  console.log(`memo verify ${unit}: ${last} — verified: written to ${written} card(s), ${cards.length - written} already verified${unstamped ? `; WARNING ${unstamped} card(s) unstamped (run stamp-unit first)` : ""}`);
  process.exit(unstamped ? 1 : 0);
}

if (cmd === "restamp") {
  const cards = rest.includes("--all")
    ? [...walkMd("docs/analysis/inventory"), ...walkMd("docs/analysis/concepts")].filter(isCardPath)
    : rest.filter(a => !a.startsWith("--"));
  let done = 0, skipped = 0;
  for (const card of cards) {
    const { fm, inputs } = recorded(card);
    if (!inputs || !fm.model || !fm.effort) { skipped++; console.log(`SKIP ${card} — unstamped (use stamp with --model/--effort)`); continue; }
    writeStamp(card, String(fm.model), String(fm.effort)); done++;
  }
  console.log(`memo restamp: ${done} card(s) re-hashed (model, effort, verified kept), ${skipped} skipped`);
  process.exit(skipped ? 1 : 0);
}

if (cmd === "audit") {
  const cards = [...walkMd("docs/analysis/inventory"), ...walkMd("docs/analysis/concepts")].filter(isCardPath);
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

console.error("usage: memo.ts check <unit> | stamp <card> --model <id> --effort <lvl> | restamp <card…>|--all | audit");
process.exit(2);
