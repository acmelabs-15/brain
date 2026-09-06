// _lib.ts — shared helpers for the synthesis tooling. Pure Bun, no dependencies.
import { readFileSync, existsSync, statSync, readdirSync, lstatSync } from "fs";
import { join } from "path";
import { createHash } from "crypto";

export const PKGS = ["addy", "matt", "rjm"] as const;
export type Pkg = (typeof PKGS)[number];

export function sha256(buf: Buffer | string): string {
  return createHash("sha256").update(buf).digest("hex");
}
export function fileSha(path: string): string {
  return sha256(readFileSync(path));
}
export function isFile(p: string): boolean {
  try { return statSync(p).isFile(); } catch { return false; }
}
export function isSymlink(p: string): boolean {
  try { return lstatSync(p).isSymbolicLink(); } catch { return false; }
}

/** Parse YAML-ish frontmatter (flat `key: value` lines, plus `key:` followed by `  - item` lists). */
export function parseFrontmatter(text: string): { fm: Record<string, any>; body: string; raw: string } {
  if (!text.startsWith("---\n")) return { fm: {}, body: text, raw: "" };
  const end = text.indexOf("\n---", 4);
  if (end < 0) return { fm: {}, body: text, raw: "" };
  const raw = text.slice(4, end);
  const body = text.slice(end + 4).replace(/^\n/, "");
  const fm: Record<string, any> = {};
  let listKey: string | null = null;
  for (const line of raw.split("\n")) {
    const li = line.match(/^\s+-\s+(.*)$/);
    if (li && listKey) { (fm[listKey] as any[]).push(parseScalarOrPair(li[1] ?? "")); continue; }
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    const [, k = "", v = ""] = kv;
    if (v === "") { fm[k] = []; listKey = k; } else { fm[k] = stripQuotes(v.replace(/\s+#.*$/, "")); listKey = null; }
  }
  return { fm, body, raw };
}
function parseScalarOrPair(s: string): any {
  // "path: x, sha256: y" style inline pairs → object; otherwise scalar
  if (/^\{.*\}$/.test(s)) {
    const o: Record<string, string> = {};
    for (const part of s.slice(1, -1).split(",")) { const m = part.match(/^\s*([\w-]+):\s*(.*?)\s*$/); if (m) o[m[1] ?? ""] = stripQuotes(m[2] ?? ""); }
    return o;
  }
  return stripQuotes(s);
}
function stripQuotes(s: string): string { return s.replace(/^["'](.*)["']$/, "$1").trim(); }

/** Rows of a manifest table: `| Path | Bytes | Type | Checked |`. */
export type ManifestRow = { path: string; bytes: number; type: string; checked: boolean };
export function readManifest(pkg: string, dir = "docs/analysis/manifest"): ManifestRow[] {
  const p = join(dir, `${pkg}.md`);
  if (!existsSync(p)) return [];
  const rows: ManifestRow[] = [];
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line.startsWith("| ") || line.startsWith("| Path")) continue;
    const c = line.split("|").map(s => s.trim());
    if (c.length < 5 || !c[1]) continue;
    rows.push({ path: c[1], bytes: parseInt(c[2] ?? "", 10) || 0, type: c[3] ?? "", checked: (c[4] ?? "").startsWith("[x]") });
  }
  return rows;
}

export const UNITS_P1 = "docs/analysis/manifest/units.md";   // Phase 1: inv-<pkg>-N, one row per source file
export const UNITS_P2 = "docs/analysis/manifest/units-p2.md"; // Phase 2: cc-<pkg>-N, one row per concept slug (D-023)
export type UnitRow = { unit: string; pkg: string; path: string; bytes: number; type: string; part: string };
/** Rows of the unit manifests: `| Unit | Package | Path | Bytes | Type | Part |`. With no argument, BOTH phase files
 *  (Phase 1 units.md, then Phase 2 units-p2.md when it exists) — every consumer (units.ts, budget.ts, memo.ts,
 *  unit-facts.ts) sees one unit set. For a concept row Path is the concept slug, Bytes the occurrence count, Type
 *  `concept`, Part the concept's verbatim name. */
export function readUnits(file?: string): UnitRow[] {
  const files = file ? [file] : [UNITS_P1, UNITS_P2];
  const rows: UnitRow[] = [];
  for (const f of files) {
    if (!existsSync(f)) continue;
    for (const line of readFileSync(f, "utf8").split("\n")) {
      if (!line.startsWith("| ") || line.startsWith("| Unit")) continue;
      const c = line.split("|").map(s => s.trim());
      if (c.length < 5 || !c[1]) continue;
      rows.push({ unit: c[1], pkg: c[2] ?? "", path: c[3] ?? "", bytes: parseInt(c[4] ?? "", 10) || 0, type: c[5] ?? "", part: c[6] && c[6] !== "—" ? c[6] : "" });
    }
  }
  return rows;
}
export const isConceptUnit = (unit: string) => /^cc-/.test(unit);
/** The unit report path (§7 step 7 / R7): inventory units report under inventory/<pkg>/_units, concept units under concepts/<pkg>/_units. */
export function reportPathFor(unit: string, pkg: string): string {
  return isConceptUnit(unit) ? `docs/analysis/concepts/${pkg}/_units/${unit}.md` : `docs/analysis/inventory/${pkg}/_units/${unit}.md`;
}
/** Every card a unit produces (not the report): inventory cards for inv- units, concept cards for cc- units. */
export function cardsFor(unit: string, rows: UnitRow[] = readUnits().filter(r => r.unit === unit)): string[] {
  if (!rows.length) return [];
  const pkg = rows[0]!.pkg;
  return isConceptUnit(unit) ? rows.map(r => `docs/analysis/concepts/${pkg}/${r.path}.md`) : rows.filter(r => !needsNoCard(r.type)).map(r => `docs/analysis/inventory/${pkg}/${slugOf(r.path)}`);
}

/** The slug of a concept name as coverage.ts has always computed it: lowercased, runs of non-alphanumerics → `-`. */
export function conceptSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
export type ConceptOccurrence = { card: string; path: string; line: number; role: string };
export type Concept = { slug: string; name: string; pkg: string; occurrences: ConceptOccurrence[] };
/** Every concept a package's inventory names, from the `## Concepts named` sections of its cards, in manifest order
 *  (D-023). One entry per slug; `name` is the first verbatim spelling seen; occurrences keep card, source path, line, role.
 *  Deterministic for a fixed tree — the Phase 2 partition and every consumer derive from this. */
export function conceptIndex(pkg: string): Map<string, Concept> {
  const idx = new Map<string, Concept>();
  const dir = `docs/analysis/inventory/${pkg}`;
  if (!existsSync(dir)) return idx;
  const listing = new Set(readdirSync(dir).filter(f => f.endsWith(".md") && !f.startsWith("_")));
  const ordered = readManifest(pkg).map(r => slugOf(r.path)).filter(f => listing.has(f));
  for (const f of listing) if (!ordered.includes(f)) ordered.push(f); // cards without a manifest row (should not exist) go last
  for (const f of ordered) {
    const card = `${dir}/${f}`;
    const text = readFileSync(card, "utf8");
    const m = text.match(/^## Concepts named[^\n]*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m);
    if (!m) continue;
    for (const line of (m[1] ?? "").split("\n")) {
      const o = line.match(/^- `([^`]+)`(.*)$/); // the same line shape coverage.ts counts
      if (!o) continue;
      const name = o[1] ?? ""; const slug = conceptSlug(name); if (!slug) continue;
      const rest = o[2] ?? "";
      const loc = rest.match(/([^\s—`(]+):(\d+)/); // first path:line after the name; absent on a few lines — the card's own path then stands
      const parts = rest.split(/\s+—\s+/).map(x => x.trim()).filter(Boolean);
      const role = parts.length ? parts[parts.length - 1]! : "";
      const c = idx.get(slug) ?? { slug, name, pkg, occurrences: [] };
      c.occurrences.push({ card, path: loc?.[1] ?? "", line: Number(loc?.[2] ?? 0), role: /:\d+$/.test(role) ? "" : role });
      idx.set(slug, c);
    }
  }
  return idx;
}

/** Manifest row types that need no inventory card: a symlink's target has its own rows; a binary asset
 *  (image, video, font, archive) has nothing to quote — the card of the file that references it records it. */
export const NO_CARD_TYPES = new Set(["symlink", "asset"]);
/** True for a manifest row that needs no card: symlink, asset, or an external page that could not be fetched
 *  (`external-doc (unavailable)`) — the row stays so the gap is visible; Phase 0 step 3 records it in the handoff. */
export const needsNoCard = (type: string) => NO_CARD_TYPES.has(type) || /unavailable/.test(type);
export const ASSET_EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".mp4", ".mov", ".webm", ".ico", ".pdf", ".woff", ".woff2", ".ttf", ".otf", ".zip", ".gz", ".tar", ".bin"]);

