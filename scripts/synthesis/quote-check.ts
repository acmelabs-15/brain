#!/usr/bin/env bun
// quote-check.ts — byte-exact verification of every citation in a card (METHOD R3, R11).
//
//   bun scripts/synthesis/quote-check.ts <card.md> [more cards…]      one or more cards
//   bun scripts/synthesis/quote-check.ts --all [pkg]                  every card under docs/analysis/inventory and concepts
//   bun scripts/synthesis/quote-check.ts --summary <card.md>…        counts only, for these cards (the §7 verification form)
//   bun scripts/synthesis/quote-check.ts --summary --all [pkg]        counts only, for every card
// With --all and no cards on disk yet (Phase 0) it prints "0 card(s)" and exits 0.
//
// A citation is any of:
//   > "quoted text" — path:line                      (blockquote, verbatim field)
//   "quoted text" — path:line                        (inline)
//   `term` — path:line[, line…] — defined here|used here
//   - <kind> <name> — path:line                      (Invokes rows)
//   `text` — path:a-b                                (a range: text must occur on some line in a..b, or span them)
// A citation into a DIFFERENT file than the card's own `path:` (Invokes / Invoked by rows) passes when that
// line contains the quoted text OR names this card's file (path, path without extension, or skill dir name).
// `term` matches are case-insensitive; "quoted" matches are exact after whitespace collapsing.
// The source is sources/<pkg>/<path>; pkg comes from the card's frontmatter `package:`.
// PASS: the quoted bytes occur on the cited line (whitespace-collapsed comparison, case-sensitive).
// FAIL: they do not, or the line does not exist, or the source file is missing.
// Exit 0 when every citation passes, 1 otherwise. Output is one line per citation, then a total.
import { readFileSync, existsSync } from "fs";
import { parseFrontmatter, walkMd, isFile, sourcePath } from "./_lib";

const args = process.argv.slice(2);
const summary = args.includes("--summary");
const all = args.includes("--all");
const pkgFilter = all ? args.filter(a => !a.startsWith("--"))[0] : undefined;
let cards = args.filter(a => !a.startsWith("--"));
if (all) {
  cards = [...walkMd("docs/analysis/inventory"), ...walkMd("docs/analysis/concepts")]
    .filter(p => !p.includes("/_units/") && !p.includes("/_divergence/"))
    .filter(p => !pkgFilter || p.includes(`/${pkgFilter}/`));
}
if (!cards.length && all) { console.log("quote-check: 0 PASS, 0 FAIL, 0 MISSING source, across 0 card(s); 0 card(s) with failures"); process.exit(0); }
if (!cards.length) { console.error("usage: quote-check.ts <card.md>… | --all [pkg] [--summary]"); process.exit(2); }

const norm = (s: string) => s.replace(/\s+/g, " ").trim();
const srcCache = new Map<string, string[] | null>();
function sourceLines(pkg: string, rel: string): string[] | null {
  const key = `${pkg}/${rel}`;
  if (srcCache.has(key)) return srcCache.get(key)!;
  const p = sourcePath(pkg, rel);
  const lines = isFile(p) ? readFileSync(p, "utf8").split("\n") : null;
  srcCache.set(key, lines);
  return lines;
}

