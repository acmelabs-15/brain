---
package: rjm
name: Trade-offs
slug: trade-offs
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-020-feature-request-review-step.md, sha256: 935688cbbdc1cfa16ddef11f8e27c832b51e558ae3fd9cd23a5f80b260c663c6}
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Trade-offs

## Definition — verbatim
> "| **Trade-offs** | What does this block or deprioritize? Opportunity cost. |" — .claude/agents/issue-feature-review.md:44

> "### Trade-offs" — .agents/architecture/ADR-TEMPLATE.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-020-feature-request-review-step.md | 34 | defined here | Listed as an essential evaluation dimension for feature request triage. |
| .agents/architecture/ADR-TEMPLATE.md | 85 | defined here | Required subsection in canonical ADR template exploring architectural trade-offs. |
| .claude/agents/issue-feature-review.md | 44 | defined here | Defined in evaluation criteria table assessing opportunity cost and blocked work. |
| .claude/skills/adr-generator/references/adr-template.md | 95 | defined here | Standard ADR reference subsection for documenting design compromises. |
| templates/agents/issue-feature-review.shared.md | 56 | defined here | Defined in shared agent evaluation table analyzing opportunity costs and deprioritized work. |

## Consumes
Proposed architecture designs, competing technical alternatives, resource constraints, and backlog priorities.

## Produces
Explicit documentation of opportunity costs, compromises, and deprioritized capabilities.

## When applied
Applied during architectural decision drafting (ADR authoring) and during feature request triage evaluation.

## Sub-concepts
none

## Part of
feature-request-review, adr-template

## Implementation status
defects: missing-path (.agents/architecture/ADR-TEMPLATE.md:107 cites retired SESSION-PROTOCOL.md; ADR-020 cites missing workflow)

## Design notes
Analytical technique for making implicit sacrifices explicit, requiring authors to articulate what alternative choices or backlog items are sacrificed when adopting a given decision or feature.
