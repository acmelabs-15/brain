/**
 * Build the eval fixture: a clone of env-setup at a pinned commit with the scenario
 * premises planted, so every eval in evals.json finds the repo state its prompt assumes.
 *
 *   bun evals/fixtures/make-fixture.ts <out-dir> [--source <env-setup checkout or URL>]
 *
 * What it plants, and which eval needs it:
 *   - SES-006 closed (Outcome and handoff written by this script), so exactly two sessions
 *     are open: SES-005, another conversation's, with its placeholders unfilled (evals 1–4:
 *     the file that must stay untouched), and SES-007 "docs review", green, whose Goal names
 *     the README pass as done and the ADR pass as next (evals 3 and 4: close it out / leave it).
 *   - HEAD is a real `fix(finder)` commit that re-syncs `set-favorites.swift` with the
 *     embedded constant, unrecorded in any session (eval 2: "I just committed the fix …").
 *   - Everything the script seeds is folded into the pinned commit by --amend, so no
 *     "fixture" commit is visible to the run (an earlier iteration leaked one).
 *
 * Pure Bun: git through Bun.spawnSync, files through Bun.file/Bun.write. Needs the session
 * tool from this skill (../../scripts/session.ts) to close SES-006 and open SES-007.
 */
import { existsSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";

const PIN = "c89ae34"; // env-setup feat/session-plugin: the plugin-consuming state
const TOOL = resolve(import.meta.dir, "../../scripts/session.ts");

const args = process.argv.slice(2);
const out = args[0];
if (!out) {
  console.error("usage: bun evals/fixtures/make-fixture.ts <out-dir> [--source <path-or-url>]");
  process.exit(1);
}
const sourceAt = args.indexOf("--source");
const source = sourceAt >= 0 ? args[sourceAt + 1] : `${process.env.HOME}/Dev/env-setup`;

function run(cmd: string[], cwd: string, env: Record<string, string> = {}): string {
  const r = Bun.spawnSync(cmd, { cwd, env: { ...process.env, ...env }, stdout: "pipe", stderr: "pipe" });
  if (r.exitCode !== 0) throw new Error(`${cmd.join(" ")} failed:\n${r.stderr.toString()}${r.stdout.toString()}`);
  return r.stdout.toString();
}
const tool = (cwd: string, ...a: string[]) => run(["bun", TOOL, ...a], cwd, { CLAUDE_PROJECT_DIR: cwd });

if (existsSync(out)) rmSync(out, { recursive: true, force: true });
run(["git", "clone", "-q", "--no-hardlinks", String(source), out], process.cwd());
run(["git", "checkout", "-q", PIN], out);
run(["git", "switch", "-q", "-c", "main"], out); // the run sees a `main`, as a real checkout would
run(["git", "config", "user.name", "Fixture"], out);
run(["git", "config", "user.email", "fixture@example.invalid"], out);

// 1. SES-006: write its Outcome and handoff, close it — the fixture wants one green open session.
const ses6 = join(out, "docs/sessions/SES-006-session-followups.md");
let s6 = await Bun.file(ses6).text();
s6 = s6
  .replace(/^- Outcome: .*$/m, "- Outcome: the `!` injection verified in a real conversation, iteration 4 measured (25/27 vs 23/27), plugin-kit's eval-tooling fixes merged, the session skill moved into the `sessions` plugin (ADR-023) and plans point at sessions (ADR-022).")
  .replace(/^- Open at end: .*$/m, "- Open at end: iteration 5 is measured in the plugin repo; SES-005 belongs to another conversation.");
await Bun.write(ses6, s6);
tool(out, "close", "--session", "SES-006");

// 2. SES-007: the docs review, green, README pass done, ADR pass next.
const opened = tool(out, "new", "docs-review");
const name = opened.match(/opened (SES-007-[^\s]+\.md)/)?.[1];
if (!name) throw new Error(`unexpected: ${opened}`);
const ses7 = join(out, "docs/sessions", name);
let s7 = await Bun.file(ses7).text();
s7 = s7
  .replace(/^# (.*) · docs review$/m, "# $1 · Docs review — every doc read against the code, one pass per kind")
  .replace(/^- Goal: .*$/m, "- Goal: Read every document in docs/ against the code it describes and fix what drifted: the README pass, then the ADR pass.")
  .replace(/^_\(fill in\)_ — what was asked.*$/m, "Peter asked for a full docs review before the next release. The README pass is done: every directory README was read against its files and nothing had drifted. The ADR pass — each ADR's consequences checked against the code — has not started.");
await Bun.write(ses7, s7);

// 3. Fold the seeding into the pinned commit so no fixture commit is visible.
run(["git", "add", "docs/sessions"], out);
run(["git", "commit", "-q", "--amend", "--no-edit"], out);

// 4. The fix commit at HEAD: the asset re-synced with the embedded constant, unrecorded.
const src = await Bun.file(join(out, "src/items/finder/finder-favorites.ts")).text();
const m = src.match(/export const SET_FAVORITES_SWIFT = `([\s\S]*?)`;\n/);
if (!m) throw new Error("SET_FAVORITES_SWIFT not found");
await Bun.write(join(out, "src/items/finder/assets/set-favorites.swift"), m[1]);
run(["git", "add", "src/items/finder/assets/set-favorites.swift"], out);
run(["git", "commit", "-q", "-m", "fix(finder): re-sync set-favorites.swift with the embedded SET_FAVORITES_SWIFT constant\n\nThe shipped asset lacked the `list` mode and the LSSharedFileListItemCopyResolvedURL binding the\nembedded constant carries; the driver's byte comparison now passes."], out);

console.log(`fixture at ${out}`);
console.log(run(["git", "log", "--oneline", "-3"], out).trim());
console.log(tool(out, "list", "--brief").trim());
