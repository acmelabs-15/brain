---
package: addy
path: .gemini/commands/spec.toml
type: command
bytes: 911
unit: inv-addy-1
---

# .gemini/commands/spec.toml

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — .gemini/commands/spec.toml:1

## Design intent — required
Initiates the specification-first development lifecycle by conducting a clarifying interview to establish goals, core features, technology constraints, and operational boundaries before writing code. For complex multi-module initiatives, it decomposes requests into an approved capability map with explicit dependency ordering, outputting a complete `SPEC.md` for user confirmation. Without it, development proceeds from ambiguous requirements, misses negative boundaries, or tackles multi-capability systems without structured decomposition.

## Phase — required
`addy:Define`

## Inputs — required
- User feature request and project context — .gemini/commands/spec.toml:6
- User responses to clarifying interview questions (objective, features, stack preferences, boundaries) — .gemini/commands/spec.toml:7-10

## Outputs — required
- `SPEC.md` at project root covering six core areas: objective, commands, project structure, code style, testing strategy, and boundaries — .gemini/commands/spec.toml:12, 16
- Capability map (module IDs, dependency direction, build order) for multi-capability systems — .gemini/commands/spec.toml:14

## Invokes — required
- skill spec-driven-development — .gemini/commands/spec.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec-driven-development` — .gemini/commands/spec.toml:1, 4 — used here
- `clarifying questions` — .gemini/commands/spec.toml:6 — defined here
- `acceptance criteria` — .gemini/commands/spec.toml:8 — defined here
- `boundaries (always / ask first / never)` — .gemini/commands/spec.toml:10, 12 — defined here
- `structured spec (six core areas)` — .gemini/commands/spec.toml:12 — defined here
- `capability map` — .gemini/commands/spec.toml:14 — defined here
- `Phase 0 capability decomposition` — .gemini/commands/spec.toml:14 — used here
- `SPEC.md` — .gemini/commands/spec.toml:16 — defined here

## Structure
- Unsectioned 4-point interview framework and spec generation instructions in prompt body — .gemini/commands/spec.toml:6-16

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicit Phase 0 capability decomposition requirement: when requests bundle multiple testable capabilities, a capability map must be approved before per-module specification (.gemini/commands/spec.toml:14).
- Mandates 3-tier boundary definition: "what to always do, ask first about, and never do" (.gemini/commands/spec.toml:10).

## Context cost
- File size: 911 bytes (~230 tokens).
- Transitive context cost when invoked: loads `skills/spec-driven-development/SKILL.md` (9,180 bytes), totaling ~10,091 bytes (~2,520 tokens) before interactive dialogue.
