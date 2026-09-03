---
package: addy
path: skills/constraint-driven-development/references/floor-guard.md
type: reference
bytes: 5851
unit: inv-addy-15
---

# skills/constraint-driven-development/references/floor-guard.md

## Purpose — required, verbatim
> "Every numbered dimension in `CONSTRAINTS.md` maps to a de facto tool (Step 4). The **floor** does not: it is a diff-scoped check for the five moves in Step 6, and without a shipped reference every agent invents its own, so two runs (or a Python repo and a Go one) produce two different guards. That is the exact non-determinism this skill exists to remove." — skills/constraint-driven-development/references/floor-guard.md:3

## Design intent — required
Provides a deterministic, language-adaptable reference implementation (`floor-guard.mjs`) for enforcing the quality "floor" defined in `CONSTRAINTS.md`. While explicit quality dimensions (like coverage, linting, security) map to existing CLI tools, the baseline floor prevents sneaky or evasive agent moves that lower the project's quality bar (silencing checks via suppressions, skipping tests, removing assertions, lowering thresholds, or adding unapproved exceptions). By formalizing an exact diff-scoped inspection contract with rigorous exit codes (`0` clean, `1` violation, `2` execution failure), it ensures that floor enforcement remains uniform and prevents agents from inventing ad-hoc, leaky validators.

## Phase — required
addy:Define

## Inputs — required
- Working tree git diff against merge base (including added, removed, and untracked files) (`skills/constraint-driven-development/references/floor-guard.md:9, 37-43`)
- `--base <ref>` CLI argument (defaults to `origin/main`) (`skills/constraint-driven-development/references/floor-guard.md:20, 23-26`)
- `CONSTRAINTS.md` file in repository root (`skills/constraint-driven-development/references/floor-guard.md:3, 10, 19, 67, 77-85`)
- Optional `.constraintsignore` glob ignore file (`skills/constraint-driven-development/references/floor-guard.md:98`)

## Outputs — required
- CLI stdout/stderr report with rule violation flags: `[silenced-checker]`, `[unfinished-work]`, `[test-made-easier]`, `[new-exception]`, `[assertion-removed]`, `[threshold-lowered]` (`skills/constraint-driven-development/references/floor-guard.md:54, 88-92`)
- Deterministic exit codes: `0` (clean), `1` (floor violation), `2` (no merge base / execution failure) (`skills/constraint-driven-development/references/floor-guard.md:11, 35, 88, 92`)

## Invokes — required
- external CLI git (`git merge-base`, `git diff`, `git ls-files`) — skills/constraint-driven-development/references/floor-guard.md:28-43

## Invoked by — required
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:216, 258
- command .claude/commands/constraints.md — .claude/commands/constraints.md:31 (via `/constraints guard` sub-command)
- command commands/constraints.toml — commands/constraints.toml:30 (via `/constraints guard` sub-command)

## Concepts named — required, verbatim
- `floor-guard` — skills/constraint-driven-development/references/floor-guard.md:1, 19 — defined here
- `CONSTRAINTS.md floor` — skills/constraint-driven-development/references/floor-guard.md:3, 19 — used here
- `Five Step 6 moves` — skills/constraint-driven-development/references/floor-guard.md:3, 10 — used here
- `silenced-checker` — skills/constraint-driven-development/references/floor-guard.md:57, 64 — defined here
- `unfinished-work` — skills/constraint-driven-development/references/floor-guard.md:59, 65 — defined here
- `test-made-easier` — skills/constraint-driven-development/references/floor-guard.md:61, 66 — defined here
- `new-exception` — skills/constraint-driven-development/references/floor-guard.md:67 — defined here
- `assertion-removed` — skills/constraint-driven-development/references/floor-guard.md:73 — defined here
- `threshold-lowered` — skills/constraint-driven-development/references/floor-guard.md:84 — defined here
- `diff-scoped check` — skills/constraint-driven-development/references/floor-guard.md:3, 9, 19 — defined here
- `Merge base` — skills/constraint-driven-development/references/floor-guard.md:9, 34 — defined here
- `Three-exit-code contract` — skills/constraint-driven-development/references/floor-guard.md:11 — defined here
- `Redaction` — skills/constraint-driven-development/references/floor-guard.md:12 — used here
- `Tightening is silent, loosening is loud` — skills/constraint-driven-development/references/floor-guard.md:13 — defined here
- `floor-guard.mjs` — skills/constraint-driven-development/references/floor-guard.md:19, 20 — defined here
- `.constraintsignore` — skills/constraint-driven-development/references/floor-guard.md:98 — defined here
- `Escalation Path level 3` — skills/constraint-driven-development/references/floor-guard.md:99 — used here

## Structure
- Floor guard: reference implementation (line 1)
- Contract (line 7)
- Reference (Node, ~stack-agnostic patterns) (line 15)
- Adapting it (line 95)

