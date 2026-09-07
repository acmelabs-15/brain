---
package: rjm
name: Design Pattern Adherence
slug: design-pattern-adherence
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Design Pattern Adherence

## Definition — verbatim
> "### 1. Design Pattern Adherence" — .claude/skills/review/references/architect.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 57 | defined here | Focus area evaluating adherence to established design patterns and anti-pattern avoidance. |

## Consumes
Code changes, abstraction designs, and dependency injection implementations.

## Produces
Evaluation of SOLID/DRY/KISS compliance and identification of architectural anti-patterns.

## When applied
Applied during architect PR review to evaluate structural code design.

## Sub-concepts
none

## Part of
architect

## Implementation status
clean

## Design notes
An architect review focus area in rjm checking that code modifications adhere to established software design principles (SOLID, DRY, KISS) and avoid anti-patterns like God objects or circular dependencies.
