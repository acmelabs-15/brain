---
package: rjm
name: complementary altitude
slug: complementary-altitude
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# complementary altitude

## Definition — verbatim
> "and testing is **complementary altitude**, not contradiction. One is" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 110 | defined here | Concept explaining that rules operating at different levels of abstraction (mechanical vs architectural) do not conflict. |

## Consumes
Pairs of seemingly overlapping rules operating at different abstraction levels.

## Produces
Classification of rule pairs as non-conflicting due to operational altitude separation.

## When applied
Applied during conflict audits when evaluating whether rules with similar domains constitute genuine contradictions.

## Sub-concepts
none

## Part of
conflict-audit, rule-audit-procedure

## Implementation status
clean

## Design notes
An architectural design pattern in prompt conflict audits recognizing that two rules addressing the same subject area (such as error handling or testing) do not contradict each other if one operates mechanically at the syntax primitive level while the other operates conceptually at the architectural level.
