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
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate-commands.js

## Purpose — required, verbatim
> "Guards against silent drift across the three slash-command directories:" — scripts/validate-commands.js:5

## Design intent — required
Maintains command parity and description consistency across the three supported tool platforms in the repository: Claude Code (`.claude/commands/*.md`), Gemini CLI (`.gemini/commands/*.toml`), and Antigravity CLI (`commands/*.toml`). While command prompt bodies intentionally differ to adapt to harness-specific substitution syntax, every command present in one directory must exist in all three, and command descriptions must remain identical. This validator prevents command drift across tools, automatically mapping naming differences (such as `plan` in Claude to `planning` in TOML), and blocks CI on parity or description mismatch.

## Phase — required
none

## Inputs — required
- Reads slash-command configuration files across three directory trees configured in `DIRS` — scripts/validate-commands.js:30 (`.claude/commands/`, `.gemini/commands/`, and `commands/`).
- Maps platform stem discrepancies using `NAME_MAP` — scripts/validate-commands.js:38.

## Outputs — required
- Console logging: status of command presence and description equality per command, listing missing directories or conflicting descriptions across `.claude`, `.gemini`, and `commands/`, followed by total count and status — scripts/validate-commands.js:181.
- Process exit code: 0 on clean parity and description sync, 1 if any parity or sync errors are encountered — scripts/validate-commands.js:18.

## Invokes — required
none

## Invoked by — required
- script scripts/validate-commands-test.js — scripts/validate-commands-test.js:12
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:59
- doc evals/README.md — evals/README.md:18
- config .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:55

## Concepts named — required, verbatim
- `slash-command directories` — scripts/validate-commands.js:5 — used here
- `DIRS` — scripts/validate-commands.js:30 — defined here
- `NAME_MAP` — scripts/validate-commands.js:38 — defined here
- `NAME_MAP_REVERSE` — scripts/validate-commands.js:41 — defined here
- `descriptionFromMd` — scripts/validate-commands.js:47 — defined here
- `descriptionFromToml` — scripts/validate-commands.js:61 — defined here
- `loadCommands` — scripts/validate-commands.js:71 — defined here
- `Parity check` — scripts/validate-commands.js:113 — defined here
- `Description sync check` — scripts/validate-commands.js:139 — defined here
- `main` — scripts/validate-commands.js:92 — defined here

## Structure
- `Config` — scripts/validate-commands.js:26
- `Parsers` — scripts/validate-commands.js:45
- `Loader` — scripts/validate-commands.js:69
- `Main` — scripts/validate-commands.js:90
- `Parity check` — scripts/validate-commands.js:113
- `Description sync check` — scripts/validate-commands.js:139

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-commands.js`, language: JavaScript (Node.js CLI), lines: 188
- documented invocation: `node scripts/validate-commands.js` — docs/developer-onboarding.md:59
- **executed:** yes
- actual command run: `bun scripts/validate-commands.js` (in `sources/addy`), abridged stdout: `Checking command parity...\n  ✓  build\n  ✓  code-simplify\n  ✓  constraints\n  ✓  plan (planning in toml dirs)\n  ✓  review\n  ✓  ship\n  ✓  spec\n  ✓  test\n  ✓  webperf\n\nChecking description sync...\n  ✓  build\n  ✓  code-simplify\n  ✓  constraints\n  ✓  plan\n  ✓  review\n  ✓  ship\n  ✓  spec\n  ✓  test\n  ✓  webperf\n\n9 commands checked — 0 error(s) — PASSED`, **actual exit code:** 0
- documented exit codes: `Exit codes: 0 = all clear, 1 = one or more errors` — scripts/validate-commands.js:18 vs. actual exit paths in code:
  - `if (errors > 0) process.exit(1);` — scripts/validate-commands.js:184
  - natural exit 0 when `errors === 0`
- for validators/gates: can it exit non-zero? Yes, exits 1 if a command is missing in any directory, if a description field is malformed, or if descriptions drift. Does it fail on the source repo's own default branch? No, exits 0 with 0 errors across 9 commands.
- does the output match what the documentation claims? Yes, checks parity and description synchronization across Claude, Gemini, and Antigravity command directories.

## Defects — required
none

## Observations
- Explicitly isolates description matching from prompt bodies, recognizing that prompt body differences across platforms (e.g. `$ARGUMENTS`, `CLAUDE.md` vs. `GEMINI.md`) are intentional design variations.
- Encodes a bidirectional stem mapping table (`NAME_MAP`: `plan` -> `planning`) to accommodate platform differences where Gemini and Antigravity name the command `planning` while Claude names it `plan`.

## Context cost
7,108 bytes (~1,777 tokens). Reads 27 command files (9 Claude `.md` + 9 Gemini `.toml` + 9 Antigravity `.toml`), totaling ~38 KB (~9,500 tokens).
