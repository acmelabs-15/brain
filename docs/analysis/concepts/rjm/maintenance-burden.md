---
package: rjm
name: Maintenance Burden
slug: maintenance-burden
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

# Maintenance Burden

## Definition — verbatim
> "| **Maintenance Burden** | Long-term cost after shipping? Test surface area? |" — .claude/agents/issue-feature-review.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 42 | defines | Evaluation table row defining post-shipping cost and test surface area expansion. |
| templates/agents/issue-feature-review.shared.md | 54 | defines | Shared template dimension for evaluating long-term maintenance burden. |

## Consumes
Feature architecture, test suite scope, API surface expansion, and dependency lifecycles.

## Produces
Assessment of long-term maintenance overhead, ongoing testing surface, and regression risks.

## When applied
Evaluated during feature request triage and architectural evaluation.

## Sub-concepts
none

## Part of
issue-feature-review-agent

## Implementation status
clean

## Design notes
Evaluates the total cost of ownership beyond initial code authoring. A feature that is easy to write may double the test surface area or lock the system into deprecated dependencies; assessing maintenance burden prevents shipping features that create ongoing maintenance drag.