/** Rows of docs/plan/units.md — the unit STATUS table (edited only through units.ts):
 *  `| Unit | Package | Files | Bytes | Status | Session | Output |`. */
export type UnitStatusRow = { unit: string; pkg: string; files: number; bytes: number; status: string; session: string; output: string };
export const UNIT_STATUSES = ["pending", "in-progress", "done", "blocked", "rolled-back"] as const;
export function readUnitStatus(file = "docs/plan/units.md"): UnitStatusRow[] {
  if (!existsSync(file)) return [];
  const rows: UnitStatusRow[] = [];
  for (const line of readFileSync(file, "utf8").split("\n")) {
    if (!line.startsWith("| ") || line.startsWith("| Unit")) continue;
    const c = line.split("|").map(s => s.trim());
    if (c.length < 8 || !c[1] || !/^(inv|cc)-/.test(c[1])) continue;
    rows.push({ unit: c[1], pkg: c[2] ?? "", files: parseInt(c[3] ?? "", 10) || 0, bytes: parseInt(c[4] ?? "", 10) || 0, status: c[5] ?? "", session: c[6] ?? "", output: c[7] ?? "" });
  }
  return rows;
}

/** The slug a source path maps to for its inventory entry (mirrors manifest.ts getSlug). */
export function slugOf(p: string): string {
  // Card file name for a source path: `/`, `.`, `_` → `-`, lowercased, `.md` appended.
  // `skills/interview-me/SKILL.md` → `skills-interview-me-skill-md.md`;
  // `external/idea-refine.md` → `external-idea-refine-md.md`.
  // Two paths that lowercase to the same slug are a manifest error (manifest.ts fails loudly).
  // Card presence is decided by comparing this string against a directory LISTING — never by
  // existsSync, which is case-insensitive on macOS and produced the phantom check-offs of session 012.
  return p.replace(/^\.?\/?/, "").replace(/[\/._]/g, "-").toLowerCase() + ".md";
}

