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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/wizard/SKILL.md

## Purpose — required, verbatim
> "Generate an interactive bash wizard that walks a human through steps only they can perform. Use when provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cutover. Don't invoke this for steps the agent can perform itself." — skills/engineering/wizard/SKILL.md:3

## Design intent — required
Guides coding agents to author interactive bash setup wizards for manual, multi-stage procedures that humans must perform (credential retrieval, third-party dashboards, infrastructure provisioning, one-off migrations). Avoids asking questions cold or re-explaining tedious instructions by scoping stages based on existing repo configuration, copying a battle-tested template library (`template.sh`), and clearing the terminal at each stage.

## Phase — required
matt:engineering

## Inputs — required
- Repo configuration files: `.env`, `.env.example`, `.env.*`, `README`, `docker-compose*`, framework config, `.github/workflows/*` (`skills/engineering/wizard/SKILL.md:20`).
- Target state and migration steps for transitions (`skills/engineering/wizard/SKILL.md:21`).
- Template script `template.sh` (`skills/engineering/wizard/SKILL.md:10, 35`).
- User confirmation on stage ordering and captured values (`skills/engineering/wizard/SKILL.md:23`).

## Outputs — required
- An executable bash script with numbered stages based on `template.sh` (`skills/engineering/wizard/SKILL.md:35, 42`).

## Invokes — required
- template template.sh — skills/engineering/wizard/SKILL.md:10

## Invoked by — required
- doc README.md — README.md:214
- doc skills/engineering/README.md — skills/engineering/README.md:32
- doc docs/engineering/wizard.md — docs/engineering/wizard.md:3

## Concepts named — required, verbatim
- `wizard` — skills/engineering/wizard/SKILL.md:8 — defined here
- `template.sh` — skills/engineering/wizard/SKILL.md:10 — used here
- `WSL` — skills/engineering/wizard/SKILL.md:10 — used here
- `hidden secret entry` — skills/engineering/wizard/SKILL.md:10 — defined here
- `STAGES` — skills/engineering/wizard/SKILL.md:10 — defined here
- `stage` — skills/engineering/wizard/SKILL.md:35 — defined here
- `say` — skills/engineering/wizard/SKILL.md:35 — defined here
- `step` — skills/engineering/wizard/SKILL.md:35 — defined here
- `open_url` — skills/engineering/wizard/SKILL.md:35 — defined here
- `ask` — skills/engineering/wizard/SKILL.md:35 — defined here
- `ask_secret` — skills/engineering/wizard/SKILL.md:35 — defined here
- `write_env` — skills/engineering/wizard/SKILL.md:35 — defined here
- `set_secret` — skills/engineering/wizard/SKILL.md:35 — defined here
- `set_var` — skills/engineering/wizard/SKILL.md:35 — defined here
- `pause` — skills/engineering/wizard/SKILL.md:35 — defined here
- `confirm` — skills/engineering/wizard/SKILL.md:35 — defined here
- `TOTAL_STAGES` — skills/engineering/wizard/SKILL.md:35 — defined here
- `shellcheck` — skills/engineering/wizard/SKILL.md:41 — used here

## Structure
- # Wizard — skills/engineering/wizard/SKILL.md:6
- ## Process — skills/engineering/wizard/SKILL.md:14
- ### 1. Scope the procedure — skills/engineering/wizard/SKILL.md:16
- ### 2. Map each stage's journey — skills/engineering/wizard/SKILL.md:27
- ### 3. Author the wizard — skills/engineering/wizard/SKILL.md:33
- ### 4. Verify and hand off — skills/engineering/wizard/SKILL.md:39

## Scripts — required if type is script or the skill ships scripts
Ships `template.sh` (evaluated in companion card `skills-engineering-wizard-template-sh.md`).

## Defects — required
none

## Observations
Wizards are ephemeral by default (saved to scratch or scripts, deleted after execution), and committed only when repeatable setup is desired. Enforces clear terminal UI so the user is never overwhelmed with scrolling logs.

## Context cost
4123 bytes, 45 lines, ~750 tokens. Loads `template.sh` (8567 bytes).
