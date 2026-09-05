---
package: addy
path: scripts/validate-reference-links.js
type: script
bytes: 3832
unit: inv-addy-38
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-reference-links.js, sha256: 06b94becedc5e82e495a7f44db69001ecc22e55fd8f2aa87ee8d1a5d6262ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate-reference-links.js

## Purpose — required, verbatim
> "Guards links from skills to the shared `references/` checklists." — scripts/validate-reference-links.js:5

## Design intent — required
Validates that markdown links referencing `references/*.md` inside `skills/*/SKILL.md` resolve to real files on disk relative to each skill's directory. Prevents a recurring regression where skills linked shared repo-root checklists as colocated `references/file.md` (which broke in both repo and plugin cache installations) instead of navigating two levels up via `../../references/file.md`, while still permitting skills with valid colocated references directories (`skills/<name>/references/`).

## Phase — required
none

## Inputs — required
All `SKILL.md` files located in `skills/*/` subdirectories, and referenced files under repo-root `references/` or colocated `skills/<name>/references/`.

## Outputs — required
Standard output logging pass/fail check status for each skill, error summary, and exit code (0 on success, 1 on unresolvable reference links).

## Invokes — required
none

## Invoked by — required
- script test-plugin-install.yml — .github/workflows/test-plugin-install.yml:38
- script validate-reference-links-test.js — scripts/validate-reference-links-test.js:12

## Concepts named — required, verbatim
- `references/` — scripts/validate-reference-links.js:5 — used here
- `using-agent-skills` — scripts/validate-reference-links.js:12 — used here
- `Definition of Done` — scripts/validate-reference-links.js:13 — used here
- `validate-artifact-paths.js` — scripts/validate-reference-links.js:15 — used here
- `CLAUDE.md` — scripts/validate-reference-links.js:20 — used here
- `tasks/todo.md` — scripts/validate-reference-links.js:25 — used here
- `PERF.md` — scripts/validate-reference-links.js:25 — used here
- `docs/ideas/[idea-name].md` — scripts/validate-reference-links.js:26 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-reference-links.js`, JavaScript (Node.js), 104 lines
- documented invocation: `node scripts/validate-reference-links.js` — .github/workflows/test-plugin-install.yml:38
- executed: yes
- actual command run: `bun scripts/validate-reference-links.js`, stdout: `Checking references/ links in skills...\n... 25 skills checked — 0 error(s) — PASSED`, actual exit code: 0; when run with `node scripts/validate-reference-links.js` under brain-v2, exits with code 1 and stdout `ReferenceError: require is not defined in ES module scope` due to parent repo package.json `"type": "module"`
- documented exit codes: `0 = all clear, 1 = one or more unresolvable links` — scripts/validate-reference-links.js:28 vs. actual exit paths: `process.exit(1)` at scripts/validate-reference-links.js:99 when `errors > 0`, normal completion exit 0 at scripts/validate-reference-links.js:103
- for validators/gates: can exit non-zero (exits 1 if unresolvable reference links are found); does not fail on default branch (0 errors reported across 25 skills)
- does the output match what the documentation claims: yes, verifies all 25 skills against reference links and exits 0 when all resolve

## Defects — required
- other — scripts/validate-reference-links.js:33: Uses CommonJS `require()` syntax in a `.js` file, causing Node.js to fail with a ReferenceError when executed where a parent `package.json` specifies `"type": "module"`.

## Observations
- Uses regex `/(?<![A-Za-z0-9._/-])((?:\.\.\/)*references\/[A-Za-z0-9._-]+\.md)/g` to match reference links, deliberately excluding non-reference planning artifacts like `tasks/todo.md`.

## Context cost
3832 bytes, ~850 tokens.
