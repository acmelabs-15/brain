---
package: addy
path: scripts/validate-reference-links.js
type: script
bytes: 3832
unit: inv-addy-9
---

# scripts/validate-reference-links.js

## Purpose — required, verbatim
> "Guards links from skills to the shared `references/` checklists." — scripts/validate-reference-links.js:5

## Design intent — required
Enforces that markdown links to reference checklists inside `skills/*/SKILL.md` actually resolve on the filesystem. Resolves the regression where skills linked shared checklists as `references/<file>.md` (which broke because skills live two levels below root in `skills/<name>/`). Validates that links either use `../../references/<file>.md` to reach repo-root checklists or point to a valid colocated `skills/<name>/references/<file>.md` directory. Exits with status 1 if any unresolvable reference links are found, blocking CI.

## Phase — required
cross-phase

## Inputs — required
- Directory: `skills/` — scripts/validate-reference-links.js:37
- Files: `skills/*/SKILL.md` — scripts/validate-reference-links.js:74
- Files in repo root `references/` or skill-local `references/` — scripts/validate-reference-links.js:51

## Outputs — required
- stdout status log showing skills checked, passing ticks, or error details — scripts/validate-reference-links.js:61,81,83,86,93
- process exit code (0 or 1) — scripts/validate-reference-links.js:28,99

## Invokes — required
- package fs — scripts/validate-reference-links.js:33
- package path — scripts/validate-reference-links.js:34
- file skills/*/SKILL.md — scripts/validate-reference-links.js:46,74
- directory references/ — scripts/validate-reference-links.js:51

## Invoked by — required
- .github/workflows/test-plugin-installation.yml:40 — executed during CI `validate-skills` job (`node scripts/validate-reference-links.js`)
- scripts/validate-reference-links-test.js:31 — executed in unit test sandbox

## Concepts named — required, verbatim
- `references/` — scripts/validate-reference-links.js:5 — used here
- `SKILL.md` — scripts/validate-reference-links.js:8 — used here
- `validate-artifact-paths.js` — scripts/validate-reference-links.js:15 — used here
- `using-agent-skills` — scripts/validate-reference-links.js:12 — used here
- `Definition of Done` — scripts/validate-reference-links.js:13 — used here
- `CLAUDE.md` — scripts/validate-reference-links.js:20 — used here
- `../../references/` — scripts/validate-reference-links.js:21 — used here

## Structure
- `#!/usr/bin/env node`
- Header documentation
- Constants: ROOT, SKILLS_DIR, REFERENCE_LINK_RE
- findViolations(skillDir, skillFile)
- main()

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-reference-links.js`, language: JavaScript (Node.js/Bun), lines: 104
- documented invocation: `node scripts/validate-reference-links.js` — .github/workflows/test-plugin-installation.yml:40
- executed: yes
- actual command run: `bun scripts/validate-reference-links.js`
- actual exit code: 0
- documented exit codes: `Exit codes: 0 = all clear, 1 = one or more unresolvable links.` — scripts/validate-reference-links.js:28
- actual exit paths in code: line 65 (return, exit 0), line 99 (`process.exit(1)`), line 103 (exit 0)
- for validators/gates: can exit 1 if broken links found; passes on default branch (25 skills checked — 0 error(s) — PASSED)
- does the output match what the documentation claims? yes; checks all 25 skills and reports PASSED with 0 errors.

## Defects — required
none

## Observations
- Documents historical context: prior to this validator, all 18 checklist links across 11 skills resolved incorrectly to non-existent paths, stalling agents.
- Uses regex lookbehind `(?<![A-Za-z0-9._/-])((?:\.\.\/)*references\/[A-Za-z0-9._-]+\.md)` to ensure exact path matches without false positives.

## Context cost
3,832 bytes (~958 tokens)
