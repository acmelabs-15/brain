---
package: addy
path: commands/spec.toml
type: command
bytes: 911
unit: inv-addy-11
---

# commands/spec.toml

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — commands/spec.toml:1

## Design intent — required
Serves as the front door to the specification lifecycle phase, initiating an interview workflow that extracts requirements, boundaries, technical constraints, and testing strategies before any implementation begins. For composite systems bundling multiple capabilities, it enforces a dependency-ordered capability map before individual specifications are written. It commits the resulting design to `SPEC.md` in the repository root as the baseline artifact for downstream planning and execution.

## Phase — required
`addy:Define`

## Inputs — required
- User responses to clarifying interview questions: objective & target users, core features & acceptance criteria, tech stack preferences & constraints, known boundaries (always, ask first, never) — commands/spec.toml:6-10
- Approval of capability map when bundling multiple capabilities — commands/spec.toml:14

## Outputs — required
- Capability map (module ids, dependency direction, build order) for multi-capability requests — commands/spec.toml:14
- `SPEC.md` in the project root — commands/spec.toml:16

## Invokes — required
- skill spec-driven-development — commands/spec.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec-driven-development` — commands/spec.toml:4 — used here
- `acceptance criteria` — commands/spec.toml:8 — used here
- `known boundaries` — commands/spec.toml:10 — used here
- `six core areas` — commands/spec.toml:12 — defined here
- `capability map` — commands/spec.toml:14 — used here
- `SPEC.md` — commands/spec.toml:16 — defined here

## Structure
- `description = "..."` — commands/spec.toml:1
- `prompt = """` — commands/spec.toml:3
  - Skill invocation statement (spec-driven-development) — commands/spec.toml:4
  - Interview guidance (4 numbered focus areas) — commands/spec.toml:6-10
  - Core coverage specification (six core areas) — commands/spec.toml:12
  - Multi-capability Phase 0 handling (capability map) — commands/spec.toml:14
  - Artifact output instruction (SPEC.md) and user confirmation — commands/spec.toml:16

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · scripts/validate-artifact-paths.js:44-52 · In `scripts/validate-artifact-paths.js`, `commands/spec.toml` is omitted from `GUARDED_FILES`, leaving the Antigravity spec command unmonitored for artifact-path drift.

## Observations
- Covers six mandatory structural areas: objective, commands, project structure, code style, testing strategy, and boundaries (`commands/spec.toml:12`).
- Modular capability mapping: explicitly references the underlying skill's Phase 0 to decouple composite features into distinct, independently testable modules before drafting individual specs (`commands/spec.toml:14`).

## Context cost
911 bytes (~228 tokens). Transitive cost: loads `skills/spec-driven-development/SKILL.md` (12,163 bytes), totaling 13,074 bytes (~3,269 tokens).
