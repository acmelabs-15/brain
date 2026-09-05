---
package: addy
path: commands/spec.toml
type: command
bytes: 911
unit: inv-addy-4
deprecated: false
aliases:
  - .gemini/commands/spec.toml
memo_inputs:
  - {path: commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# commands/spec.toml

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — commands/spec.toml:1

## Design intent — required
Provides a slash command `/spec` to initiate spec-driven development, prompting clarifying questions across requirements, constraints, and boundaries, and generating a structured `SPEC.md` document before code implementation.

## Phase — required
`addy:Specify`

## Inputs — required
- Clarification answers: user responses regarding objective, features, tech stack, and `Known boundaries (what to always do, ask first about, and never do)` — commands/spec.toml:10

## Outputs — required
- Specification artifact: `SPEC.md in the project root` — commands/spec.toml:16

## Invokes — required
- skill spec-driven-development — commands/spec.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec-driven-development` — commands/spec.toml:4 — used here
- `acceptance criteria` — commands/spec.toml:8 — used here
- `boundaries` — commands/spec.toml:10, 12 — used here
- `capability map` — commands/spec.toml:14 — used here
- `SPEC.md` — commands/spec.toml:16 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact alias of `.gemini/commands/spec.toml` (EXACT duplicate ledger group 2). Supports multi-capability decomposition via a capability map in Phase 0 prior to drafting module specifications in dependency order.

## Context cost
911 bytes (~230 tokens). Loads `skills/spec-driven-development/SKILL.md` when invoked.
