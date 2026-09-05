---
package: matt
path: skills/engineering/wizard/template.sh
type: skill
bytes: 8567
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/wizard/template.sh

## Purpose — required, verbatim
> "A wizard walks a human through a manual procedure, step by step." — skills/engineering/wizard/template.sh:3

## Design intent — required
Reusable bash script template and runtime library for interactive human setup wizards. Provides standardized, terminal-friendly UI helpers (`banner`, `stage`, `say`, `step`, `note`, `warn`, `pause`, `confirm`), terminal clearing for focused single-screen steps, cross-platform browser URL opening (`wslview`, `explorer.exe`, `xdg-open`, `open`), hidden secret entry via `read -rs`, idempotent `.env` file upserts, and GitHub Actions secret/variable creation via `gh secret set`/`gh variable set`. Solves terminal UX, color formatting, and secret handling consistently across all generated wizards.

## Phase — required
none

## Inputs — required
- User terminal input and confirmation via `read -r` and `read -rs` (skills/engineering/wizard/template.sh:80, 87, 108, 122).
- Target environment variable file `$ENV_FILE`, default `.env` (skills/engineering/wizard/template.sh:26).
- GitHub CLI authentication and state for `gh secret` and `gh variable` (skills/engineering/wizard/template.sh:145, 159).

## Outputs — required
- Environment variable file `$ENV_FILE` (.env) with upserted key-value pairs (skills/engineering/wizard/template.sh:130, 136).
- GitHub Actions repository secrets and variables set via `gh` CLI (skills/engineering/wizard/template.sh:146, 160).
- Terminal status summaries and action checklists (skills/engineering/wizard/template.sh:170, 177).

## Invokes — required
none

## Invoked by — required
- skill wizard — skills/engineering/wizard/SKILL.md:10
- doc docs/engineering/wizard.md — docs/engineering/wizard.md:44

## Concepts named — required, verbatim
- `wizard` — skills/engineering/wizard/template.sh:3 — defined here
- `manual procedure` — skills/engineering/wizard/template.sh:3 — used here
- `STAGES` — skills/engineering/wizard/template.sh:6 — defined here
- `wizard library` — skills/engineering/wizard/template.sh:12 — defined here
- `TOTAL_STAGES` — skills/engineering/wizard/template.sh:23 — defined here
- `ENV_FILE` — skills/engineering/wizard/template.sh:26 — defined here
- `banner` — skills/engineering/wizard/template.sh:39 — defined here
- `stage` — skills/engineering/wizard/template.sh:51 — defined here
- `say` — skills/engineering/wizard/template.sh:59 — defined here
- `step` — skills/engineering/wizard/template.sh:61 — defined here
- `open_url` — skills/engineering/wizard/template.sh:66 — defined here
- `pause` — skills/engineering/wizard/template.sh:78 — defined here
- `confirm` — skills/engineering/wizard/template.sh:84 — defined here
- `ask` — skills/engineering/wizard/template.sh:100 — defined here
- `ask_secret` — skills/engineering/wizard/template.sh:114 — defined here
- `write_env` — skills/engineering/wizard/template.sh:130 — defined here
- `set_secret` — skills/engineering/wizard/template.sh:143 — defined here
- `set_var` — skills/engineering/wizard/template.sh:157 — defined here
- `finish` — skills/engineering/wizard/template.sh:170 — defined here

## Structure
- Wizard library: delightful, consistent UX, identical across every wizard. — skills/engineering/wizard/template.sh:12
- STAGES: author this section. One stage() per step the human takes. — skills/engineering/wizard/template.sh:183
- Example stage: replace with your real steps — skills/engineering/wizard/template.sh:191

## Scripts — required if type is script or the skill ships scripts
- path: `skills/engineering/wizard/template.sh`, language: bash, lines: 205
- documented invocation: `bash -n <script>` — skills/engineering/wizard/SKILL.md:41
- **executed:** yes
- actual command run: `bash -n sources/matt/skills/engineering/wizard/template.sh`, abridged stdout: `(empty)`, **actual exit code**: 0; also executed via simulated input: `ENV_FILE=/tmp/test_wizard.env bash -c 'open() { echo "mock open: $1"; }; export -f open; printf "\npk_test_123\nsk_test_456\n" | bash sources/matt/skills/engineering/wizard/template.sh'`, abridged stdout: `Stripe setup ... ✓ Setup complete`, **actual exit code**: 0
- documented exit codes: none documented in prose; actual exit paths: `set -euo pipefail` on line 9; returns 1 on missing file or grep failure in `_existing` (lines 93, 94); `confirm` returns 0 if input matches `^[Yy]`, 1 otherwise (line 88); `set_secret` returns on success (line 150) or continues to `warn`; normal completion exits 0 after `finish` (line 204).
- for validators/gates: not a validator or gate (interactive procedure template script).
- does the output match what the documentation claims? yes (executes cleanly, captures input, upserts `.env`, and outputs completion summary).

## Defects — required
none

## Observations
Handles interactive and non-interactive environments gracefully: `_clear` no-ops if stdout is not a tty (line 34), preserving log readability when piped. Uses `grep -vE` and a temporary file for atomic idempotent updates to `.env` (lines 133-136). Degrades gracefully if `gh` CLI is absent or unauthenticated by appending to `SKIPPED` and warning the user rather than failing the script run (lines 153, 166).

## Context cost
8567 bytes, 205 lines, ~1900 tokens. Loads no external files.
