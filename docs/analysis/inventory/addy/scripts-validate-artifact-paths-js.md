---
package: addy
path: scripts/validate-artifact-paths.js
type: script
bytes: 4102
unit: inv-addy-9
---

# scripts/validate-artifact-paths.js

## Purpose — required, verbatim
> "Guards the spec -> plan -> build pipeline against silent artifact-path drift." — scripts/validate-artifact-paths.js:5

## Design intent — required
Prevents contract breakage between lifecycle phases by enforcing that spec, plan, and task-list artifact paths remain strictly synchronized across producer commands (`/spec`, `/plan`), consumer commands (`/build`), and skills. Checks all pipeline-defining files against a strict allowlist (`SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`), ensuring that changes to artifact naming conventions cannot be made unilaterally without updating both consumers and producers together.

## Phase — required
cross-phase

## Inputs — required
- Files listed in `GUARDED_FILES`:
  - `.claude/commands/spec.md` — scripts/validate-artifact-paths.js:45
  - `.claude/commands/plan.md` — scripts/validate-artifact-paths.js:46
  - `.claude/commands/build.md` — scripts/validate-artifact-paths.js:47
  - `skills/spec-driven-development/SKILL.md` — scripts/validate-artifact-paths.js:48
  - `skills/planning-and-task-breakdown/SKILL.md` — scripts/validate-artifact-paths.js:49
  - `docs/getting-started.md` — scripts/validate-artifact-paths.js:50
  - `docs/adoption-guide.md` — scripts/validate-artifact-paths.js:51

## Outputs — required
- stdout status log of checked files and violations — scripts/validate-artifact-paths.js:79,90,92,94,101
- process exit code (0 or 1) — scripts/validate-artifact-paths.js:22,107

## Invokes — required
- package fs — scripts/validate-artifact-paths.js:27
- package path — scripts/validate-artifact-paths.js:28
- files in GUARDED_FILES — scripts/validate-artifact-paths.js:44-52,65

## Invoked by — required
- .github/workflows/test-plugin-installation.yml:60 — executed during CI `validate-commands` job (`node scripts/validate-artifact-paths.js`)
- scripts/validate-artifact-paths-test.js:31 — executed in unit test sandbox

## Concepts named — required, verbatim
- `spec -> plan -> build pipeline` — scripts/validate-artifact-paths.js:5 — defined here
- `/spec` — scripts/validate-artifact-paths.js:7 — used here
- `/plan` — scripts/validate-artifact-paths.js:7 — used here
- `/build` — scripts/validate-artifact-paths.js:8 — used here
- `SPEC.md` — scripts/validate-artifact-paths.js:11 — used here
- `docs/SPEC.md` — scripts/validate-artifact-paths.js:37 — used here
- `tasks/plan.md` — scripts/validate-artifact-paths.js:11 — used here
- `tasks/todo.md` — scripts/validate-artifact-paths.js:39 — used here
- `ARTIFACT_ALLOWLIST` — scripts/validate-artifact-paths.js:16 — defined here
- `GUARDED_FILES` — scripts/validate-artifact-paths.js:44 — defined here

## Structure
- `#!/usr/bin/env node`
- Header documentation with PR #93 background
- Constants: ROOT, ARTIFACT_ALLOWLIST, GUARDED_FILES, ARTIFACT_RE
- findViolations(relPath)
- main()

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-artifact-paths.js`, language: JavaScript (Node.js/Bun), lines: 112
- documented invocation: `node scripts/validate-artifact-paths.js` — .github/workflows/test-plugin-installation.yml:60
- executed: yes
- actual command run: `bun scripts/validate-artifact-paths.js`
- actual exit code: 0
- documented exit codes: `Exit codes: 0 = all clear, 1 = one or more drifted paths.` — scripts/validate-artifact-paths.js:22
- actual exit paths in code: line 107 (`process.exit(1)`), line 111 (exit 0)
- for validators/gates: can exit 1 if unapproved artifact path encountered; passes clean on default branch (7 files checked — 0 error(s) — PASSED)
- does the output match what the documentation claims? yes; 7 files checked, 0 errors, status PASSED.

## Defects — required
none

## Observations
- Guards the lifecycle interface contract against drift: documents that PR #93 pointed `/spec` and `/plan` at `docs/features/[name]/` while `/build` required `SPEC.md` and `tasks/plan.md`, breaking pipeline automation.
- Regex `/(?:[A-Za-z0-9._[\]-]+\/)*(?:spec|plan|todo)\.md/gi` catches bracket placeholders like `docs/features/[feature-name]/spec.md`.

## Context cost
4,102 bytes (~1,025 tokens)
