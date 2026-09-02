---
package: addy
path: .claude/commands/spec.md
type: command
bytes: 913
unit: inv-addy-4
---

# .claude/commands/spec.md

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — .claude/commands/spec.md:2

## Design intent — required
Initiates the specification phase of development by questioning the user across objectives, core features, tech stack, and known boundaries (always do, ask first, never do), generating a structured 6-area spec at `SPEC.md` (or capability map for bundled features in Phase 0), and confirming with the user before implementation.

## Phase — required
`addy:Spec`

## Inputs — required
- User project requirements and interview responses

## Outputs — required
- `SPEC.md` at project root
- Capability map (for complex multi-module projects)

## Invokes — required
- skill spec-driven-development — .claude/commands/spec.md:5 (named `agent-skills:spec-driven-development`)

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec-driven-development` — .claude/commands/spec.md:2, 5 — used here
- `acceptance criteria` — .claude/commands/spec.md:9 — used here
- `boundaries` — .claude/commands/spec.md:11, 13 — defined here
- `capability map` — .claude/commands/spec.md:15 — defined here
- `Phase 0` — .claude/commands/spec.md:15 — used here
- `SPEC.md` — .claude/commands/spec.md:17 — defined here

## Structure
- `---` (frontmatter: description) — .claude/commands/spec.md:1-3
- Clarifying questions 1–4 — .claude/commands/spec.md:8-11
- Core areas & capability map — .claude/commands/spec.md:13-15
- Output path & confirmation — .claude/commands/spec.md:17

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Mandates explicit decomposition via capability map in Phase 0 when multiple capabilities are bundled (.claude/commands/spec.md:15).

## Context cost
- File size: 913 bytes (~230 tokens).
- Transitive cost when invoked: loads `spec-driven-development` SKILL.md (12,163 bytes, ~3,040 tokens).
