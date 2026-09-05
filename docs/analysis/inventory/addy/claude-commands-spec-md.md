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
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/spec.md

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — .claude/commands/spec.md:2

## Design intent — required
Initiates the specification phase of the development lifecycle, conducting a targeted discovery interview to capture objectives, core features, tech stack, and operational boundaries. It produces a comprehensive `SPEC.md` file (and capability map for composite projects) that serves as the approved foundation before planning and implementation begin.

## Phase — required
addy:Spec

## Inputs — required
- User requirements and project descriptions
- Clarifying interview answers regarding objectives, users, acceptance criteria, stack preferences, and boundaries

## Outputs — required
- `SPEC.md` in the project root
- Optional approved capability map (module ids, dependency directions, build order) for multi-capability initiatives

## Invokes — required
- skill agent-skills:spec-driven-development — .claude/commands/spec.md:5

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec-driven-development` — .claude/commands/spec.md:5 — used here
- `capability map` — .claude/commands/spec.md:15 — used here
- `SPEC.md` — .claude/commands/spec.md:17 — defined here

## Structure
Numbered interview checklist (questions 1–4: objective/users, features/acceptance criteria, tech stack/constraints, boundaries) followed by structured specification synthesis instructions, capability map handling, and user sign-off requirements.

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Structures the specification into six distinct areas: objective, commands, project structure, code style, testing strategy, and boundaries. Proposes modular capability mapping when multiple capabilities are requested simultaneously.

## Context cost
913 bytes (~228 tokens). Invocations load `spec-driven-development`.
