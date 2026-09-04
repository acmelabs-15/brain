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

/** Rows of docs/analysis/manifest/units.md: `| Unit | Package | Path | Bytes |`. */
export type UnitRow = { unit: string; pkg: string; path: string; bytes: number };
export function readUnits(file = "docs/analysis/manifest/units.md"): UnitRow[] {
  if (!existsSync(file)) return [];
  const rows: UnitRow[] = [];
  for (const line of readFileSync(file, "utf8").split("\n")) {
    if (!line.startsWith("| ") || line.startsWith("| Unit")) continue;
    const c = line.split("|").map(s => s.trim());
    if (c.length < 5 || !c[1]) continue;
    rows.push({ unit: c[1], pkg: c[2] ?? "", path: c[3] ?? "", bytes: parseInt(c[4] ?? "", 10) || 0 });
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
