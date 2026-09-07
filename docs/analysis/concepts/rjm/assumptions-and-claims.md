---
package: rjm
name: Assumptions and Claims
slug: assumptions-and-claims
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Assumptions and Claims

## Definition — verbatim
> "### 1. Assumptions and Claims" — .claude/skills/review/references/decision-rigor.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/decision-rigor.md | 59 | defined here | Checklist section in decision rigor review evaluating whether assumptions are explicit and claims verifiable. |

## Consumes
Pull request descriptions, design documents, or Architecture Decision Records asserting benefits or making factual claims.

## Produces
Review findings identifying unstated load-bearing assumptions or unevidenced benefit claims.

## When applied
During Stage-2 decision rigor review when evaluating the rationale behind technical choices and proposals.

## Sub-concepts
none

## Part of
decision-rigor

## Implementation status
clean

## Design notes
A review checklist focus area in rjm's decision rigor review requiring that all load-bearing assumptions are made explicit and that every claim of benefit (performance, reliability, simplicity) is grounded in verifiable evidence rather than hunches.
