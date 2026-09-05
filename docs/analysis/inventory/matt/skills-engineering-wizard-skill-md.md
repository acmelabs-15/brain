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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/wizard/SKILL.md

## Purpose — required, verbatim
> "Generate an interactive bash wizard that walks a human through steps only they can perform. Use when provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cutover. Don't invoke this for steps the agent can perform itself." — skills/engineering/wizard/SKILL.md:3

## Design intent — required
Generates interactive, stage-based bash wizard scripts that guide a human operator step-by-step through manual tasks that an automated agent cannot execute directly (such as retrieving credentials from external browser dashboards, configuring cloud secrets, or managing state cutovers). Scopes necessary configuration values by inspecting existing repository files (`.env*`, `docker-compose`, GitHub Actions workflows), maps human navigation paths, authors custom steps below the `STAGES` marker of `template.sh`, and validates the resulting script statically (`bash -n`) without executing it end-to-end.

## Phase — required
matt:engineering

## Inputs — required
- Existing repository configuration files: `.env`, `.env.example`, `.env.*`, `README`, `docker-compose*`, framework config, and `.github/workflows/*`
- Current and target state definitions for migrations or cutovers
- User confirmation of the proposed ordered stage sequence and variable destinations
- Authoritative documentation or user guidance for unknown third-party UI journeys

## Outputs — required
- Generated executable bash wizard script based on `template.sh` written to a scratch or `scripts/` path
- Execution instructions for the human operator (and optional repository commit/README link for repeatable setup paths)

## Invokes — required
- template template.sh — skills/engineering/wizard/SKILL.md:10

## Invoked by — required
- doc README.md — README.md:214
- doc ask-matt — skills/engineering/ask-matt/SKILL.md:83
- doc .claude-plugin/plugin.json — .claude-plugin/plugin.json:39

## Concepts named — required, verbatim
- `wizard` — skills/engineering/wizard/SKILL.md:8 — defined here
- `template.sh` — skills/engineering/wizard/SKILL.md:10 — used here
- `STAGES` — skills/engineering/wizard/SKILL.md:10 — defined here
- `stage` — skills/engineering/wizard/SKILL.md:35 — used here
- `say` — skills/engineering/wizard/SKILL.md:35 — used here
- `step` — skills/engineering/wizard/SKILL.md:35 — used here
- `open_url` — skills/engineering/wizard/SKILL.md:35 — used here
- `ask` — skills/engineering/wizard/SKILL.md:35 — used here
- `ask_secret` — skills/engineering/wizard/SKILL.md:35 — used here
- `write_env` — skills/engineering/wizard/SKILL.md:35 — used here
- `set_secret` — skills/engineering/wizard/SKILL.md:35 — used here
- `set_var` — skills/engineering/wizard/SKILL.md:35 — used here
- `pause` — skills/engineering/wizard/SKILL.md:35 — used here
- `confirm` — skills/engineering/wizard/SKILL.md:35 — used here
- `TOTAL_STAGES` — skills/engineering/wizard/SKILL.md:35 — defined here

## Structure
- `# Wizard` — skills/engineering/wizard/SKILL.md:6
- `## Process` — skills/engineering/wizard/SKILL.md:14
- `### 1. Scope the procedure` — skills/engineering/wizard/SKILL.md:16
- `### 2. Map each stage's journey` — skills/engineering/wizard/SKILL.md:27
- `### 3. Author the wizard` — skills/engineering/wizard/SKILL.md:33
- `### 4. Verify and hand off` — skills/engineering/wizard/SKILL.md:39

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Wizards are ephemeral by default (built for one run and discarded), saved permanently only when explicitly intended as an ongoing project onboarding workflow.
- Forbids end-to-end testing by the agent since wizards launch local browsers and block on interactive human terminal entry; requires static inspection (`bash -n`) and cross-referencing secrets against CI workflows.

## Context cost
4123 bytes (~1030 tokens) plus 8567 bytes for `template.sh` = 12690 bytes (~3172 tokens).
