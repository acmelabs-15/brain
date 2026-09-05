---
package: matt
path: skills/engineering/wizard/SKILL.md
type: skill
bytes: 4123
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/wizard/SKILL.md

## Purpose — required, verbatim
> "Generate an interactive bash wizard that walks a human through steps only they can perform. Use when provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cutover. Don't invoke this for steps the agent can perform itself." — skills/engineering/wizard/SKILL.md:3

## Design intent — required
Enables AI agents to author step-by-step interactive bash scripts for manual procedures that only humans can perform (infrastructure provisioning, credential/secret gathering, third-party dashboards, one-off cutovers). Separates the fixed UI runtime (`template.sh` library: single-screen clearing, browser opening, hidden secret entry, `.env` upserts, `gh secret`/`gh variable` writes) from custom procedural stages. Prevents sensitive secrets from entering agent conversation context and keeps complex procedural steps from scrolling out of terminal view.

## Phase — required
none

## Inputs — required
- User request for manual setup or migration procedure (skills/engineering/wizard/SKILL.md:3, 16).
- Repository files: `.env`, `.env.example`, `.env.*`, `README`, `docker-compose*`, framework config, `.github/workflows/*` (skills/engineering/wizard/SKILL.md:20).
- Irreversible action boundaries and state definitions (skills/engineering/wizard/SKILL.md:21).
- Human verification of stages and values (skills/engineering/wizard/SKILL.md:23).

## Outputs — required
- Executable bash script at scratch or `scripts/` path (skills/engineering/wizard/SKILL.md:12, 35).
- Updates to `.env` and GitHub secrets/variables when executed by human (skills/engineering/wizard/SKILL.md:8, 37).

## Invokes — required
- template template.sh — skills/engineering/wizard/SKILL.md:10

## Invoked by — required
- doc README.md — README.md:214
- doc skills/engineering/README.md — skills/engineering/README.md:32
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:83
- doc docs/engineering/wizard.md — docs/engineering/wizard.md:3
- doc CHANGELOG.md — CHANGELOG.md:52

## Concepts named — required, verbatim
- `wizard` — skills/engineering/wizard/SKILL.md:2 — defined here
- `bash wizard` — skills/engineering/wizard/SKILL.md:3 — defined here
- `manual procedure` — skills/engineering/wizard/SKILL.md:8 — used here
- `template.sh` — skills/engineering/wizard/SKILL.md:10 — used here
- `STAGES` — skills/engineering/wizard/SKILL.md:10 — used here
- `stages` — skills/engineering/wizard/SKILL.md:10 — defined here
- `ephemeral by default` — skills/engineering/wizard/SKILL.md:12 — defined here
- `stage` — skills/engineering/wizard/SKILL.md:35 — used here
- `TOTAL_STAGES` — skills/engineering/wizard/SKILL.md:35 — defined here
- `open_url` — skills/engineering/wizard/SKILL.md:35 — used here
- `ask_secret` — skills/engineering/wizard/SKILL.md:35 — used here
- `write_env` — skills/engineering/wizard/SKILL.md:35 — used here
- `set_secret` — skills/engineering/wizard/SKILL.md:35 — used here
- `set_var` — skills/engineering/wizard/SKILL.md:35 — used here
- `confirm` — skills/engineering/wizard/SKILL.md:35 — used here
- `bash -n` — skills/engineering/wizard/SKILL.md:41 — used here
- `shellcheck` — skills/engineering/wizard/SKILL.md:41 — used here

## Structure
- Wizard — skills/engineering/wizard/SKILL.md:6
- Process — skills/engineering/wizard/SKILL.md:14
- 1. Scope the procedure — skills/engineering/wizard/SKILL.md:16
- 2. Map each stage's journey — skills/engineering/wizard/SKILL.md:27
- 3. Author the wizard — skills/engineering/wizard/SKILL.md:33
- 4. Verify and hand off — skills/engineering/wizard/SKILL.md:39

## Scripts — required if type is script or the skill ships scripts
- path: `skills/engineering/wizard/template.sh`, language: bash, lines: 205
- documented invocation: `bash -n <script>` — skills/engineering/wizard/SKILL.md:41
- **executed:** yes
- actual command run: `bash -n sources/matt/skills/engineering/wizard/template.sh`, abridged stdout: `(empty)`, **actual exit code**: 0; also executed via simulated input: `ENV_FILE=/tmp/test_wizard.env bash -c 'open() { echo "mock open: $1"; }; export -f open; printf "\npk_test_123\nsk_test_456\n" | bash sources/matt/skills/engineering/wizard/template.sh'`, abridged stdout: `Stripe setup ... ✓ Setup complete`, **actual exit code**: 0
- documented exit codes: none documented in prose; actual exit paths: `set -euo pipefail` on line 9; functions return 0 on success, return 1 on missing file in `_existing` (lines 93, 94); normal script completion exits 0 via `finish` (line 204).
- for validators/gates: not a validator or gate (interactive procedure template script).
- does the output match what the documentation claims? yes (verifies syntax cleanly with exit 0).

## Defects — required
none

## Observations
Separates script generation logic from procedural execution, mandating that the agent author but never execute interactive scripts that require browser navigation or secret input. Emphasizes ephemeral script lifecycles unless human requests repeatable repository setup.

## Context cost
4123 bytes, 45 lines, ~950 tokens. Loads template.sh (8567 bytes, ~1900 tokens). Total ~2850 tokens.
