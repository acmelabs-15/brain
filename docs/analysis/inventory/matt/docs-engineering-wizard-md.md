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
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/wizard.md

## Purpose — required, verbatim
> "`wizard` generates an interactive bash script that walks a human, step by step, through a manual procedure: wiring up third-party services, running a one-off migration, moving a project from state A to state B. It opens each URL, says what to click and copy, captures what comes back, and writes it into `.env` files and GitHub Actions secrets." — docs/engineering/wizard.md:3

## Design intent — required
Documentation page for the `wizard` engineering skill published on aihero.dev. Explains that a wizard is an executable bash script written by the agent but executed by the human to drive manual interactive procedures (service configuration, credentials entry, one-off migrations) without leaking secrets into model context or scrolling instructions out of terminal view. Details the scoping workflow (inspecting `.env*`, `docker-compose*`, workflow secrets), authoring single-screen stages using `template.sh`, static verification, and the contract between human execution and agent authoring.

## Phase — required
matt:engineering

## Inputs — required
User description of manual procedure or automated trigger when an agent hits human-only setup wall; repository files inspected during scoping (`.env*`, `docker-compose*`, framework config, `.github/workflows/` `secrets.*` and `vars.*`).

## Outputs — required
Executable bash script implementing the wizard (saved to scratch or `scripts/`), which when run produces `.env` updates, GitHub Actions secrets (`gh secret`), GitHub Actions variables (`gh variable`), and terminal summaries.

## Invokes — required
- skill grill-with-docs — docs/engineering/wizard.md:20
- skill to-spec — docs/engineering/wizard.md:20
- template template.sh — docs/engineering/wizard.md:44
- skill setup-matt-pocock-skills — docs/engineering/wizard.md:98
- skill implement — docs/engineering/wizard.md:98
- skill ask-matt — docs/engineering/wizard.md:98

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:52

## Concepts named — required, verbatim
- `wizard` — docs/engineering/wizard.md:3 — defined here
- `interactive bash script` — docs/engineering/wizard.md:3 — defined here
- `stage` — docs/engineering/wizard.md:28 — defined here
- `TOTAL_STAGES` — docs/engineering/wizard.md:28 — defined here
- `scoping` — docs/engineering/wizard.md:30 — defined here
- `template` — docs/engineering/wizard.md:44 — defined here
- `STAGES` — docs/engineering/wizard.md:44 — defined here
- `bash -n` — docs/engineering/wizard.md:46 — used here
- `shellcheck` — docs/engineering/wizard.md:46 — used here
- `ephemeral by default` — docs/engineering/wizard.md:48 — defined here
- `hidden terminal entry` — docs/engineering/wizard.md:59 — used here
- `read -r` — docs/engineering/wizard.md:65 — used here
- `Readline` — docs/engineering/wizard.md:65 — used here
- `model-invoked` — docs/engineering/wizard.md:77 — defined here
- `user-invoked` — docs/engineering/wizard.md:77 — used here
- `reach-for-it-anytime standalone` — docs/engineering/wizard.md:98 — defined here

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
none

## Observations
Documents the core philosophy that the agent writes the bash script but never executes it, avoiding the security issue of putting runtime secrets or API keys into model context ("No. The agent writes a script; it doesn't run it." — docs/engineering/wizard.md:59). Establishes UX conventions for terminal-based interactive procedures: single-screen clearing stages, progress indicators via `TOTAL_STAGES`, idempotent `.env` upserting, blind password entry, and fallback handling when `gh` CLI is missing.

## Context cost
9877 bytes, ~2300 tokens.