/** Where a manifest path lives on disk. `external/<x>` rows are the snapshots under sources/<pkg>-external/. */
export function sourcePath(pkg: string, rel: string): string {
  if (rel.startsWith("external/")) return `sources/${pkg}-external/${rel.slice("external/".length)}`;
  return `sources/${pkg}/${rel}`;
}

/** A card is a markdown file under inventory/<pkg>/ or concepts/<pkg>/ whose path has no `_`-prefixed segment:
 *  `_units/` (reports), `_divergence/` (divergence cards), `_verification.md` (Phase 1V), `_index.md` (Phase 2) are not cards (D-022). */
export function isCardPath(p: string): boolean {
  return p.endsWith(".md") && !p.split("/").some(seg => seg.startsWith("_"));
}

export function walkMd(dir: string): string[] {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walkMd(p));
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out.sort();
}

/** `## Heading — required[, verbatim]` sections of a card body, with their text. */
export function sections(body: string): { heading: string; required: boolean; text: string }[] {
  const out: { heading: string; required: boolean; text: string }[] = [];
  const parts = body.split(/^## /m).slice(1);
  for (const part of parts) {
    const nl = part.indexOf("\n");
    const heading = part.slice(0, nl).trim();
    out.push({ heading, required: /required/i.test(heading), text: part.slice(nl + 1).trim() });
  }
  return out;
}
