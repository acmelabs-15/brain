---
package: addy
path: .claude/commands/spec.md
type: command
bytes: 913
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude/commands/spec.md, sha256: 82325b4cc75ae2413c7bf4b6f84804eb662935d9df98edab50eef2b39ff904b0}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/spec.md

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — .claude/commands/spec.md:2

## Design intent — required
Initiates the specification phase of development by questioning the user across objectives, core features, tech stack, and known boundaries (always do, ask first, never do), generating a structured 6-area spec at `SPEC.md` (or capability map for bundled features in Phase 0), and confirming with the user before implementation.

## Phase — required
addy:DEFINE

## Inputs — required
- User project requirements and interview responses

## Outputs — required
- `SPEC.md` at project root
- Capability map (for complex multi-module projects)

## Invokes — required
- skill spec-driven-development — .claude/commands/spec.md:5

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec-driven development` — .claude/commands/spec.md:2 — used here
- `spec-driven-development` — .claude/commands/spec.md:5 — used here
- `acceptance criteria` — .claude/commands/spec.md:9 — used here
- `boundaries` — .claude/commands/spec.md:11,13 — defined here
- `capability map` — .claude/commands/spec.md:15 — defined here
- `Phase 0` — .claude/commands/spec.md:15 — used here
- `SPEC.md` — .claude/commands/spec.md:17 — defined here

## Structure
- Clarifying questions 1–4
- Core areas and capability map
- Output path and confirmation

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Mandates explicit decomposition via capability map in Phase 0 when multiple capabilities are bundled (.claude/commands/spec.md:15).

## Context cost
913 bytes, ~230 tokens. Transitive cost: loads `spec-driven-development` (12163 bytes, ~3040 tokens).
