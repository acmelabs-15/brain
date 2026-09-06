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
//      card's "Concepts named" section has a concept card with that slug. Counted as "concepts without card" —
//      pending work, not a failure, exactly like uncovered manifest rows in Phase 1; Phase 2 is done at zero (D-023).
//   6. Concept cards (D-023): every concept card's slug is named by some inventory card (no orphan concept cards);
//      its required sections (Definition, Where used, Implementation status, Design notes) are non-empty; and
//      docs/analysis/concepts/<pkg>/_index.md, when present, lists every card exactly once (concept-index.ts derives it).
import { readFileSync, existsSync, readdirSync } from "fs";
import { PKGS, readManifest, slugOf, parseFrontmatter, sections, walkMd, isSymlink, sourcePath, needsNoCard, conceptSlug } from "./_lib";

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

const totals = { rows: 0, symlinks: 0, covered: 0, uncovered: 0, emptyRequired: 0, aliasProblems: 0, variantProblems: 0, orphanCards: 0, conceptsMissing: 0, indexProblems: 0 };

for (const pkg of PKGS) {
  const manifest = readManifest(pkg);
  if (!manifest.length) continue;
  const dir = `docs/analysis/inventory/${pkg}`;
  const listing = new Set(existsSync(dir) ? readdirSync(dir).filter(f => f.endsWith(".md") && !f.startsWith("_")) : []); // `_verification.md` etc. are not cards (D-022)
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
    if (needsNoCard(r.type) || isSymlink(sourcePath(pkg, r.path))) { totals.symlinks++; continue; } // symlink, asset and unavailable rows need no card (§1.1)
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
    const concepts = new Set(readdirSync(cdir).filter(f => f.endsWith(".md") && !f.startsWith("_")).map(f => f.replace(/\.md$/, "")));
    const named = new Set<string>(); const missingSlugs = new Set<string>();
    for (const [c, { body }] of cardMeta) {
      const sec = sections(body).find(s => /^Concepts named/.test(s.heading));
      if (!sec) continue;
      for (const m of sec.text.matchAll(/^- `([^`]+)`/gm)) {
        const slug = conceptSlug(m[1] ?? ""); named.add(slug);
        if (!concepts.has(slug) && !missingSlugs.has(slug)) { missingSlugs.add(slug); if (!quiet) console.log(`UNCOVERED ${pkg}: concept \`${m[1]}\` (named in ${c}) has no card ${cdir}/${slug}.md yet`); }
      }
    }
    // like uncovered manifest rows in Phase 1, a concept without a card is work pending, not a failure — Phase 2's
    // "Done when" is zero here (D-023)
    totals.conceptsMissing += missingSlugs.size;
    // 6. concept cards: no orphans, required sections filled, _index.md complete
    const CONCEPT_REQUIRED = ["Definition", "Where used", "Implementation status", "Design notes"];
    for (const slug of concepts) {
      const card = `${cdir}/${slug}.md`;
      if (!named.has(slug)) { totals.orphanCards++; fail(`${pkg}: concept card ${card} — no inventory card names \`${slug}\``); }
      const { body } = parseFrontmatter(readFileSync(card, "utf8"));
      const secs = sections(body);
      for (const req of CONCEPT_REQUIRED) { const sec = secs.find(s => s.heading.startsWith(req)); if (!sec || sec.text.replace(/\s/g, "") === "") { totals.emptyRequired++; fail(`${pkg}: concept card ${card} — section "${req}" missing or empty`); } }
    }
    const indexPath = `${cdir}/_index.md`;
    if (existsSync(indexPath) && concepts.size) {
      const listed = [...readFileSync(indexPath, "utf8").matchAll(/\]\(\.\/([^)]+)\.md\)/g)].map(m => m[1] ?? "");
      const listedSet = new Set(listed);
      for (const slug of concepts) if (!listedSet.has(slug)) { totals.indexProblems++; fail(`${pkg}: ${indexPath} does not list ${slug}.md — run concept-index.ts`); }
      for (const l of listedSet) if (!concepts.has(l)) { totals.indexProblems++; fail(`${pkg}: ${indexPath} lists ${l}.md, which does not exist — run concept-index.ts`); }
      if (listed.length !== listedSet.size) { totals.indexProblems++; fail(`${pkg}: ${indexPath} lists a card more than once — run concept-index.ts`); }
    }
  }
}

console.log(`coverage: rows ${totals.rows} (${totals.symlinks} symlink/asset/unavailable rows need no card), covered ${totals.covered}, uncovered ${totals.uncovered}, orphan cards ${totals.orphanCards}, empty required ${totals.emptyRequired}, R11 alias problems ${totals.aliasProblems}, R11 variant problems ${totals.variantProblems}, concepts without card ${totals.conceptsMissing}, index problems ${totals.indexProblems}`);
console.log(failures ? `coverage: ${failures} failure(s)` : "coverage: clean");
process.exit(failures ? 1 : 0);