## Scripts — required if type is script or the skill ships scripts
- path: inlined script `floor-guard.mjs` within `skills/constraint-driven-development/references/floor-guard.md:18-93`, language: JavaScript (Node.js/ESM, executable under Bun), lines: 76
- documented invocation: `node floor-guard.mjs [--base <ref>]   (default base: origin/main)` — skills/constraint-driven-development/references/floor-guard.md:20
- executed: yes
- actual command run:
  1. Against default branch in `sources/addy`: `node floor-guard.mjs --base HEAD`
     stdout: `floor-guard: clean`, actual exit code: 0
  2. Against non-existent base in `sources/addy`: `node floor-guard.mjs --base non-existent-ref`
     stderr: `fatal: Not a valid object name non-existent-ref\nfloor-guard: no merge base against non-existent-ref`, actual exit code: 2
  3. Under Bun: `bun run floor-guard.mjs --base HEAD`
     stdout: `floor-guard: clean`, actual exit code: 0
  4. In test repository with injected floor violations: `node floor-guard.mjs --base main`
     stderr:
     ```
     floor-guard: 6 floor violation(s):
       [new-exception] CONSTRAINTS.md: | W01 | temp exception |
       [silenced-checker] app.js: // @ts-ignore
       [unfinished-work] app.js: throw new Error("Not implemented");
       [test-made-easier] app.test.js: test.skip('works', () => {
       [assertion-removed] app.test.js: expect(1).toBe(1);
       [threshold-lowered] CONSTRAINTS.md: Coverage: 80%  ->  Coverage: 70%

     Each is a move that lowers the bar. Fix the code, or route it through a tracked exception.
     ```
     actual exit code: 1
- documented exit codes vs actual exit paths:
  - documented: `0 clean, 1 at least one floor violation (block the change), 2 the guard could not run (no merge base, not a git repo)` (line 11)
  - actual exit paths: line 35 (`process.exit(2)` on missing merge base), line 88 (`process.exit(0)` on 0 findings), line 92 (`process.exit(1)` on >0 findings). Matches documented codes exactly.
- for validators/gates:
  - can it exit non-zero? Yes (exits 1 on violation, 2 on missing merge base).
  - does it fail on source repo's default branch? No (clean exit 0).
  - does output match documentation claim? Partial: basic checks succeed, but implementation contains three severe unfailable gate bugs (untracked files dropped due to exception handling, deleted test files not caught, and deleted constraint bullets not caught).

## Defects — required
- script-bug — skills/constraint-driven-development/references/floor-guard.md:28-31, 39-42 — Untracked files with violations are silently dropped: `git diff --no-index` returns exit code 1 when differences exist. `execFileSync('git', ...)` throws on non-zero exit codes. The `git` wrapper function catches all exceptions and returns `null`. `git(...) ?? ''` evaluates to empty string, causing untracked files with violations to never be inspected or flagged, directly violating line 9 ("plus untracked files").
- script-bug — skills/constraint-driven-development/references/floor-guard.md:48, 72 — File path parsing bug on deleted files: line 48 parses `+++ b/file` via `line.slice(6)`. For deleted files, git diff emits `+++ /dev/null`, which slices to `'v/null'`. When an entire test file is deleted, `file` is set to `'v/null'`, which fails the filename regex check on line 72 (`/\.(test|spec)\.|_test\.|test_/.test(file)`). Consequently, deleting an entire test file bypasses the guard completely and exits 0 cleanly, directly contradicting line 10's contract claim ("Detects the five Step 6 moves: ... a deleted test file").
- script-bug — skills/constraint-driven-development/references/floor-guard.md:77, 81-85 — Deleted constraint bullets not flagged: line 77 comments `or a floor bullet deleted`, but line 82 matches removed lines using `addedConstraints.find(...)`. If a bullet or constraint row is deleted without an added replacement line, `a` is undefined and `flag` is never called. Deleting constraints from `CONSTRAINTS.md` exits 0 cleanly.
- missing-path — skills/constraint-driven-development/references/floor-guard.md:18-93 — `floor-guard.mjs` is only provided as an inline markdown code block; it is not committed as an executable file under `scripts/` or `skills/constraint-driven-development/scripts/`, despite `SKILL.md:216` stating "A reference implementation of these five checks ships with this skill in references/floor-guard.md".
- doc-drift — skills/constraint-driven-development/references/floor-guard.md:98 — Documents `.constraintsignore` support ("A `.constraintsignore` (one glob per line) lets you exempt a path..."), but the provided reference script implementation contains zero code for loading, parsing, or applying an ignore file.

## Observations
- Redacts violation lines to 120 characters (`text.trim().slice(0, 120)` on line 54) to ensure matched secret values are never leaked in error logs.
- Uses `git diff --no-index --unified=0 /dev/null <file>` on untracked files discovered via `git ls-files --others --exclude-standard`, ensuring newly created uncommitted files are scanned (subject to the `execFileSync` defect noted in defects).

## Context cost
5,851 bytes (~1,460 tokens). Pure reference document loaded when invoking `constraint-driven-development` or `/constraints guard`.
