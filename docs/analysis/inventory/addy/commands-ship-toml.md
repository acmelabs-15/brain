---
package: addy
path: commands/ship.toml
type: command
bytes: 4712
unit: inv-addy-4
deprecated: false
aliases: []
memo_inputs:
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# commands/ship.toml

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — commands/ship.toml:1

## Design intent — required
Acts as an orchestrator slash command (`/ship`) executing parallel fan-out across three independent specialist personas (`code-reviewer`, `security-auditor`, `test-engineer`) to generate comprehensive pre-launch evaluations, which are then synthesized in the main session into a formal go/no-go verdict and mandatory rollback plan.

## Phase — required
`addy:Ship`

## Inputs — required
- Changes under review: `staged changes or recent commits` — commands/ship.toml:14
- Specialist outputs: specialist persona reports returned from `code-reviewer`, `security-auditor`, and `test-engineer` — commands/ship.toml:14-16

## Outputs — required
- Launch decision document: `Ship Decision: GO | NO-GO` — commands/ship.toml:43
- Rollback specifications: `Rollback plan` — commands/ship.toml:54

## Invokes — required
- skill shipping-and-launch — commands/ship.toml:4
- agent code-reviewer — commands/ship.toml:14
- agent security-auditor — commands/ship.toml:15
- agent test-engineer — commands/ship.toml:16
- reference orchestration-patterns — commands/ship.toml:23

## Invoked by — required
none

## Concepts named — required, verbatim
- `shipping-and-launch` — commands/ship.toml:4 — used here
- `fan-out orchestrator` — commands/ship.toml:6 — defined here
- `go/no-go decision` — commands/ship.toml:1, 6 — defined here
- `rollback plan` — commands/ship.toml:6, 54, 69 — defined here
- `Phase A — Parallel fan-out` — commands/ship.toml:8 — defined here
- `code-reviewer` — commands/ship.toml:10, 14 — used here
- `security-auditor` — commands/ship.toml:15 — used here
- `test-engineer` — commands/ship.toml:16 — used here
- `Phase B — Merge in main context` — commands/ship.toml:27 — defined here
- `Phase C — Decision and rollback` — commands/ship.toml:38 — defined here
- `Blockers` — commands/ship.toml:45 — defined here
- `Recommended fixes` — commands/ship.toml:48 — defined here
- `Acknowledged risks` — commands/ship.toml:51 — defined here
- `Recovery time objective` — commands/ship.toml:57 — defined here

## Structure
- ## Phase A — Parallel fan-out — commands/ship.toml:8
- ## Phase B — Merge in main context — commands/ship.toml:27
- ## Phase C — Decision and rollback — commands/ship.toml:38
- ## Rules — commands/ship.toml:65

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms VARIANT pair V3 with `.gemini/commands/ship.toml` (92% shared lines). In this version, generic CLI phrasing is used (`The CLI`, `your global configuration`) rather than Gemini-specific phrasing (`Gemini CLI`, `~/.gemini/agents/`). Requires all three persona tool calls to be issued in a single turn for true parallel fan-out.

## Context cost
4712 bytes (~1180 tokens). When executed, spawns three isolated subagents each loading their respective persona prompt, then aggregates their outputs in the parent session.
