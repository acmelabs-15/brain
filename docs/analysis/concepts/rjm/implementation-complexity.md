---
package: rjm
name: Implementation Complexity
slug: implementation-complexity
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Implementation Complexity

## Definition — verbatim
> "| **Implementation Complexity** | Known pattern or novel work? Dependencies? Timeline estimate. |" — .claude/agents/issue-feature-review.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 41 | defines | Evaluation table row defining implementation complexity assessment (known pattern vs novel work, dependencies, timeline). |
| templates/agents/issue-feature-review.shared.md | 53 | defines | Shared template dimension for evaluating implementation complexity in feature reviews. |

## Consumes
Feature specifications, codebase architectural patterns, and external library dependencies.

## Produces
Qualitative complexity rating, dependency impact analysis, and timeline estimate.

## When applied
Evaluated during issue feature triage and backlog planning.

## Sub-concepts
none

## Part of
issue-feature-review-agent

## Implementation status
clean

## Design notes
One of the core evaluation axes in feature review. It measures the technical friction of shipping a requested feature—specifically whether it follows established patterns or introduces novel dependencies—ensuring delivery costs are understood before making commitments.
