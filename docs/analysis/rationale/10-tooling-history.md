# 10 · The tooling — why each script exists, and the bugs found on the way

Every script under `scripts/synthesis/` is pure Bun (R9), takes paths and prints text, and knows nothing about brain's layout. This is the record of why each one exists and what it fixed. The scripts' own header comments are the reference for their flags; METHOD §9 lists them.

## The principle behind all of them

A fact a script can compute is never typed by the model (R11, M5). A check a script can run is never asserted in prose (R2). Two consequences shaped the set: everything the primary agent needs to *know* about a unit is printed by a script (`unit-facts.ts`), and everything a card *claims* is checked by a script (`quote-check.ts`, `coverage.ts`, `memo.ts`).

## Script by script

| script | exists because | the incident behind it |
|---|---|---|
| `_lib.ts` | shared parsing (frontmatter, manifests, units), `slugOf`, `sourcePath`, `needsNoCard` | `slugOf` is compared against a directory *listing*, never `existsSync` — see the phantom check-offs below |
| `manifest.ts` | one row per in-scope file; `Checked` **derived** from the card listing, never ticked | sessions 001–012 hard-coded coverage marks with a one-off script; regeneration wiped them (session 012). rjm reachability resolved `Task(subagent_type="x")` to a skill path; none of the nine agent definitions the lifecycle commands dispatch to was in the manifest (D-013). External pages: the first regex matched only `skills/<name>/SKILL.md`, so matt's 37 `aihero.dev` pages were never rows until 2026-09-05 |
| `dedupe.ts` | the duplication ledger (D-012) | keyed on bytes and file names so it needs no per-package configuration; found the symlink, the `.gemini/` mirror and the build tree unaided |
| `partition.ts` | units from the manifests, deterministic, persisted | first version grouped by the first path segment under `skills/`, so matt's `skills/engineering/*` (56 files, 168 KB) became one unit; now a skill is the directory holding `SKILL.md` at any depth. Caps: 50 KB **and** 12 files (the two run-01 workers that compacted held 29 and 55 files). Oversized skills split into labelled parts; symlink/asset/unavailable rows ride at zero weight |
| `units.ts` | the unit status table, out of `STATE.md` | the 333-row table cost every session ~0.5% to read and ~0.4% per edit echo, and hand edits produced `done` rows pointing at reports that did not exist (session 013). `mark done` now refuses a unit without its report (R7) |
| `coverage.ts` | manifest ↔ cards, required fields, R11 alias and hunk-count checks | the only check that ran before 2026-09-04, and it could not see a wrong citation |
| `quote-check.ts` | byte-exact verification of every `"…" — path:line` and `` `term` — path:line `` | measured the pre-reset tree at 18% failing citations — the number behind the reset. Early false FAILs (escaped quotes, term case, cross-file Invokes rows) were fixed on 2026-09-04; the remaining failures were confirmed by hand. With `--all` and no cards it now prints `0 card(s)` and exits 0 (Phase 0) |
| `memo.ts` | the result store (M1): `check` / `stamp` / `audit` | a card carries what produced it (inputs' hashes, METHOD and template hashes, model, effort); a METHOD change invalidates every card automatically — §11 propagation made mechanical |
| `unit-facts.ts` | everything a dispatch needs, computed | first version printed `MISSING` for the `.opencode/skills` symlink; now symlinks, assets and unavailable pages are listed under *No card needed*, and a split skill's part is named with its `SKILL.md` |
| `prefix-check.ts` | hash of the fixed set at §8.1 and §8.3 (M3) | detects a METHOD/template/script edit mid-conversation |
| `glossary-lint.ts` | Phase 4+ term lint | a stub until GLOSSARY.md has entries; described as such in §9 |
| `budget.ts` | the D-010 calculation | see `09-instrument-and-driver.md`; the 0.53 → 0.19 correction |
| `await-run.ts` | the primary agent's only view of a Teamwork run | replaces six Sentinel edit cycles per run; identical behaviour headless |
| `drive.ts` | the headless driver (D-018) | writes the context log from the event stream |

## The bugs, in the order they were found

1. **Phantom check-offs (session 012).** `existsSync` on macOS is case-insensitive; 127 markdown files spelt `SkillForge` for the directory `skillforge`; the same file entered the manifest twice and cards ticked rows they did not belong to. Fix: `realpathSync` in the walker; card presence decided by exact string match against a directory listing; slug collisions abort the run.
2. **rjm agents unreachable (D-013).** `Task(subagent_type="x")` → `.claude/skills/x/` only. Nine agent definitions and their divergence from `templates/agents/*.shared.md` (23–380 lines each) were invisible. Fix: resolve to `.claude/agents/x.md` *and* `.claude/skills/x/`.
3. **No citation ever checked.** `quote-check.ts` written 2026-09-04; 18% of the existing citations failed.
4. **STATE `done` rows pointing at non-existent reports (session 013)** — a kit bug in the experiment-mode re-partition; the agent's §8.1 step 6 caught it and marked them pending, which is what step 6 is for. `units.ts mark done` now refuses such a row.
5. **Fabricated URLs** in the agent's first experiment doc; replaced. Rule: every harness claim cited or marked `undocumented — probe`.
6. **Teamwork scratch committed under `.agents/`** (sessions 013–014) — the Part-2 plugin mirror directory. `.gitignore` now ignores `.agents/*` except the four mirror paths.
7. **The statusline log deleted** by the kit that replaced the statusline directory (run-01 series lost). `apply-final.sh` appends an old log before replacing.
8. **`per_unit_delta = 0.53`** — the run's fixed cost divided by its unit count; true per-unit cost 0.19 (transcript attribution, 2026-09-04 capture).
9. **Matt's external pages absent** (37 rows) and **matt's skills lumped by category** (56-file unit) — both from the `skills/<name>/` assumption; found on 2026-09-05 while re-running Phase 0 on a clone.
10. **Binary files as inventory rows** — 13.5 MB of PNGs under `skillforge/assets/` were rows expecting cards; now type `asset`, no card, listed to the Worker.
11. **METHOD read twice.** The file viewer stops near 46 KB; METHOD (68 KB) was read as 1–410 then 400–532, costing 1.6% per conversation. Now two exact views, 1–300 and 301–end, both under the limit.
12. **Headless conversation read the wrong worktree** (session 001). Given `Read docs/plan/METHOD.md` with no stated root, the headless agent searched `/Users/peterkloss` by file name and read `…/ACMElabs/brain/docs/plan/{METHOD,STATE,DECISIONS,…}.md` — the discarded first attempt, fenced by DO-NOT-READ — before locating `brain-v2`. Interactive Phase 0 had not done this. Fix: PROMPT.md and METHOD §8.1 state the absolute root and forbid filesystem searches for named files; the outputs of that session were script-verified and stand.
13. **`drive.ts` parsed the wrong shape** (session 001). Events are `{event, <event>: {…}}`, not flat; `usage.input_tokens` is the *uncached* prompt and the context is `input_tokens + cache_read_tokens`; the statusline renders headless so the driver's own log is a fallback, not the source. Replaying the saved stream through the fixed driver reproduces the statusline's peak within 0.1%.
14. **Kit-script portability**, for the record: macOS ships bash 3.2 (`declare -A` fails — use `case` functions); zsh treats a `#` inside a pasted command block as an argument (never put comments in a paste block); agy's `statusLine`/`title` settings must be objects with absolute paths; a `while read` loop whose last iteration returns non-zero kills a `set -e` script silently (the first `capture-experiment.sh` produced no zip for that reason).

## What was deliberately not built

- A separate reviewer role for `verified:` — the primary agent writes it at §7 step 6, after the scripts pass; a role would add a message without adding a check.
- A `teamwork_preview`-specific client — the dispatch is the documented `invoke_subagent`; the run is read from files.
- Any script that summarises a source, ranks cards by importance, or samples files. R1 (full reads) is enforced by the manifest, not by tooling that decides what to skip.
