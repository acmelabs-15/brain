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
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate-artifact-paths.js

## Purpose — required, verbatim
> "Guards the spec -> plan -> build pipeline against silent artifact-path drift." — scripts/validate-artifact-paths.js:5

## Design intent — required
Guards the spec -> plan -> build lifecycle pipeline against silent drift in artifact file paths. When upstream producer commands (`/spec`, `/plan`) change their output paths (such as moving to `docs/features/[name]/`) without corresponding updates to consumer commands (`/build`) or skills (`spec-driven-development`, `planning-and-task-breakdown`), the development pipeline breaks silently. This validator enforces that all guarded pipeline files only reference canonical spec, plan, and todo artifact paths from a centralized allowlist (`SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`), blocking CI until producers and consumers agree.

## Phase — required
none

## Inputs — required
- Reads the markdown files specified in `GUARDED_FILES` — scripts/validate-artifact-paths.js:44 (`.claude/commands/spec.md`, `.claude/commands/plan.md`, `.claude/commands/build.md`, `skills/spec-driven-development/SKILL.md`, `skills/planning-and-task-breakdown/SKILL.md`, `docs/getting-started.md`, `docs/adoption-guide.md`).

## Outputs — required
- Console logging: reports checked status per file, line numbers and offending strings for drifted paths, summary line, and `PASSED` or `FAILED` status — scripts/validate-artifact-paths.js:100.
- Process exit code: 0 on all clean, 1 on any drifted artifact paths — scripts/validate-artifact-paths.js:22.

## Invokes — required
none

## Invoked by — required
- script scripts/validate-artifact-paths-test.js — scripts/validate-artifact-paths-test.js:12
- config .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:61

## Concepts named — required, verbatim
- `spec -> plan -> build pipeline` — scripts/validate-artifact-paths.js:5 — used here
- `artifact-path drift` — scripts/validate-artifact-paths.js:5 — defined here
- `PR #93` — scripts/validate-artifact-paths.js:10 — used here
- `command parity` — scripts/validate-artifact-paths.js:12 — used here
- `ARTIFACT_ALLOWLIST` — scripts/validate-artifact-paths.js:35 — defined here
- `GUARDED_FILES` — scripts/validate-artifact-paths.js:44 — defined here
- `ARTIFACT_RE` — scripts/validate-artifact-paths.js:58 — defined here
- `findViolations` — scripts/validate-artifact-paths.js:60 — defined here
- `main` — scripts/validate-artifact-paths.js:78 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-artifact-paths.js`, language: JavaScript (Node.js CLI), lines: 112
- documented invocation: `node scripts/validate-artifact-paths.js` — .github/workflows/test-plugin-install.yml:61
- **executed:** yes
- actual command run: `bun scripts/validate-artifact-paths.js` (in `sources/addy`), abridged stdout: `Checking spec/plan/todo artifact paths...\n\n  ✓  .claude/commands/spec.md\n  ✓  .claude/commands/plan.md\n  ✓  .claude/commands/build.md\n  ✓  skills/spec-driven-development/SKILL.md\n  ✓  skills/planning-and-task-breakdown/SKILL.md\n  ✓  docs/getting-started.md\n  ✓  docs/adoption-guide.md\n\n7 files checked — 0 error(s) — PASSED`, **actual exit code:** 0
- documented exit codes: `Exit codes: 0 = all clear, 1 = one or more drifted paths.` — scripts/validate-artifact-paths.js:22 vs. actual exit paths in code:
  - `process.exit(1);` — scripts/validate-artifact-paths.js:107
  - natural exit 0 when `errors === 0`
- for validators/gates: can it exit non-zero? Yes, exits 1 if any unapproved `(spec|plan|todo).md` path is found in guarded files. Does it fail on the source repo's own default branch? No, exits 0 with 0 errors across 7 guarded files.
- does the output match what the documentation claims? Yes, confirms all 7 guarded pipeline files adhere to the canonical allowlist.

## Defects — required
none

## Observations
- Uses case-insensitive regex matching `/(?:[A-Za-z0-9._[\]-]+\/)*(?:spec|plan|todo)\.md/gi` to catch lowercase `spec.md`, placeholder patterns like `docs/features/[feature-name]/spec.md`, or nested subpaths.
- Skips missing files intentionally (`absent files are skipped, not failed`) so the validator checks path consistency rather than forcing all documented files to exist simultaneously in stripped environments.

## Context cost
4,102 bytes (~1,025 tokens). Reads 7 guarded files on invocation totaling ~54 KB (~13,500 tokens).
