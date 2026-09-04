#!/usr/bin/env bun
// manifest.ts — the coverage manifests (METHOD §1, Phase 0 step 3, R1).
//
//   bun scripts/synthesis/manifest.ts                 regenerate docs/analysis/manifest/{addy,matt,rjm,rjm-excluded}.md
//   bun scripts/synthesis/manifest.ts --no-fetch      do not fetch external docs (use existing snapshots only)
//
// One row per in-scope file: | Path | Bytes | Type | Checked |. `Checked` is DERIVED: [x] iff a card named
// slugOf(path) is present in the directory listing of docs/analysis/inventory/<pkg>/ (exact string match,
// never existsSync), or the path is an EXACT alias claimed by a card's `aliases:`. Nothing else may tick a row.
//
// addy, matt: every tracked file under sources/<pkg>/ (git ls-files, so untracked junk is excluded) plus one
//   `external/<skill>.md` row per skill, pointing at the snapshot in sources/<pkg>-external/ (fetched once).
// rjm: reachability from the §1.2 entry points, following Skill(...), Task(subagent_type=...), @file, markdown
//   links, `.claude/skills/<x>` and `scripts/...` path mentions; stopping at the §1.2 exclusion boundary.
//   Task(subagent_type="x") resolves to `.claude/agents/x.md` AND `.claude/skills/x/` — whichever exist.
//   Everything reachable-but-excluded is listed in rjm-excluded.md so the boundary is auditable.
// Symlinks are rows of type `symlink` (bytes 0); they need no card — their targets are rows of their own.
// Two paths with the same slug abort the run: that is a manifest error, not something to paper over.
import { readFileSync, existsSync, readdirSync, statSync, lstatSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname, extname, resolve } from "path";
import { execSync } from "child_process";
import { slugOf, parseFrontmatter, isSymlink, sourcePath } from "./_lib";

const noFetch = process.argv.includes("--no-fetch");
type Row = { path: string; bytes: number; type: string };

