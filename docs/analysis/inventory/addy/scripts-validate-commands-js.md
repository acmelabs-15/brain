---
package: addy
path: scripts/validate-commands.js
type: script
bytes: 7108
unit: inv-addy-11
---

# scripts/validate-commands.js

## Purpose — required, verbatim
> "validate-commands.js
 *
 * Guards against silent drift across the three slash-command directories:
 *   .claude/commands/  (.md — Claude Code)
 *   .gemini/commands/  (.toml — Gemini CLI)
 *   commands/          (.toml — Antigravity CLI)
 *
 * Checks (errors block CI):
 *   - Every command present in one directory exists in all three
 *   - The 'description' field is identical across all three equivalents
 *
 * What this does NOT check:
 *   Prompt body differences are intentional — each tool has its own
 *   syntax ($ARGUMENTS, agent-skills: prefixes, GEMINI.md vs CLAUDE.md).
 *
 * Exit codes: 0 = all clear, 1 = one or more errors" — scripts/validate-commands.js:2-19

## Design intent — required
Guards against silent divergence across the repository's three slash-command interfaces: Claude Code (`.claude/commands/*.md`), Gemini CLI (`.gemini/commands/*.toml`), and Antigravity CLI (`commands/*.toml`). It validates complete command presence parity and exact description synchronization across all three targets while intentionally permitting platform-specific prompt body syntax differences.

## Phase — required
`cross-phase`

## Inputs — required
- All `.md` files in `.claude/commands/` — scripts/validate-commands.js:31
- All `.toml` files in `.gemini/commands/` — scripts/validate-commands.js:32
- All `.toml` files in `commands/` — scripts/validate-commands.js:33

## Outputs — required
- Formatted console report: check marks (`✓`) per command under "Checking command parity..." and "Checking description sync...", followed by summary `<count> commands checked — <errors> error(s) — <status>` — scripts/validate-commands.js:125, 172, 180
- Exit code: `0` on parity and sync; `1` if any command twin is missing or descriptions differ.

## Invokes — required
- directory .claude/commands — scripts/validate-commands.js:31
- directory .gemini/commands — scripts/validate-commands.js:32
- directory commands — scripts/validate-commands.js:33
- module node:fs (require('fs')) — scripts/validate-commands.js:23
- module node:path (require('path')) — scripts/validate-commands.js:24

## Invoked by — required
- config .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:55
- script scripts/validate-commands-test.js — scripts/validate-commands-test.js:12

## Concepts named — required, verbatim
- `slash-command directories` — scripts/validate-commands.js:5 — defined here
- `command parity` — scripts/validate-commands.js:114 — defined here
- `description sync` — scripts/validate-commands.js:140 — defined here
- `command twin mapping (plan -> planning)` — scripts/validate-commands.js:38-40 — defined here
- `Claude Code commands` — scripts/validate-commands.js:6 — used here
- `Gemini CLI commands` — scripts/validate-commands.js:7 — used here
- `Antigravity CLI commands` — scripts/validate-commands.js:8 — used here

## Structure
- Header block comment & purpose summary (lines 1-21)
- Imports: fs, path (lines 23-24)
- // ─── Config ─────────────────────────────────────────────────────────────────── (line 26)
- // ─── Parsers ────────────────────────────────────────────────────────────────── (line 42)
- // ─── Loader ─────────────────────────────────────────────────────────────────── (line 89)
- // ─── Main ───────────────────────────────────────────────────────────────────── (line 110)
  - // ── Parity check ──────────────────────────────────────────────────────────── (line 113)
  - // ── Description sync check ────────────────────────────────────────────────── (line 139)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-commands.js`
- language: JavaScript (Node.js / Bun CommonJS)
- lines: 188
- documented invocation:
  > "run: node scripts/validate-commands.js" — .github/workflows/test-plugin-install.yml:55
  > "Exit codes: 0 = all clear, 1 = one or more errors" — scripts/validate-commands.js:18
- **executed:** yes
- actual command run: `cd sources/addy && bun scripts/validate-commands.js`
- abridged stdout:
  ```text
  Checking command parity...
    ✓  build
    ✓  code-simplify
    ✓  constraints
    ✓  plan (planning in toml dirs)
    ✓  review
    ✓  ship
    ✓  spec
    ✓  test
    ✓  webperf

  Checking description sync...
    ✓  build
    ✓  code-simplify
    ✓  constraints
    ✓  plan
    ✓  review
    ✓  ship
    ✓  spec
    ✓  test
    ✓  webperf

  9 commands checked — 0 error(s) — PASSED
  ```
- **actual exit code:** 0
- documented exit codes: `0 = all clear, 1 = one or more errors` (line 18). Actual exit paths in code: line 184 (`if (errors > 0) process.exit(1);`) and implicit exit 0.
- for validators/gates: can exit non-zero? Yes. Exits 1 on missing twin or description discrepancy. Exits 0 on repository default branch.
- does the output match what the documentation claims? Yes.

## Defects — required
- `cross-file-contradiction` · scripts/validate-commands.js:38-40 · `NAME_MAP = { plan: 'planning' }` hardcodes an asymmetric command name discrepancy between Claude Code (`/plan`) and Gemini/Antigravity (`/planning`).

## Observations
- Robust directory anchoring: resolves `ROOT = path.resolve(__dirname, '..')`, allowing execution from any directory.
- Zero third-party dependencies: parses YAML frontmatter and TOML description fields with regex patterns that correctly unescape internal quotes.

## Context cost
7,108 bytes (file) + ~35,000 bytes (27 command files) = ~42,108 bytes total, ~10,527 tokens.
