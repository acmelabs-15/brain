---
package: addy
path: docs/antigravity-setup.md
type: doc
bytes: 5041
unit: inv-addy-4
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/antigravity-setup.md, sha256: 2fc07de1373ccf06eaa1ea84943cd1b4492f0e1d21dc311eda9538ab0702002d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/antigravity-setup.md

## Purpose — required, verbatim
> "The `agent-skills` package can be installed as a native plugin in the Antigravity CLI (`agy`), giving the agent access to structured workflows, personas, and custom slash commands." — docs/antigravity-setup.md:3

## Design intent — required
Provides setup and usage guidance for installing and using the agent skills package as a native plugin within the Google Antigravity CLI (`agy`), documenting slash commands, persona registration, on-demand skill discovery, and sandbox execution.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- command /spec — docs/antigravity-setup.md:52
- command /planning — docs/antigravity-setup.md:53
- command /build — docs/antigravity-setup.md:54
- command /test — docs/antigravity-setup.md:55
- command /review — docs/antigravity-setup.md:56
- command /code-simplify — docs/antigravity-setup.md:57
- command /ship — docs/antigravity-setup.md:58
- command /webperf — docs/antigravity-setup.md:59
- agent code-reviewer — docs/antigravity-setup.md:96
- agent security-auditor — docs/antigravity-setup.md:97
- agent test-engineer — docs/antigravity-setup.md:98

## Invoked by — required
none

## Concepts named — required, verbatim
- `Antigravity CLI` — docs/antigravity-setup.md:1, 3 — used here
- `Native Plugin Installation` — docs/antigravity-setup.md:7 — defined here
- `Import from Gemini CLI` — docs/antigravity-setup.md:32 — defined here
- `spec-driven-development` — docs/antigravity-setup.md:52 — used here
- `planning-and-task-breakdown` — docs/antigravity-setup.md:53 — used here
- `incremental-implementation` — docs/antigravity-setup.md:54 — used here
- `test-driven-development` — docs/antigravity-setup.md:55 — used here
- `code-review-and-quality` — docs/antigravity-setup.md:56 — used here
- `code-simplification` — docs/antigravity-setup.md:57 — used here
- `shipping-and-launch` — docs/antigravity-setup.md:58 — used here
- `web-performance-auditor` — docs/antigravity-setup.md:59 — used here
- `On-Demand Skill Activation` — docs/antigravity-setup.md:86 — defined here
- `Specialized Agent Personas` — docs/antigravity-setup.md:94 — defined here
- `Sandbox Mode` — docs/antigravity-setup.md:109 — defined here
- `Artifact Review` — docs/antigravity-setup.md:124 — defined here

## Structure
- # Using agent-skills with Antigravity CLI (agy)
- ## Setup
- ### Option 1: Native Plugin Installation (Recommended)
- ### Option 2: Import from Gemini CLI
- ## Slash Commands
- ## Skills & Discovery
- ## Verification & Validation
- ## How It Works
- ### 1. On-Demand Skill Activation
- ### 2. Specialized Agent Personas
- ## Configuration & Customization
- ### Project-Specific Enforcements (AGENTS.md)
- ### Sandbox Mode
- ## Usage Tips

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `cross-file-contradiction` · `docs/antigravity-setup.md:107` · Instructs users to copy or link `AGENTS.md` into their workspace root, directly contradicting `CONTRIBUTING.md:71` which forbids telling users to copy `AGENTS.md`.

## Observations
Notes that `/planning` is used in Antigravity rather than `/plan` to avoid shadowing Antigravity's internal plan command (line 63). Documents plugin installation path `~/.gemini/config/plugins/` on current agy releases.

## Context cost
5041 bytes (~1260 tokens). Tooling integration guide.