function tracked(dir: string): string[] {
  return execSync("git ls-files", { cwd: dir, encoding: "utf8" }).trim().split("\n").filter(Boolean);
}
function fileType(p: string): string {
  if (isSymlink(p)) return "symlink";
  const rel = p.replace(/^sources\/[^/]+\//, "");
  if (rel.startsWith("external/") || p.includes("-external/")) return "external-doc";
  if (rel.includes("/skills/") || rel.startsWith("skills/")) {
    if (rel.includes("/scripts/")) return "script";
    if (rel.includes("/references/")) return "reference";
    return "skill";
  }
  if (rel.includes("commands/")) return "command";
  if (rel.includes("agents/")) return "agent";
  if (rel.includes("scripts/")) return "script";
  if (rel.includes("templates/")) return "template";
  const e = extname(rel).toLowerCase();
  if ([".json", ".toml", ".yml", ".yaml"].includes(e)) return "config";
  if ([".md", ".txt"].includes(e)) return "doc";
  return "file";
}
function bytesOf(p: string): number { try { return isSymlink(p) ? 0 : statSync(p).size; } catch { return 0; } }

/** Derive `Checked` from the card directory listing + alias claims. */
function checkedSet(pkg: string): { cards: Set<string>; claimed: Set<string> } {
  const dir = `docs/analysis/inventory/${pkg}`;
  const cards = new Set(existsSync(dir) ? readdirSync(dir).filter(f => f.endsWith(".md")) : []);
  const claimed = new Set<string>();
  for (const f of cards) {
    const fm = parseFrontmatter(readFileSync(`${dir}/${f}`, "utf8")).fm;
    if (Array.isArray(fm.aliases)) for (const a of fm.aliases) claimed.add(String(a));
  }
  return { cards, claimed };
}
function write(pkg: string, name: string, rows: Row[]) {
  const { cards, claimed } = checkedSet(pkg);
  const seen = new Map<string, string>();
  for (const r of rows) {
    const s = slugOf(r.path);
    if (seen.has(s) && seen.get(s) !== r.path) { console.error(`manifest: slug collision in ${pkg}: "${seen.get(s)}" and "${r.path}" both → ${s}`); process.exit(1); }
    seen.set(s, r.path);
  }
  rows.sort((a, b) => a.path.localeCompare(b.path));
  const out = ["| Path | Bytes | Type | Checked |", "|---|---|---|---|",
    ...rows.map(r => `| ${r.path} | ${r.bytes} | ${r.type} | ${r.type === "symlink" ? "[x] (symlink)" : cards.has(slugOf(r.path)) || claimed.has(r.path) ? "[x]" : "[ ]"} |`), ""].join("\n");
  mkdirSync("docs/analysis/manifest", { recursive: true });
  writeFileSync(`docs/analysis/manifest/${name}.md`, out);
  console.log(`manifest: ${name}.md — ${rows.length} rows, ${rows.filter(r => cards.has(slugOf(r.path)) || claimed.has(r.path)).length} checked`);
}

async function externalRows(pkg: string, files: string[]): Promise<Row[]> {
  const skills = new Set<string>();
  for (const f of files) { const m = f.match(/^skills\/([^/]+)\/SKILL\.md$/); if (m) skills.add(m[1] ?? ""); }
  const rows: Row[] = [];
  mkdirSync(`sources/${pkg}-external`, { recursive: true });
  for (const slug of [...skills].sort()) {
    const dest = `sources/${pkg}-external/${slug}.md`;
    const url = pkg === "addy" ? `https://skills.addy.ie/skills/${slug}/` : `https://aihero.dev/skills-${slug}`;
    if (!existsSync(dest) && !noFetch) {
      try {
        const r = await fetch(url);
        if (r.ok) writeFileSync(dest, `<!-- snapshot of ${url} fetched ${new Date().toISOString()} -->\n` + await r.text());
      } catch { /* recorded as unavailable below */ }
    }
    rows.push({ path: `external/${slug}.md`, bytes: existsSync(dest) ? statSync(dest).size : 0, type: existsSync(dest) ? "external-doc" : "external-doc (unavailable)" });
  }
  return rows;
}

async function wholeRepo(pkg: string) {
  const dir = `sources/${pkg}`;
  if (!existsSync(dir)) { console.error(`manifest: ${dir} missing — clone the pin first (§1.1)`); process.exit(1); }
  const files = tracked(dir);
  const rows: Row[] = files.map(f => ({ path: f, bytes: bytesOf(join(dir, f)), type: fileType(join(dir, f)) }));
  rows.push(...await externalRows(pkg, files));
  write(pkg, pkg, rows);
}

// ---------------- rjm: reachability ----------------
const RJM_ENTRY = [".claude/commands/spec.md", ".claude/commands/plan.md", ".claude/commands/build.md", ".claude/commands/test.md", ".claude/commands/ship.md", ".claude/skills/review", "docs/workflow-commands.md", "README.md"];
const EXCL_EXACT = new Set(["exploring-knowledge-graph", "chestertons-fence", "curating-memories", "encode-repo-serena", "using-serena-symbols", "using-forgetful-memory", ".serena", ".forgetful", ".claude-mem", ".mcp.json", "github", "push-pr", "pr-autofix", "pr-quality", "pr-comment-responder", "evals", "tests", "build", "packages"]);
function rjmExcluded(rel: string): boolean {
  if (rel.startsWith(".claude/hooks/") || rel.startsWith("scripts/memory_enhancement/")) return true;
  for (const part of rel.split("/")) {
    if (part.startsWith("memory") || part.includes("serena") || part.includes("forgetful")) return true;
    if (part.startsWith("pr-") || EXCL_EXACT.has(part)) return true;
  }
  return false;
}
function walkAll(dir: string): string[] {
  const out: string[] = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.name === ".git") continue;
    if (e.isDirectory()) out.push(...walkAll(p)); else out.push(p);
  }
  return out;
}
function rjm() {
  const dir = "sources/rjm";
  if (!existsSync(dir)) { console.error(`manifest: ${dir} missing — clone the pin first (§1.1)`); process.exit(1); }
  const trackedSet = new Set(tracked(dir));
  const root = resolve(dir);
  const queue: string[] = [...RJM_ENTRY];
  for (const f of readdirSync(`${dir}/.agents/architecture`).filter(f => f.startsWith("ADR-064-"))) queue.push(`.agents/architecture/${f}`);
  const visited = new Set<string>(), inScope = new Set<string>(), excluded = new Set<string>();
  const enqueue = (rel: string) => { rel = rel.replace(/^\.?\//, "").replace(/\/+/g, "/").split("#")[0] ?? ""; if (rel) queue.push(rel); };
  while (queue.length) {
    let rel = queue.shift()!;
    const full = join(dir, rel);
    if (!existsSync(full)) continue;
    // normalise through symlinks but never leave the clone
    try { const real = require("fs").realpathSync(full); if (real.startsWith(root + "/")) rel = real.slice(root.length + 1); } catch { }
    if (visited.has(rel)) continue; visited.add(rel);
    if (rjmExcluded(rel)) { excluded.add(rel); continue; }
    if (statSync(full).isDirectory()) { for (const f of walkAll(full)) enqueue(f.slice(dir.length + 1)); continue; }
    if (!trackedSet.has(rel)) continue;
    if ([".png", ".jpg", ".jpeg", ".gif", ".mp4", ".mov", ".ico", ".pdf"].includes(extname(rel).toLowerCase())) { inScope.add(rel); continue; }
    inScope.add(rel);
    const text = readFileSync(full, "utf8");
    for (const m of text.matchAll(/Skill\((["'])(.*?)\1\)/g)) { enqueue(`.claude/skills/${m[2]}`); }
    for (const m of text.matchAll(/Task\(subagent_type=(["'])(.*?)\1/g)) { enqueue(`.claude/agents/${m[2]}.md`); enqueue(`.claude/skills/${m[2]}`); }
    for (const m of text.matchAll(/@file\s+(\S+)/g)) enqueue(m[1] ?? "");
    for (const m of text.matchAll(/\[[^\]]*?\]\(([^)\s]+)\)/g)) { const l = m[1] ?? ""; if (!/^(https?:|mailto:|#)/.test(l)) enqueue(join(dirname(rel), l)); }
    for (const m of text.matchAll(/\.claude\/(?:skills|agents|commands)\/[A-Za-z0-9_.-]+(?:\/[A-Za-z0-9_.-]+)*/g)) enqueue(m[0]);
    for (const m of text.matchAll(/(?:^|[\s`'"(])((?:scripts|\.agents\/architecture|docs)\/[A-Za-z0-9_\-\/.]+\.(?:py|sh|ts|js|md|yaml|yml|json))/g)) enqueue(m[1] ?? "");
  }
  const toRows = (set: Set<string>) => [...set].map(p => ({ path: p, bytes: bytesOf(join(dir, p)), type: fileType(join(dir, p)) }));
  write("rjm", "rjm", toRows(inScope));
  write("rjm", "rjm-excluded", toRows(excluded).filter(r => existsSync(join(dir, r.path)) && !statSync(join(dir, r.path)).isDirectory()));
  console.log(`manifest: rjm reachability visited ${visited.size} paths; ${inScope.size} in scope, ${excluded.size} excluded`);
}

await wholeRepo("addy");
await wholeRepo("matt");
rjm();
