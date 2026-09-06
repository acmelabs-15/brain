---
package: rjm
path: .claude/skills/code-qualities-assessment/references/refactoring-patterns.md
type: reference
bytes: 11074
unit: inv-rjm-100
in_scope_via: .claude/skills/code-qualities-assessment/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/refactoring-patterns.md, sha256: d3daeaa70210b68f3628a5fc26b44747c50453a7ac8e915e023306a4d4c9c560}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/code-qualities-assessment/references/refactoring-patterns.md

## Purpose — required, verbatim
> "Remediation patterns for low quality scores." — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:3

## Design intent — required
Provide targeted remediation patterns and before/after code transformations corresponding to each low-scoring quality axis. Couples low cohesion with Extract Class, high coupling with Dependency Injection, poor encapsulation with Facade Pattern, low testability with Dependency Inversion, and high duplication with Extract Function. Additionally formalizes the "Programming by Intention" (sergeant methods directing private methods) pattern for structuring clean orchestrations. Without this reference, code quality assessment reports would identify low scores without providing concrete, idiomatic refactoring recipes to remedy identified design flaws.

## Phase — required
cross-phase

## Inputs — required
- Assessment reports with low scores on one or more quality axes — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:3
- Unrefactored code displaying architectural anti-patterns (mixed responsibilities, hard-coded dependencies, exposed internals, non-deterministic logic, copy-pasted code) — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:12

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc SKILL.md — .claude/skills/code-qualities-assessment/SKILL.md:351
- doc SKILL.md — .claude/skills/code-qualities-assessment/SKILL.md:445
- doc README.md — .claude/skills/code-qualities-assessment/README.md:38

## Concepts named — required, verbatim
- `Low Cohesion → Extract Class` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:5 — defined here
- `Extract Class` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:5 — defined here
- `High Coupling → Dependency Injection` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:75 — defined here
- `Dependency Injection` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:75 — defined here
- `Poor Encapsulation → Facade Pattern` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:131 — defined here
- `Facade Pattern` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:131 — defined here
- `Low Testability → Dependency Inversion` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:183 — defined here
- `Dependency Inversion` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:183 — defined here
- `High Duplication → Extract Function` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:268 — defined here
- `Extract Function` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:268 — defined here
- `Programming by Intention Pattern` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:338 — defined here
- `Sergeant methods` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:340 — defined here
- `private methods` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:340 — defined here
- `Quick Reference` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:402 — defined here

## Structure
- `# Refactoring Patterns for Code Quality` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:1
- `## Low Cohesion → Extract Class` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:5
- `### Before (Score: 4/10)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:9
- `### After (Score: 9/10)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:31
- `## High Coupling → Dependency Injection` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:75
- `### Before (Score: 3/10)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:79
- `### After (Score: 9/10)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:94
- `## Poor Encapsulation → Facade Pattern` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:131
- `### Before (Score: 4/10)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:135
- `### After (Score: 9/10)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:147
- `## Low Testability → Dependency Inversion` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:183
- `### Before (Score: 2/10)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:187
- `### After (Score: 9/10)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:207
- `## High Duplication → Extract Function` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:268
- `### Before (Score: 2/10)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:272
- `### After (Score: 10/10)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:303
- `## Programming by Intention Pattern` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:338
- `### Before (Mixed Abstraction Levels)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:342
- `### After (Sergeant + Privates)` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:363
- `## Quick Reference` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:402
- `## Related Resources` — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:414

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Directly pairs each assessed code quality failure to canonical Fowler refactoring patterns, providing an actionable remediation roadmap.
- Formulates the "Programming by Intention" pattern: separating high-level orchestration in "sergeant methods" from fine-grained details in "private methods".
- Points to external foundational software engineering literature: Martin Fowler's Refactoring Catalog, Robert C. Martin's Clean Code (SOLID), and Eric Evans' Domain-Driven Design (lines 416-418).

## Context cost
11074 bytes (~2768 tokens). Pure standalone reference.
