---
package: addy
path: .claude/commands/spec.md
type: command
bytes: 913
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude/commands/spec.md, sha256: 82325b4cc75ae2413c7bf4b6f84804eb662935d9df98edab50eef2b39ff904b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/spec.md

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — .claude/commands/spec.md:2

## Design intent — required
Initiates the specification phase through a four-part requirements interview, generates a structured specification across six core areas (objective, commands, project structure, code style, testing strategy, boundaries), supports module capability mapping for bundled features, and writes the canonical specification to `SPEC.md` for human approval before code is written.

## Phase — required
addy:Define

## Inputs — required
- User responses to clarifying questions covering objective, features, tech stack, constraints, and boundaries — .claude/commands/spec.md:8, 9, 10, 11

## Outputs — required
- Specification file `SPEC.md` saved in project root — .claude/commands/spec.md:17
- Approved capability map for bundled features — .claude/commands/spec.md:15

## Invokes — required
- skill agent-skills:spec-driven-development — .claude/commands/spec.md:5

## Invoked by — required
none

## Concepts named — required, verbatim
`spec-driven development` — .claude/commands/spec.md:2 — defined here
`acceptance criteria` — .claude/commands/spec.md:9 — used here
`boundaries` — .claude/commands/spec.md:11, 13 — defined here
`capability map` — .claude/commands/spec.md:15 — defined here
`SPEC.md` — .claude/commands/spec.md:17 — defined here

## Structure
none (flat numbered questionnaire and procedural steps)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Mandates that if a request bundles several independently testable capabilities, a capability map (module ids, dependency direction, build order) must be proposed and approved first per Phase 0 of the skill, specifying each module in dependency order.

## Context cost
913 bytes, approximately 220 tokens.
