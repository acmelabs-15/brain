---
package: rjm
name: Low Cohesion → Extract Class
slug: low-cohesion-extract-class
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/refactoring-patterns.md, sha256: d3daeaa70210b68f3628a5fc26b44747c50453a7ac8e915e023306a4d4c9c560}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Low Cohesion → Extract Class

## Definition — verbatim
> "## Low Cohesion → Extract Class" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 5 | defined here | Remediation recipe splitting classes with unrelated responsibilities to improve cohesion from 4/10 to 9/10. |

## Consumes
Monolithic classes combining disparate responsibilities (e.g. database persistence, email dispatch, and activity logging).

## Produces
Distinct single-responsibility classes (e.g., UserRepository, EmailService, ActivityLogger) orchestrated by a focused service.

## When applied
Applied when code quality assessment identifies low cohesion (score ≤ 4/10) due to mixed responsibilities in a single class.

## Sub-concepts
- extract-class

## Part of
refactoring-patterns

## Implementation status
clean

## Design notes
Low Cohesion → Extract Class pairs low cohesion diagnostics directly with Martin Fowler's Extract Class refactoring. By decomposing a bloated manager class into single-purpose components and wiring them via dependency injection, it simultaneously boosts cohesion (4 → 9), testability (4 → 9), and coupling (5 → 8).
