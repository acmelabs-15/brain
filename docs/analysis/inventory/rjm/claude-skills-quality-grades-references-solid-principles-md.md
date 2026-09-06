---
package: rjm
path: .claude/skills/quality-grades/references/solid-principles.md
type: reference
bytes: 1742
unit: inv-rjm-145
in_scope_via: .claude/skills/quality-grades/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/quality-grades/references/solid-principles.md

## Purpose — required, verbatim
> "Five principles for object-oriented design that promote maintainability and flexibility." — .claude/skills/quality-grades/references/solid-principles.md:9

## Design intent — required
Summarizes the five SOLID design principles (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion), listing telltale violation signs, mapping each principle to foundational code qualities, and providing an explicit A-F rubric for grading domain quality based on SOLID adherence. Without this reference, agents performing domain quality audits would lack an objective rubric mapping structural object-oriented violations to quantitative score bands.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill quality-grades — .claude/skills/quality-grades/SKILL.md:144

## Concepts named — required, verbatim
- `SOLID Principles` — .claude/skills/quality-grades/references/solid-principles.md:7 — defined here
- `Single Responsibility` — .claude/skills/quality-grades/references/solid-principles.md:15 — defined here
- `SRP` — .claude/skills/quality-grades/references/solid-principles.md:15 — defined here
- `Open-Closed` — .claude/skills/quality-grades/references/solid-principles.md:16 — defined here
- `OCP` — .claude/skills/quality-grades/references/solid-principles.md:16 — defined here
- `Liskov Substitution` — .claude/skills/quality-grades/references/solid-principles.md:17 — defined here
- `LSP` — .claude/skills/quality-grades/references/solid-principles.md:17 — defined here
- `Interface Segregation` — .claude/skills/quality-grades/references/solid-principles.md:18 — defined here
- `ISP` — .claude/skills/quality-grades/references/solid-principles.md:18 — defined here
- `Dependency Inversion` — .claude/skills/quality-grades/references/solid-principles.md:19 — defined here
- `DIP` — .claude/skills/quality-grades/references/solid-principles.md:19 — defined here
- `Violation Signs` — .claude/skills/quality-grades/references/solid-principles.md:21 — defined here
- `SOLID Maps to Code Qualities` — .claude/skills/quality-grades/references/solid-principles.md:33 — defined here
- `Cohesion` — .claude/skills/quality-grades/references/solid-principles.md:37 — used here
- `Encapsulation` — .claude/skills/quality-grades/references/solid-principles.md:38 — used here
- `Low Coupling` — .claude/skills/quality-grades/references/solid-principles.md:38 — used here
- `Testability` — .claude/skills/quality-grades/references/solid-principles.md:39 — used here
- `Grading Application` — .claude/skills/quality-grades/references/solid-principles.md:43 — defined here

## Structure
- # SOLID Principles — .claude/skills/quality-grades/references/solid-principles.md:7
- ## Overview — .claude/skills/quality-grades/references/solid-principles.md:11
- ## Violation Signs — .claude/skills/quality-grades/references/solid-principles.md:21
- ## SOLID Maps to Code Qualities — .claude/skills/quality-grades/references/solid-principles.md:33
- ## Grading Application — .claude/skills/quality-grades/references/solid-principles.md:43

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/quality-grades/references/solid-principles.md:2 · Frontmatter cites source 'wiki/concepts/Design Principles/SOLID Principles.md' which does not exist in the repository.

## Observations
- Directly translates SOLID adherence into numeric score bands: A (90-100: all 5 applied), B (75-89: minor violations), C (60-74: violations in 1-2), D (40-59: significant violations across multiple), F (0-39: largely ignored).
- Connects SOLID design principles with the 5 foundational code qualities (SRP to Cohesion; OCP to Encapsulation/Low Coupling; LSP to Encapsulation/Testability; ISP to Cohesion; DIP to Low Coupling/Encapsulation).
- Details behavioral violation heuristics for code inspection (e.g., classes difficult to name without "And" or "Manager", type checking in client code, NotImplementedException in fat interfaces).

## Context cost
File size: 1,742 bytes (~435 tokens). Pure reference with no sub-dependencies. Total context cost: 1,742 bytes (~435 tokens).
