---
package: rjm
name: Formal Methods
slug: formal-methods
kind: reference
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Formal Methods

## Definition — verbatim
(used, not defined)

> "| **Formal Methods (Z, Alloy)** | Mathematically precise | Steep learning curve; overkill for this project | Agent developers can't reasonably write/review formal specs |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 75 | used here | Evaluated as an alternative in ADR-032 and rejected due to steep learning curve and lack of feasibility for agent review. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented

## Design notes
Mathematical specification frameworks (such as Z or Alloy) analyzed in ADR-032 as rigorous alternatives to natural language requirements, but rejected as impractical for autonomous agent synthesis and everyday software engineering review.
