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
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/wizard.md

## Purpose — required, verbatim
> "`wizard` generates an interactive bash script that walks a human, step by step, through a manual procedure: wiring up third-party services, running a one-off migration, moving a project from state A to state B. It opens each URL, says what to click and copy, captures what comes back, and writes it into `.env` files and GitHub Actions secrets." — docs/engineering/wizard.md:3

## Design intent — required
Generates interactive, stateful bash wizard scripts that guide human engineers through manual dashboard configuration and one-off service migrations, clearing terminals between stages, opening URLs, capturing sensitive secrets blind, and idempotently writing keys to `.env` and GitHub Actions secrets. Solves the problem of volatile chat instructions scrolling out of view, while keeping sensitive production credentials entirely out of LLM model context.

## Phase — required
matt:engineering

## Inputs — required
Repository environment configurations (`.env*`, `docker-compose*`), framework configuration files, GitHub Actions workflow files (`.github/workflows/` searching for `secrets.*` and `vars.*` references), user-confirmed stage sequence, and external service documentation.

## Outputs — required
Executable interactive bash script (saved to scratch or `scripts/` path), local `.env` file updates, and GitHub Actions secrets/variables via `gh secret set` and `gh variable set`.

## Invokes — required
- doc grill-with-docs — docs/engineering/wizard.md:20
- doc to-spec — docs/engineering/wizard.md:20
- doc setup-matt-pocock-skills — docs/engineering/wizard.md:98
- doc implement — docs/engineering/wizard.md:98
- doc ask-matt — docs/engineering/wizard.md:98

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:52

## Concepts named — required, verbatim
- `agent` — docs/engineering/wizard.md:5 — used here
- `wizard` — docs/engineering/wizard.md:5 — defined here
- `stage` — docs/engineering/wizard.md:28 — defined here
- `TOTAL_STAGES` — docs/engineering/wizard.md:28 — defined here
- `skill` — docs/engineering/wizard.md:30 — used here
- `template` — docs/engineering/wizard.md:44 — used here
- `context` — docs/engineering/wizard.md:59 — used here
- `ask` — docs/engineering/wizard.md:65 — used here
- `standalone` — docs/engineering/wizard.md:73 — defined here
- `chain step` — docs/engineering/wizard.md:73 — used here
- `harness` — docs/engineering/wizard.md:77 — used here
- `model` — docs/engineering/wizard.md:77 — used here
- `user-invoked` — docs/engineering/wizard.md:77 — used here
- `reach-for-it-anytime standalone` — docs/engineering/wizard.md:98 — defined here

## Structure
- ## What it does — docs/engineering/wizard.md:1
- ## When to reach for it — docs/engineering/wizard.md:7
- ## Prerequisites — docs/engineering/wizard.md:22
- ## Stages — docs/engineering/wizard.md:26
- ## The template already solves the UX — docs/engineering/wizard.md:42
- ## Ephemeral by default — docs/engineering/wizard.md:48
- ## Common questions — docs/engineering/wizard.md:55
- ## It's working if — docs/engineering/wizard.md:87
- ## Where it fits — docs/engineering/wizard.md:96

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · docs/engineering/wizard.md:44 links to template at `skills/engineering/wizard/template.sh` on GitHub while repository layout places it locally at `skills/engineering/wizard/template.sh`.
- `script-bug` · docs/engineering/wizard.md:65 documents open issue #741 where arrow keys in `ask` prompts produce terminal escape codes (`^[[D` / `^[[C`) because the template uses bash `read -r` rather than Readline.

## Observations
Treats human engineers as execution runtimes for tasks requiring dashboard clicks or credentials creation, strictly separating script generation (performed by the agent) from script execution (performed by the user on localhost). Employs static bash verification (`bash -n` and `shellcheck`) and verifies that every `set_secret` corresponds to a live CI reference before presenting the script to the user.

## Context cost
9877 bytes (~2470 tokens).
