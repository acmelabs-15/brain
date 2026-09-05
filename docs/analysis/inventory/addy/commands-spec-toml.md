---
package: addy
path: commands/spec.toml
type: command
bytes: 911
unit: inv-addy-4
aliases:
  - .gemini/commands/spec.toml
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# commands/spec.toml

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — commands/spec.toml:1

## Design intent — required
Provides a slash command entry point (`/spec`) that initiates the spec-driven development workflow, interviewing the user about objectives, features, stack preferences, and boundaries before writing any code, and producing a structured `SPEC.md` artifact. Without this command, agent sessions often begin coding immediately without clear boundaries, testing strategy, or user confirmation.

## Phase — required
addy:Define

## Inputs — required
- Clarifying questions about objective, target users, core features, acceptance criteria, tech stack, constraints, and known boundaries — commands/spec.toml:6-10

## Outputs — required
- Capability map if bundled capabilities exist — commands/spec.toml:14
- Structured specification: `SPEC.md` in the project root — commands/spec.toml:16

## Invokes — required
- skill spec-driven-development — commands/spec.toml:4

## Invoked by — required
- entry point — invoked by the user or harness as a slash command (`/spec`)

## Concepts named — required, verbatim
- `spec-driven development` — commands/spec.toml:1 — used here
- `acceptance criteria` — commands/spec.toml:8 — used here
- `boundaries` — commands/spec.toml:10, 12 — used here
- `capability map` — commands/spec.toml:14 — used here

## Structure
- description — commands/spec.toml:1
- prompt — commands/spec.toml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical canonical file to `.gemini/commands/spec.toml` (ledger EXACT group 2). Mandates six core areas (objective, commands, project structure, code style, testing strategy, boundaries) and Phase 0 capability mapping for complex multi-module features.

## Context cost
911 bytes (approx. 220 tokens) for this command file. Invokes `skills/spec-driven-development/SKILL.md` (12,163 bytes), totaling ~13,074 bytes (~3,250 tokens).
