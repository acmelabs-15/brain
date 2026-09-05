---
package: addy
path: .gemini/commands/spec.toml
type: command
bytes: 911
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/spec.toml

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — .gemini/commands/spec.toml:1

## Design intent — required
Facilitates user requirements elicitation and drafts a structured technical specification (`SPEC.md`) spanning six core project dimensions before coding begins, supporting capability mapping for multi-module systems.

## Phase — required
addy:spec

## Inputs — required
User requirements, objectives, user personas, tech stack choices, constraints, and known boundaries (.gemini/commands/spec.toml:6-10).

## Outputs — required
Structured `SPEC.md` specification file (.gemini/commands/spec.toml:16) and optional capability map (.gemini/commands/spec.toml:14).

## Invokes — required
- skill spec-driven-development — .gemini/commands/spec.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `acceptance criteria` — .gemini/commands/spec.toml:8 — used here
- `capability map` — .gemini/commands/spec.toml:14 — used here
- `SPEC.md` — .gemini/commands/spec.toml:16 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical to `commands/spec.toml` (canonical member of EXACT group 2 in `docs/analysis/manifest/addy-duplicates.md`). Outlines six core areas: objective, commands, project structure, code style, testing strategy, boundaries.

## Context cost
911 bytes, ~230 tokens.
