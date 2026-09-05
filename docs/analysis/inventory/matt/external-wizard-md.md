---
package: matt
path: external/wizard.md
type: doc
bytes: 363000
unit: inv-matt-33
deprecated: false
aliases: []
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/wizard.md

## Purpose — required, verbatim
> "Generate a script that walks a human through setup." — external/wizard.md:24

## Design intent — required
Generates interactive, stateful bash wizard scripts that guide human engineers through manual dashboard configuration and one-off service migrations, clearing terminals between stages, opening URLs, capturing sensitive secrets blind, and idempotently writing keys to `.env` and GitHub Actions secrets. Solves the problem of volatile chat instructions scrolling out of view, while keeping sensitive production credentials entirely out of LLM model context.

## Phase — required
matt:Upkeep

## Inputs — required
Repository environment configurations (`.env*`, `docker-compose*`), framework configuration files, GitHub Actions workflow files (`.github/workflows/` searching for `secrets.*` and `vars.*` references), user-confirmed stage sequence, and external service documentation.

## Outputs — required
Executable interactive bash script (saved to scratch or `scripts/` path), local `.env` file updates, and GitHub Actions secrets/variables via `gh secret set` and `gh variable set`.

## Invokes — required
- skill grill-with-docs — external/wizard.md:31
- skill to-spec — external/wizard.md:31
- skill setup-matt-pocock-skills — external/wizard.md:70
- skill implement — external/wizard.md:70
- skill ask-matt — external/wizard.md:70

## Invoked by — required
none

## Concepts named — required, verbatim
- `wizard` — external/wizard.md:25 — defined here
- `agent` — external/wizard.md:26 — used here
- `gh` — external/wizard.md:33 — used here
- `stage` — external/wizard.md:35 — defined here
- `TOTAL_STAGES` — external/wizard.md:35 — defined here
- `template` — external/wizard.md:40 — used here
- `skill` — external/wizard.md:40 — used here
- `ask` — external/wizard.md:49 — used here
- `read -r` — external/wizard.md:49 — used here
- `standalone` — external/wizard.md:53 — defined here
- `chain step` — external/wizard.md:53 — used here
- `harness` — external/wizard.md:55 — used here
- `user-invoked` — external/wizard.md:56 — used here
- `model` — external/wizard.md:57 — used here
- `model-invoked` — external/wizard.md:57 — defined here
- `context` — external/wizard.md:70 — used here
- `reach-for-it-anytime standalone` — external/wizard.md:70 — defined here

## Structure
- # The /wizard Skill — external/wizard.md:24
- ## What it does — external/wizard.md:24
- ## When to reach for it — external/wizard.md:27
- ## Prerequisites — external/wizard.md:32
- ## Stages — external/wizard.md:34
- ## The template already solves the UX — external/wizard.md:39
- ## Ephemeral by default — external/wizard.md:42
- ## Common questions — external/wizard.md:44
- ## It's working if — external/wizard.md:60
- ## Where it fits — external/wizard.md:69
- ## You have the skill. Now build the workflow around it. — external/wizard.md:70
- ## Install the skills — external/wizard.md:70
- ## Related reading — external/wizard.md:70

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · external/wizard.md:49 documents open issue #741 where arrow keys in `ask` prompts produce terminal escape codes (`^[[D` / `^[[C`) because the template uses bash `read -r` rather than Readline.
- `doc-drift` · external/wizard.md:40 links to template at `skills/engineering/wizard/template.sh` on GitHub while repository layout places it locally at `skills/wizard/template.sh`.
- `doc-drift` · external/wizard.md:5 places wizard under section "Upkeep", whereas internal doc `docs/engineering/wizard.md:1` places it under "engineering".

## Observations
Treats human engineers as execution runtimes for tasks requiring dashboard clicks or credential generation, strictly separating script generation (performed by the agent) from script execution (performed by the user on localhost). Employs static bash verification (`bash -n` and `shellcheck`) and verifies that every `set_secret` corresponds to a live CI reference before presenting the script to the user.

## Context cost
363000 bytes, ~72000 tokens (HTML snapshot with inline hydration bundle).
