---
package: addy
path: scripts/validate-commands.js
type: script
bytes: 7108
unit: inv-addy-37
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-commands.js, sha256: c49934f8c78b393ba38da33fb00a625bdd6efe0c164c306582e762328083a080}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# scripts/validate-commands.js

## Purpose — required, verbatim
> "Guards against silent drift across the three slash-command directories:" — scripts/validate-commands.js:5

## Design intent — required
Validates command parity and description synchronization across the repository's three supported slash-command platform directories (`.claude/commands/`, `.gemini/commands/`, and `commands/`). Ensures every command declared in one directory exists in all three (accounting for the `plan` -> `planning` file stem difference), and ensures the `description` attribute in markdown frontmatter and TOML files matches identically across platforms, while deliberately ignoring platform-specific prompt syntax differences.

## Phase — required
none

## Inputs — required
Slash-command definitions read across three directories on disk: `.claude/commands/*.md` (scripts/validate-commands.js:31), `.gemini/commands/*.toml` (scripts/validate-commands.js:32), and `commands/*.toml` (scripts/validate-commands.js:33).

## Outputs — required
Command parity and description sync report printed to stdout/stderr. Exits 0 on success, or exits 1 on parity mismatch or drifted description (scripts/validate-commands.js:184).

## Invokes — required
- file commands — scripts/validate-commands.js:31
- file gemini — scripts/validate-commands.js:32
- file antigravity — scripts/validate-commands.js:33

## Invoked by — required
- script validate-commands-test.js — scripts/validate-commands-test.js:12
- config test-plugin-install.yml — .github/workflows/test-plugin-install.yml:55
- doc README.md — evals/README.md:18

## Concepts named — required, verbatim
- `validate-commands.js` — scripts/validate-commands.js:3 — defined here
- `slash-command` — scripts/validate-commands.js:5 — used here
- `Claude Code` — scripts/validate-commands.js:6 — used here
- `Gemini CLI` — scripts/validate-commands.js:7 — used here
- `Antigravity CLI` — scripts/validate-commands.js:8 — used here
- `description` — scripts/validate-commands.js:12 — used here
- `NAME_MAP` — scripts/validate-commands.js:38 — defined here
- `NAME_MAP_REVERSE` — scripts/validate-commands.js:41 — defined here
- `descriptionFromMd` — scripts/validate-commands.js:47 — defined here
- `descriptionFromToml` — scripts/validate-commands.js:61 — defined here
- `loadCommands` — scripts/validate-commands.js:71 — defined here

## Structure
- // ─── Config ─────────────────────────────────────────────────────────────────── — scripts/validate-commands.js:26
- // ─── Parsers ────────────────────────────────────────────────────────────────── — scripts/validate-commands.js:45
- // ─── Loader ─────────────────────────────────────────────────────────────────── — scripts/validate-commands.js:69
- // ─── Main ───────────────────────────────────────────────────────────────────── — scripts/validate-commands.js:90

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-commands.js`, JavaScript (Node.js CommonJS), 188 lines
- documented invocation: "node scripts/validate-commands.js" — .github/workflows/test-plugin-install.yml:55
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bun scripts/validate-commands.js`, stdout `Checking command parity...\n  ✓  build\n  ✓  code-simplify\n  ✓  constraints\n  ✓  plan (planning in toml dirs)\n  ✓  review\n  ✓  ship\n  ✓  spec\n  ✓  test\n  ✓  webperf\n\nChecking description sync...\n  ✓  build\n  ✓  code-simplify\n  ✓  constraints\n  ✓  plan\n  ✓  review\n  ✓  ship\n  ✓  spec\n  ✓  test\n  ✓  webperf\n\n9 commands checked — 0 error(s) — PASSED`, actual exit code: 0. Direct execution via `node scripts/validate-commands.js` fails with exit code 1 due to parent monorepo `package.json` `"type": "module"`.
- documented exit codes (verbatim) vs. actual exit paths in code:
  - Documented: "Exit codes: 0 = all clear, 1 = one or more errors" — scripts/validate-commands.js:18
  - Actual exit paths: `if (errors > 0) process.exit(1);` (scripts/validate-commands.js:184), otherwise normal completion exiting 0.
- for validators/gates: can it exit non-zero? Yes, exits 1 when any command parity or description sync error occurs (`errors > 0`). Does it fail on the source repo's own default branch? No, all 9 commands pass with 0 errors.
- does the output match what the documentation claims? Yes, checks 9 commands across all 3 directories and outputs `9 commands checked — 0 error(s) — PASSED`.

## Defects — required
- `script-bug` · `scripts/validate-commands.js:23` · Uses CommonJS `require()` without a local `package.json` specifying `"type": "commonjs"`, failing with `ReferenceError: require is not defined in ES module scope` when executed under Node.js in parent directories configured with `"type": "module"`.

## Observations
Hardcodes the naming mapping `NAME_MAP = { plan: 'planning' }` (scripts/validate-commands.js:38) to reconcile Claude Code's markdown file stem (`plan.md`) with Gemini and Antigravity's TOML file stem (`planning.toml`). Notes that prompt bodies intentionally diverge across platforms due to harness-specific argument syntax (lines 14-17).

## Context cost
7108 bytes, ~1700 tokens.
