---
package: rjm
path: .claude/skills/golden-principles/references/design-solid-principles.md
type: reference
bytes: 2410
unit: inv-rjm-123
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-solid-principles.md, sha256: 5aa244c1fbe421aafa6b7abc0e8161e548ed359cc09d88985371d294cbfb9144}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/golden-principles/references/design-solid-principles.md

## Purpose — required, verbatim
> "Five principles for object-oriented design that promote maintainability and flexibility." — .claude/skills/golden-principles/references/design-solid-principles.md:9

## Design intent — required
Summarizes Robert C. Martin's five SOLID principles of object-oriented design: Single Responsibility (SRP), Open-Closed (OCP), Liskov Substitution (LSP), Interface Segregation (ISP), and Dependency Inversion (DIP). It identifies warning signs for violations, provides short implementation patterns (such as strategy abstraction and interface splitting), and maps each SOLID principle directly to the foundational code qualities (cohesion, coupling, encapsulation, testability) it supports.

## Phase — required
cross-phase

## Inputs — required
- Object-oriented classes, inheritance hierarchies, interfaces, and module dependency graphs — .claude/skills/golden-principles/references/design-solid-principles.md:9

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill golden-principles — .claude/skills/golden-principles/SKILL.md:131

## Concepts named — required, verbatim
- `SOLID Principles` — .claude/skills/golden-principles/references/design-solid-principles.md:7 — defined here
- `Single Responsibility (SRP)` — .claude/skills/golden-principles/references/design-solid-principles.md:15 — defined here
- `Open-Closed (OCP)` — .claude/skills/golden-principles/references/design-solid-principles.md:16 — defined here
- `Liskov Substitution (LSP)` — .claude/skills/golden-principles/references/design-solid-principles.md:17 — defined here
- `Interface Segregation (ISP)` — .claude/skills/golden-principles/references/design-solid-principles.md:18 — defined here
- `Dependency Inversion (DIP)` — .claude/skills/golden-principles/references/design-solid-principles.md:19 — defined here
- `Commonality Variability Analysis` — .claude/skills/golden-principles/references/design-solid-principles.md:23 — used here
- `Programming by Intention` — .claude/skills/golden-principles/references/design-solid-principles.md:23 — used here
- `Strategy` — .claude/skills/golden-principles/references/design-solid-principles.md:27 — used here
- `Bridge` — .claude/skills/golden-principles/references/design-solid-principles.md:27 — used here
- `NotImplementedException` — .claude/skills/golden-principles/references/design-solid-principles.md:44 — used here
- `constructor injection` — .claude/skills/golden-principles/references/design-solid-principles.md:59 — used here
- `DI containers` — .claude/skills/golden-principles/references/design-solid-principles.md:59 — used here
- `SOLID and Code Qualities` — .claude/skills/golden-principles/references/design-solid-principles.md:61 — defined here

## Structure
- # SOLID Principles — .claude/skills/golden-principles/references/design-solid-principles.md:7
- ## Overview — .claude/skills/golden-principles/references/design-solid-principles.md:11
- ## Single Responsibility (SRP) — .claude/skills/golden-principles/references/design-solid-principles.md:21
- ## Open-Closed (OCP) — .claude/skills/golden-principles/references/design-solid-principles.md:25
- ## Liskov Substitution (LSP) — .claude/skills/golden-principles/references/design-solid-principles.md:36
- ## Interface Segregation (ISP) — .claude/skills/golden-principles/references/design-solid-principles.md:42
- ## Dependency Inversion (DIP) — .claude/skills/golden-principles/references/design-solid-principles.md:52
- ## SOLID and Code Qualities — .claude/skills/golden-principles/references/design-solid-principles.md:61
- ## Reference — .claude/skills/golden-principles/references/design-solid-principles.md:71

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/golden-principles/references/design-solid-principles.md:2 · Frontmatter source field references nonexistent path wiki/concepts/Design Principles/SOLID Principles.md.

## Observations
- Explicitly correlates each SOLID principle with the specific code quality it supports in a mapping table (.claude/skills/golden-principles/references/design-solid-principles.md:61-70).
- Emphasizes violation signals for each principle (e.g. subclass throwing exceptions or returning null violating LSP) (.claude/skills/golden-principles/references/design-solid-principles.md:38-41).

## Context cost
2410 bytes. Approximately 600 tokens.
