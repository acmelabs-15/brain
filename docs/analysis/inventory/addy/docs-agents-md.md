---
package: addy
path: docs/agents.md
type: doc
bytes: 6996
unit: inv-addy-4
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/agents.md

## Purpose — required, verbatim
> "Specialist personas that play a single role with a single perspective. Each persona is a Markdown file consumed as a system prompt by your harness (Claude Code, Cursor, Copilot, etc.)." — docs/agents.md:3

## Design intent — required
Defines the architectural separation between skills (the how), personas (the who), and commands (the when), establishing rules for multi-agent composition that forbid persona-to-persona chaining and mandate flat fan-out or direct user orchestration.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- agent code-reviewer — docs/agents.md:7
- agent security-auditor — docs/agents.md:8
- agent test-engineer — docs/agents.md:9
- agent web-performance-auditor — docs/agents.md:10
- skill code-review-and-quality — docs/agents.md:18
- command /review — docs/agents.md:20
- command /ship — docs/agents.md:20
- reference orchestration-patterns — docs/agents.md:46

## Invoked by — required
none

## Concepts named — required, verbatim
- `Specialist personas` — docs/agents.md:3 — defined here
- `code-reviewer` — docs/agents.md:7, 19 — used here
- `security-auditor` — docs/agents.md:8 — used here
- `test-engineer` — docs/agents.md:9 — used here
- `web-performance-auditor` — docs/agents.md:10 — used here
- `Three layers` — docs/agents.md:14 — defined here
- `Direct persona invocation` — docs/agents.md:26 — defined here
- `Slash command (single persona behind it)` — docs/agents.md:34 — defined here
- `Slash command (orchestrator — fan-out)` — docs/agents.md:41 — defined here
- `fan-out orchestrator` — docs/agents.md:60 — used here
- `Agent Teams` — docs/agents.md:108 — used here

## Structure
- # Agent Personas
- ## How personas relate to skills and commands
- ## When to use each
- ### Direct persona invocation
- ### Slash command (single persona behind it)
- ### Slash command (orchestrator — fan-out)
- ## Decision matrix
- ## Worked example: valid orchestration
- ## Worked example: invalid orchestration (do not build this)
- ## Rules for personas
- ## Claude Code interop
- ## Adding a new persona

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Warns against building "meta-orchestrator" personas that act purely as routing hops, demonstrating how they degrade output through two paraphrasing steps and double token cost. Explains Claude Code dual interop as isolated subagents or peer teammates under Agent Teams.

## Context cost
6996 bytes (~1750 tokens). Architectural persona specification.
