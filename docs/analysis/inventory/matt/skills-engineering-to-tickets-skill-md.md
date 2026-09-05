---
package: matt
path: skills/engineering/to-tickets/SKILL.md
type: skill
bytes: 5671
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/to-tickets/SKILL.md

## Purpose — required, verbatim
> "Break a plan, spec, or conversation into a set of **tickets**: tracer-bullet vertical slices, each declaring the tickets that **block** it." — skills/engineering/to-tickets/SKILL.md:9

## Design intent — required
Decomposes high-level specifications, plans, or conversations into an executable directed acyclic graph of self-contained tickets. Enforces vertical slicing across all layers (schema, API, UI, tests) where each ticket is sized to execute within a fresh context window. Manages dependency ordering via blocking edges, defines execution frontiers, handles wide refactorings via expand-contract patterns to maintain continuous green CI, and publishes either to local individual markdown files or external issue trackers tagged `ready-for-agent`.

## Phase — required
none

## Inputs — required
- Conversation context, spec path, issue number, or URL — skills/engineering/to-tickets/SKILL.md:17
- Codebase context, domain glossary, and ADRs — skills/engineering/to-tickets/SKILL.md:21
- Tracker and triage label configuration (from `setup-matt-pocock-skills`) — skills/engineering/to-tickets/SKILL.md:11

## Outputs — required
- Ticket files under `.scratch/<feature-slug>/issues/<NN>-<slug>.md` or tracker issues tagged `ready-for-agent` — skills/engineering/to-tickets/SKILL.md:62-63

## Invokes — required
- skill setup-matt-pocock-skills — skills/engineering/to-tickets/SKILL.md:11

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:23

## Concepts named — required, verbatim
- `to-tickets` — skills/engineering/to-tickets/SKILL.md:2 — defined here
- `tracer-bullet` — skills/engineering/to-tickets/SKILL.md:3 — used here
- `tickets` — skills/engineering/to-tickets/SKILL.md:9 — defined here
- `vertical slices` — skills/engineering/to-tickets/SKILL.md:9 — defined here
- `block` — skills/engineering/to-tickets/SKILL.md:9 — defined here
- `prefactor` — skills/engineering/to-tickets/SKILL.md:23 — defined here
- `blocking edges` — skills/engineering/to-tickets/SKILL.md:38 — defined here
- `Wide refactors` — skills/engineering/to-tickets/SKILL.md:40 — defined here
- `blast radius` — skills/engineering/to-tickets/SKILL.md:40 — defined here
- `expand–contract` — skills/engineering/to-tickets/SKILL.md:40 — defined here
- `ready-for-agent` — skills/engineering/to-tickets/SKILL.md:63 — used here
- `frontier` — skills/engineering/to-tickets/SKILL.md:65 — defined here
- `Acceptance criteria` — skills/engineering/to-tickets/SKILL.md:94 — defined here

## Structure
- To Tickets
- Process
- 1. Gather context
- 2. Explore the codebase (optional)
- 3. Draft vertical slices
- 4. Quiz the user
- 5. Publish the tickets to the configured tracker
- Parent
- What to build
- Acceptance criteria
- Blocked by

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Treats wide refactors as exceptions to vertical slicing, mandating expand-contract sequencing across discrete batches with optional integration branches. Demands interactive quizzing before publishing to validate granularity and dependencies. Forbids closing parent issues.

## Context cost
5671 bytes, 106 lines, ~1420 tokens. Loads no external files.
