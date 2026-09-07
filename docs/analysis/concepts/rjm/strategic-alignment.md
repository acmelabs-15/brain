---
package: rjm
name: Strategic Alignment
slug: strategic-alignment
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-020-feature-request-review-step.md, sha256: 935688cbbdc1cfa16ddef11f8e27c832b51e558ae3fd9cd23a5f80b260c663c6}
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Strategic Alignment

## Definition — verbatim
> "| **Strategic Alignment** | Does this serve stated product goals? Or sideways drift? |" — .claude/agents/issue-feature-review.md:43

> "You are reviewing a pull request for strategic alignment, feature scope, and product direction." — .claude/skills/review/references/roadmap.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-020-feature-request-review-step.md | 427 | defined here | Evaluation framework criterion checking whether proposed features align with product goals. |
| .claude/agents/issue-feature-review.md | 43 | defined here | Defined in evaluation criteria table assessing adherence to stated product goals versus sideways drift. |
| .claude/skills/review/references/roadmap.md | 10 | defined here | Core review focus checking PRs for strategic alignment, feature scope, and product direction. |
| .claude/skills/review/references/roadmap.md | 65 | defined here | Section heading for strategic alignment analysis focus area. |
| templates/agents/issue-feature-review.shared.md | 55 | defined here | Defined in shared agent evaluation table evaluating alignment with project vision. |

## Consumes
Product roadmap documents, architectural decision records (ADRs), stated release goals, and proposed PR diffs or feature requests.

## Produces
Strategic alignment assessment and confidence score, surfacing explicit conflicts or confirming alignment with stated direction.

## When applied
Applied during inbound feature request triage and during pull request roadmap review (`/review` roadmap axis).

## Sub-concepts
none

## Part of
feature-request-review, roadmap

## Implementation status
defects: internal-contradiction (.claude/skills/review/references/roadmap.md schema examples drift from roadmap categories); missing-path, doc-drift (ADR-020)

## Design notes
Evaluation criterion ensuring that new features and code changes advance core product objectives and adhere to architectural decisions, preventing off-strategy distraction and scope creep.
