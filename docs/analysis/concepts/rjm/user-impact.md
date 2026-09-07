---
package: rjm
name: User Impact
slug: user-impact
kind: technique
package_phase: rjm:coordinator
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-020-feature-request-review-step.md, sha256: 935688cbbdc1cfa16ddef11f8e27c832b51e558ae3fd9cd23a5f80b260c663c6}
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# User Impact

## Definition — verbatim
> "- Evaluates: User Impact, Implementation/Maintenance, Alignment, Trade-offs" — .agents/architecture/ADR-020-feature-request-review-step.md:34

> "| **User Impact** | Who benefits? How many? Revenue, retention, or experience impact? |" — .claude/agents/issue-feature-review.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-020-feature-request-review-step.md | 34 | defined here | Listed as an essential evaluation dimension for feature request triage. |
| .claude/agents/issue-feature-review.md | 40 | defined here | Defined in evaluation criteria table checking who benefits, volume of users, and revenue or retention impact. |
| templates/agents/issue-feature-review.shared.md | 52 | defined here | Defined in shared agent evaluation criteria table checking beneficiaries and user value. |

## Consumes
User feature request descriptions, customer evidence, upvote counts, and bug/issue reports.

## Produces
Impact assessment with confidence rating (High / Medium / Low / Unknown) characterizing user value and affected population size.

## When applied
Evaluated during feature request triage by the issue review coordinator agent.

## Sub-concepts
none

## Part of
feature-request-review

## Implementation status
defects: missing-path, doc-drift (.agents/architecture/ADR-020-feature-request-review-step.md cites missing workflow .github/workflows/ai-issue-triage.yml)

## Design notes
Evaluation criterion measuring the breadth, depth, and business significance of benefits delivered to users, ensuring engineering effort is focused on high-leverage user improvements rather than niche or low-impact requests.
