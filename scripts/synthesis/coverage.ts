#!/usr/bin/env bun
// coverage.ts — the anti-drift coverage check (METHOD §10, R1, R11).
//
//   bun scripts/synthesis/coverage.ts            full report, exit 1 on any failure
//   bun scripts/synthesis/coverage.ts --quiet    totals only
//
// Checks, per package:
//   1. Manifest ↔ cards. Every manifest row has an inventory card at docs/analysis/inventory/<pkg>/<slug>,
//      OR is an EXACT alias claimed by exactly one canonical card (`aliases:` in that card's frontmatter).
//      Matching is by exact string against the directory listing — never existsSync (case-insensitive FS).
//      Rows the manifest marks [x] without a card, and cards without a row, are both reported.
//   2. Required fields. Every `## … — required` section of every card is non-empty (`none` counts as filled).
//   3. R11 (a). Every EXACT alias in <pkg>-duplicates.md is claimed by exactly one card.
//   4. R11 (b). Every VARIANT pair in the ledger has a divergence card under _divergence/ whose
//      `### Hunk` count equals the ledger diff's `@@` hunk count.
//   5. Concepts (Phase 2+, only once docs/analysis/concepts/<pkg> exists): every backticked name in a
//      card's "Concepts named" section has a concept card with that slug.
import { readFileSync, existsSync, readdirSync } from "fs";
import { PKGS, readManifest, slugOf, parseFrontmatter, sections, walkMd, isSymlink, sourcePath } from "./_lib";

const quiet = process.argv.includes("--quiet");
const say = (s: string) => { if (!quiet) console.log(s); };
let failures = 0;
const fail = (s: string) => { failures++; say(`FAIL ${s}`); };

type Ledger = { exact: { canonical: string; aliases: string[] }[]; variants: { id: string; a: string; b: string; hunks: number }[] };
function readLedger(pkg: string): Ledger | null {
  const p = `docs/analysis/manifest/${pkg}-duplicates.md`;
  if (!existsSync(p)) return null;
  const text = readFileSync(p, "utf8");
  const exact: Ledger["exact"] = [];
  for (const line of text.split("\n")) {
    const m = line.match(/^\| \d+ \| `([^`]+)` \| (.*?) \| \d+ \| `[0-9a-f]+` \|$/);
    if (m) exact.push({ canonical: m[1] ?? "", aliases: [...(m[2] ?? "").matchAll(/`([^`]+)`/g)].map(x => x[1] ?? "") });
  }
  const variants: Ledger["variants"] = [];
  const parts = text.split(/^### (V\d+) · /m);
  for (let i = 1; i < parts.length; i += 2) {
    const head = (parts[i + 1] ?? "").split("\n")[0] ?? "";
    const hm = head.match(/`([^`]+)` ↔ `([^`]+)`/);
    const hunks = ((parts[i + 1] ?? "").match(/^@@ /gm) || []).length;
    if (hm) variants.push({ id: parts[i] ?? "", a: hm[1] ?? "", b: hm[2] ?? "", hunks });
  }
  return { exact, variants };
}

const totals = { rows: 0, symlinks: 0, covered: 0, uncovered: 0, emptyRequired: 0, aliasProblems: 0, variantProblems: 0, orphanCards: 0, conceptsMissing: 0 };

