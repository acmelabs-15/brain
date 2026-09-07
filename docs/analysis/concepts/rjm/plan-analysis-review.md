---
package: rjm
name: Plan/Analysis Review
slug: plan-analysis-review
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Plan/Analysis Review

## Definition — verbatim
(used, not defined)

> "- [ ] Challenge technical choices" — .claude/agents/architect.md:517

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 514 | defined here | Design governance checklist challenging technical choices and verifying design principles during the planning phase. |
| templates/agents/architect.shared.md | 683 | defined here | Design governance checklist challenging technical choices and verifying design principles during the planning phase. |

## Consumes
Draft implementation plans, technical specifications, and proposed integration approaches.

## Produces
Validation of design principles adherence and blocking of SOLID, DRY, or separation of concerns violations.

## When applied
Executed during the plan/analysis phase after an implementation plan is drafted but before coding begins.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
Plan/Analysis Review provides an intermediate checkpoint where the architect critically examines proposed implementation plans. It scrutinizes technology selections, verifies adherence to core design principles (SOLID, DRY, encapsulation), blocks architectural violations, and validates integration strategies before any code is written.