type Cite = { quote: string; path: string; lines: number[]; range?: [number, number]; kind: string; cardLine: number };
function extract(body: string): Cite[] {
  const out: Cite[] = [];
  body.split("\n").forEach((line, i) => {
    const n = i + 1;
    // blockquote / inline "…" — path:line
    for (const m of line.matchAll(/["“]((?:[^"”\\]|\\.)+?)["”]\s+—\s+([^\s`|]+?):(\d+(?:-\d+)?(?:,\s*\d+)*)/g)) {
      out.push(cite((m[1] ?? "").replace(/\\(["“”])/g, "$1"), m[2] ?? "", m[3] ?? "", "quote", n));
    }
    // `term` — path:line[, line] [— defined here|used here]
    for (const m of line.matchAll(/`([^`]+)`\s+—\s+([^\s`|]+?):(\d+(?:-\d+)?(?:,\s*\d+)*)/g)) {
      out.push(cite(m[1] ?? "", m[2] ?? "", m[3] ?? "", "term", n));
    }
    // Invokes / Structure rows: "- kind name — path:line" without quotes or backticks
    const inv = line.match(/^-\s+(?:skill|command|agent|script|reference|doc|template|config|file)\s+(\S+)\s+—\s+([^\s`|]+?):(\d+(?:-\d+)?(?:,\s*\d+)*)\s*$/);
    if (inv) out.push(cite(inv[1] ?? "", inv[2] ?? "", inv[3] ?? "", "invoke", n));
  });
  return out;
}
function cite(quote: string, path: string, spec: string, kind: string, cardLine: number): Cite {
  const c: Cite = { quote, path, lines: [], kind, cardLine };
  for (const part of spec.split(",").map(s => s.trim())) {
    const r = part.match(/^(\d+)-(\d+)$/);
    if (r) c.range = [parseInt(r[1] ?? ""), parseInt(r[2] ?? "")]; else c.lines.push(parseInt(part));
  }
  return c;
}

let pass = 0, fail = 0, missing = 0, offByOne = 0, cardsFailing = 0;
for (const card of cards) {
  const text = readFileSync(card, "utf8");
  const { fm, body } = parseFrontmatter(text);
  const pkg = String(fm.package ?? "").trim();
  const own = String(fm.path ?? "").trim();
  const cites = extract(body);
  let cardFail = 0;
  for (const c of cites) {
    const lines = pkg ? sourceLines(pkg, c.path) : null;
    let ok = false, why = "", tag = "FAIL";
    if (!lines) { why = `source missing: ${pkg ? sourcePath(pkg, c.path) : "(no package in frontmatter)"}`; tag = "MISSING"; missing++; }
    else {
      const q = norm(c.quote);
      // `term` rows are matched case-insensitively (a heading may capitalise the term); "quotes" are exact.
      const fold = (s: string) => (c.kind === "term" ? s.toLowerCase() : s);
      // Rows that cite ANOTHER file (Invokes / Invoked by) are satisfied when that line names this card's
      // own file: its full path, its path without extension, or — for SKILL.md/README.md — its directory name.
      const alts = [q];
      if (own && c.path !== own) {
        const base = own.split("/").pop()!, dir = own.split("/").slice(-2, -1)[0];
        alts.push(own, own.replace(/\.[a-z]+$/i, ""));
        if (/^(SKILL|README|index)\.md$/i.test(base) && dir) alts.push(dir);
        else if (base.length > 6) alts.push(base);
      }
      const at = (ln: number) => ln >= 1 && ln <= lines.length && alts.some(a => a && fold(norm(lines[ln - 1]!)).includes(fold(norm(a))));
      const anyIn = (a: number, b: number) => { for (let l = a; l <= b && l <= lines.length; l++) if (at(l)) return true; return false; };
      if (c.range) ok = anyIn(c.range[0], c.range[1]) || spansRange(lines, c.range, q);
      else ok = c.lines.length > 0 && c.lines.every(at);
      if (!ok) {
        const badLines = c.range ? [] : c.lines.filter(l => !at(l));
        const bad = c.range ? `${c.range[0]}-${c.range[1]}` : badLines.join(",");
        const near = badLines.filter(l => at(l - 1) || at(l + 1));
        if (badLines.some(l => l > lines.length)) why = `line ${bad} beyond EOF (${lines.length} lines)`;
        else if (near.length === badLines.length && near.length) { why = `off by one (found at ${near.map(l => at(l - 1) ? l - 1 : l + 1).join(",")})`; offByOne++; }
        else why = `not on line ${bad}`;
      }
    }
    if (ok) pass++; else if (lines) { fail++; cardFail++; }
    if (!summary) console.log(`${ok ? "PASS" : tag} ${card}:${c.cardLine} → ${c.path}:${c.range ? c.range.join("-") : c.lines.join(",")} ${JSON.stringify(c.quote.length > 80 ? c.quote.slice(0, 77) + "…" : c.quote)}${ok ? "" : " — " + why}`);
  }
  if (cardFail) cardsFailing++;
}
// a long quote may span several source lines inside a cited range
function spansRange(lines: string[], [a, b]: [number, number], q: string): boolean {
  return norm(lines.slice(a - 1, b).join(" ")).includes(q);
}
console.log(`quote-check: ${pass} PASS, ${fail} FAIL (${offByOne} of them off by one line), ${missing} MISSING source, across ${cards.length} card(s); ${cardsFailing} card(s) with failures`);
process.exit(fail || missing ? 1 : 0);
