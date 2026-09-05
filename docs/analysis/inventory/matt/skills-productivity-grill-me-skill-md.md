---
package: matt
path: skills/productivity/grill-me/SKILL.md
type: skill
bytes: 157
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/grill-me/SKILL.md, sha256: caaf8b8de1684f96e26b28f3c29189db5c89cce4b73e1c93d86164f66ef88637}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/grill-me/SKILL.md

## Purpose — required, verbatim
> "A relentless interview to sharpen a plan or design." — skills/productivity/grill-me/SKILL.md:3

## Design intent — required
Thin user-invoked wrapper and entry point for the underlying model-invoked `grilling` interview primitive. Disables automatic model invocation (`disable-model-invocation: true`) so that users can explicitly initiate relentless questioning on loose ideas without file modifications, delegating execution immediately to the `grilling` skill.

## Phase — required
matt:productivity

## Inputs — required
User prompt or rough plan provided for interview.

## Outputs — required
Delegates execution to the `grilling` skill.

## Invokes — required
- skill grilling — skills/productivity/grill-me/SKILL.md:7

## Invoked by — required
- doc README.md — README.md:100

## Concepts named — required, verbatim
- `grill-me` — skills/productivity/grill-me/SKILL.md:2 — defined here
- `disable-model-invocation` — skills/productivity/grill-me/SKILL.md:4 — used here
- `Skill` — skills/productivity/grill-me/SKILL.md:7 — used here
- `grilling` — skills/productivity/grill-me/SKILL.md:7 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Architectural exemplar of Matt's decoupled skill structure: a minimal user-invoked orchestrator wrapper delegating directly to a reusable model-invoked primitive.

## Context cost
157 bytes + 4048 bytes (grilling skill) = ~4205 bytes, ~950 tokens.
