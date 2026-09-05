---
package: addy
path: scripts/validate-artifact-paths.js
type: script
bytes: 4102
unit: inv-addy-37
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-artifact-paths.js, sha256: 689a1c9b12391bdfe92b0102fb0f09278f5e4f07b2340a694f443b139d20c0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# scripts/validate-artifact-paths.js

## Purpose — required, verbatim
> "Guards the spec -> plan -> build pipeline against silent artifact-path drift." — scripts/validate-artifact-paths.js:5

## Design intent — required
Enforces canonical consistency of spec/plan/todo artifact file paths across the pipeline files (`.claude/commands/spec.md`, `.claude/commands/plan.md`, `.claude/commands/build.md`, and related skills/documentation). By checking all path references against an explicit `ARTIFACT_ALLOWLIST` (`SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`), it prevents silent disconnects where producer commands write to different file locations than consumer commands expect (as occurred in PR #93).

## Phase — required
none

## Inputs — required
Guarded pipeline files read from disk if present (scripts/validate-artifact-paths.js:44-52): `.claude/commands/spec.md` (scripts/validate-artifact-paths.js:45), `.claude/commands/plan.md` (scripts/validate-artifact-paths.js:46), `.claude/commands/build.md` (scripts/validate-artifact-paths.js:47), `skills/spec-driven-development/SKILL.md` (scripts/validate-artifact-paths.js:48), `skills/planning-and-task-breakdown/SKILL.md` (scripts/validate-artifact-paths.js:49), `docs/getting-started.md` (scripts/validate-artifact-paths.js:50), and `docs/adoption-guide.md` (scripts/validate-artifact-paths.js:51).

## Outputs — required
Validation status logs printed to stdout/stderr. Exits 0 on success, or exits 1 on one or more unapproved artifact paths (scripts/validate-artifact-paths.js:107).

## Invokes — required
- file spec.md — scripts/validate-artifact-paths.js:45
- file plan.md — scripts/validate-artifact-paths.js:46
- file build.md — scripts/validate-artifact-paths.js:47
- skill spec-driven-development — scripts/validate-artifact-paths.js:48
- skill planning-and-task-breakdown — scripts/validate-artifact-paths.js:49
- doc getting-started.md — scripts/validate-artifact-paths.js:50
- doc adoption-guide.md — scripts/validate-artifact-paths.js:51

## Invoked by — required
- script validate-artifact-paths-test.js — scripts/validate-artifact-paths-test.js:12
- config test-plugin-install.yml — .github/workflows/test-plugin-install.yml:61

## Concepts named — required, verbatim
- `validate-artifact-paths.js` — scripts/validate-artifact-paths.js:3 — defined here
- `artifact paths` — scripts/validate-artifact-paths.js:14 — used here
- `ARTIFACT_ALLOWLIST` — scripts/validate-artifact-paths.js:16 — defined here
- `SPEC.md` — scripts/validate-artifact-paths.js:11 — used here
- `docs/SPEC.md` — scripts/validate-artifact-paths.js:37 — used here
- `tasks/plan.md` — scripts/validate-artifact-paths.js:11 — used here
- `tasks/todo.md` — scripts/validate-artifact-paths.js:39 — used here
- `GUARDED_FILES` — scripts/validate-artifact-paths.js:44 — defined here
- `ARTIFACT_RE` — scripts/validate-artifact-paths.js:58 — defined here
- `findViolations` — scripts/validate-artifact-paths.js:60 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-artifact-paths.js`, JavaScript (Node.js CommonJS), 112 lines
- documented invocation: "node scripts/validate-artifact-paths.js" — .github/workflows/test-plugin-install.yml:61
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bun scripts/validate-artifact-paths.js`, stdout `Checking spec/plan/todo artifact paths...\n\n  ✓  .claude/commands/spec.md\n  ✓  .claude/commands/plan.md\n  ✓  .claude/commands/build.md\n  ✓  skills/spec-driven-development/SKILL.md\n  ✓  skills/planning-and-task-breakdown/SKILL.md\n  ✓  docs/getting-started.md\n  ✓  docs/adoption-guide.md\n\n7 files checked — 0 error(s) — PASSED`, actual exit code: 0. Direct execution via `node scripts/validate-artifact-paths.js` fails with exit code 1 due to parent monorepo `package.json` `"type": "module"`.
- documented exit codes (verbatim) vs. actual exit paths in code:
  - Documented: "Exit codes: 0 = all clear, 1 = one or more drifted paths." — scripts/validate-artifact-paths.js:22
  - Actual exit paths: `process.exit(1);` (scripts/validate-artifact-paths.js:107) when `errors > 0`, otherwise normal completion exiting 0.
- for validators/gates: can it exit non-zero? Yes, exits 1 when any unapproved artifact path match is encountered (`errors > 0`). Does it fail on the source repo's own default branch? No, all 7 guarded files pass with 0 errors.
- does the output match what the documentation claims? Yes, checks 7 guarded files and outputs `7 files checked — 0 error(s) — PASSED`.

## Defects — required
- `script-bug` · `scripts/validate-artifact-paths.js:27` · Uses CommonJS `require()` without a local `package.json` specifying `"type": "commonjs"`, failing with `ReferenceError: require is not defined in ES module scope` when executed under Node.js in parent directories configured with `"type": "module"`.

## Observations
Deliberately scopes validation only to spec/plan/todo artifact references rather than general markdown links (lines 19-20). Tolerates absent guarded files (`fs.existsSync(abs)` returns null and skips) rather than failing, allowing partial trees to be checked.

## Context cost
4102 bytes, ~1000 tokens.
