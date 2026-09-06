---
package: matt
path: docs/engineering/wizard.md
type: doc
bytes: 9877
unit: inv-matt-8
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/engineering/wizard.md

## Purpose — required, verbatim
> "`wizard` generates an interactive bash script that walks a human, step by step, through a manual procedure: wiring up third-party services, running a one-off migration, moving a project from state A to state B." — docs/engineering/wizard.md:3

## Design intent — required
Documentation page (published at `aihero.dev/skills-wizard` and `docs/engineering/wizard.md`) describing the model-invoked `wizard` engineering skill. Bridges the seam where autonomous agent execution halts and human dashboard navigation or sensitive credential generation is required. Rather than dumping multi-step manual instructions into chat scrollback where they are lost, the agent writes an interactive bash script utilizing a standardized, idempotent template library (`skills/engineering/wizard/template.sh`) to guide the developer step by step, opening browser URLs, capturing credentials blind, persisting configuration directly to local `.env` files and GitHub Actions secrets/variables via `gh`, and providing a closing summary of completed actions and skipped manual fallbacks.

## Phase — required
none

## Inputs — required
- User invocation via `/wizard` or `$wizard`, or autonomous model invocation upon encountering manual operational barriers.
- Repository configuration files scanned during scoping (`.env*`, `docker-compose*`, framework configuration, and `.github/workflows/` containing `secrets.*` and `vars.*` references).
- Human confirmation of ordered stage list and interactive keyboard input during execution.

## Outputs — required
- Ephemeral or committed interactive bash script generated in scratch paths or `scripts/`, driving manual stages and persisting values to local `.env` files and GitHub Actions secrets/variables via `gh`.
- Closing summary of written credentials and skipped manual steps.

## Invokes — required
- skill grill-with-docs — docs/engineering/wizard.md:20
- skill to-spec — docs/engineering/wizard.md:20
- template template.sh — docs/engineering/wizard.md:44
- skill setup-matt-pocock-skills — docs/engineering/wizard.md:98
- skill implement — docs/engineering/wizard.md:98
- skill ask-matt — docs/engineering/wizard.md:98

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `wizard` — docs/engineering/wizard.md:3 — defined here
- `interactive bash script` — docs/engineering/wizard.md:3 — defined here
- `agent` — docs/engineering/wizard.md:5 — used here
- `grill-with-docs` — docs/engineering/wizard.md:20 — used here
- `to-spec` — docs/engineering/wizard.md:20 — used here
- `stage` — docs/engineering/wizard.md:28 — defined here
- `TOTAL_STAGES` — docs/engineering/wizard.md:28 — defined here
- `skill` — docs/engineering/wizard.md:30 — used here
- `scoping` — docs/engineering/wizard.md:30 — defined here
- `GitHub secret` — docs/engineering/wizard.md:37 — used here
- `GitHub variable` — docs/engineering/wizard.md:38 — used here
- `template` — docs/engineering/wizard.md:44 — used here
- `STAGES` — docs/engineering/wizard.md:44 — used here
- `set_secret` — docs/engineering/wizard.md:46 — used here
- `context` — docs/engineering/wizard.md:59 — used here
- `ask` — docs/engineering/wizard.md:65 — used here
- `harness` — docs/engineering/wizard.md:77 — used here
- `model` — docs/engineering/wizard.md:77 — used here
- `model-invoked` — docs/engineering/wizard.md:77 — defined here
- `user-invoked` — docs/engineering/wizard.md:77 — defined here
- `setup-matt-pocock-skills` — docs/engineering/wizard.md:98 — used here
- `implement` — docs/engineering/wizard.md:98 — used here
- `ask-matt` — docs/engineering/wizard.md:98 — used here

## Structure
- What it does — docs/engineering/wizard.md:1
- When to reach for it — docs/engineering/wizard.md:7
- Prerequisites — docs/engineering/wizard.md:22
- Stages — docs/engineering/wizard.md:26
- The template already solves the UX — docs/engineering/wizard.md:42
- Ephemeral by default — docs/engineering/wizard.md:48
- Common questions — docs/engineering/wizard.md:55
- It's working if — docs/engineering/wizard.md:87
- Where it fits — docs/engineering/wizard.md:96

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- script-bug — docs/engineering/wizard.md:65 — Arrow keys in an ask prompt insert escape sequences ^[[D / ^[[C instead of moving cursor due to read -r rather than Readline (GitHub issue #741).
- internal-contradiction — docs/engineering/wizard.md:63 — Wizard stages run forward only with no back button, requiring Ctrl-C abort and re-run to fix mistyped values mid-run.
- doc-drift — docs/engineering/wizard.md:77 — Upstream harness issue (#693) where Claude desktop and web surfaces drop user-invoked skills from model listings, forcing migration to model-invoked status.

## Observations
Explains the separation of responsibilities between model authoring and human execution: the agent writes the script and statically checks syntax (`bash -n`, `shellcheck`), but never executes it because the script requires human browser clicks and blind credential input. Secrets never enter model context at runtime unless pasted during scoping. The fixed bash template library in `skills/engineering/wizard/template.sh` encapsulates UX concerns (time remaining calculation, confirmation gates, WSL cross-platform browser opening, idempotent `.env` upserts, `gh` secret/variable setting). Referenced in `CHANGELOG.md:52` as a promoted engineering skill.

## Context cost
9877 bytes, approximately 2300 tokens. Standalone doc; references template at `skills/engineering/wizard/template.sh` (8567 bytes).