for (const pkg of PKGS) {
  const manifest = readManifest(pkg);
  if (!manifest.length) continue;
  const dir = `docs/analysis/inventory/${pkg}`;
  const listing = new Set(existsSync(dir) ? readdirSync(dir).filter(f => f.endsWith(".md")) : []);
  const cards = [...listing].map(f => `${dir}/${f}`);

  // alias claims: card → aliases
  const claims = new Map<string, string[]>(); // alias path → claiming cards
  const cardMeta = new Map<string, { fm: Record<string, any>; body: string }>();
  for (const c of cards) {
    const parsed = parseFrontmatter(readFileSync(c, "utf8"));
    cardMeta.set(c, parsed);
    const al = Array.isArray(parsed.fm.aliases) ? parsed.fm.aliases as string[] : [];
    for (const a of al) (claims.get(a) ?? claims.set(a, []).get(a)!).push(c);
  }
  const ledger = readLedger(pkg);
  const aliasSet = new Set(ledger ? ledger.exact.flatMap(g => g.aliases) : []);

  // 1. manifest ↔ cards
  const rowSlugs = new Set<string>();
  for (const r of manifest) {
    totals.rows++;
    const slug = slugOf(r.path); rowSlugs.add(slug);
    const hasCard = listing.has(slug);
    const claimed = claims.get(r.path);
    if (isSymlink(sourcePath(pkg, r.path))) { totals.symlinks++; continue; } // a symlink row needs no card; its target rows do
    if (hasCard) totals.covered++;
    else if (aliasSet.has(r.path) && claimed && claimed.length === 1) totals.covered++;
    else { totals.uncovered++; if (r.checked) fail(`${pkg}: manifest marks [x] but no card for ${r.path} (expected ${dir}/${slug})`); }
  }
  for (const f of listing) if (!rowSlugs.has(f)) { totals.orphanCards++; fail(`${pkg}: card without manifest row: ${dir}/${f}`); }

  // 2. required fields
  for (const [c, { body }] of cardMeta) {
    for (const s of sections(body)) if (s.required && s.text.replace(/\s/g, "") === "") { totals.emptyRequired++; fail(`${pkg}: empty required section "${s.heading}" in ${c}`); }
  }

  // 3./4. R11
  if (ledger) {
    for (const g of ledger.exact) for (const a of g.aliases) {
      const n = (claims.get(a) ?? []).length;
      if (listing.has(slugOf(a)) && n === 0) continue; // alias has its own card (pre-ledger); allowed but wasteful — reported below
      if (n !== 1 && (listing.has(slugOf(g.canonical)) || n > 0)) { totals.aliasProblems++; fail(`${pkg}: R11(a) alias ${a} claimed by ${n} card(s), expected 1 (canonical ${g.canonical})`); }
      if (listing.has(slugOf(a)) && listing.has(slugOf(g.canonical))) say(`WARN ${pkg}: alias ${a} has its own card AND a canonical card exists — merge (METHOD §2.4)`);
    }
    const divDir = `${dir}/_divergence`;
    const divCards = walkMd(divDir);
    for (const v of ledger.variants) {
      const card = divCards.find(c => { const fm = parseFrontmatter(readFileSync(c, "utf8")).fm; return fm.ledger_id === v.id || (fm.canonical && fm.variant && new Set([fm.canonical, fm.variant]).size === 2 && [v.a, v.b].every(x => x === fm.canonical || x === fm.variant)); });
      const bothInventoried = listing.has(slugOf(v.a)) || listing.has(slugOf(v.b));
      if (!bothInventoried) continue; // not reached yet
      if (!card) { totals.variantProblems++; fail(`${pkg}: R11(b) no divergence card for ${v.id} ${v.a} ↔ ${v.b}`); continue; }
      const hunks = (readFileSync(card, "utf8").match(/^### Hunk /gm) || []).length;
      if (hunks !== v.hunks) { totals.variantProblems++; fail(`${pkg}: R11(b) ${card} has ${hunks} hunk section(s); ledger diff has ${v.hunks}`); }
    }
  }

  // 5. concepts
  const cdir = `docs/analysis/concepts/${pkg}`;
  if (existsSync(cdir)) {
    const concepts = new Set(readdirSync(cdir).filter(f => f.endsWith(".md")).map(f => f.replace(/\.md$/, "")));
    for (const [c, { body }] of cardMeta) {
      const sec = sections(body).find(s => /^Concepts named/.test(s.heading));
      if (!sec) continue;
      for (const m of sec.text.matchAll(/^- `([^`]+)`/gm)) {
        const slug = (m[1] ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        if (!concepts.has(slug)) { totals.conceptsMissing++; fail(`${pkg}: concept \`${m[1]}\` named in ${c} has no card ${cdir}/${slug}.md`); }
      }
    }
  }
}

console.log(`coverage: rows ${totals.rows} (${totals.symlinks} symlink rows need no card), covered ${totals.covered}, uncovered ${totals.uncovered}, orphan cards ${totals.orphanCards}, empty required ${totals.emptyRequired}, R11 alias problems ${totals.aliasProblems}, R11 variant problems ${totals.variantProblems}, concepts without card ${totals.conceptsMissing}`);
console.log(failures ? `coverage: ${failures} failure(s)` : "coverage: clean");
process.exit(failures ? 1 : 0);
