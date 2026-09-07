---
package: rjm
name: Canonical sync
slug: canonical-sync
kind: pattern
package_phase: rjm:review
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

# Canonical sync

## Definition — verbatim
> "Evaluation framework mirrors `.github/prompts/issue-feature-review.md` for on-demand review. Keep both in sync when changing review logic." — .claude/agents/issue-feature-review.md:163

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 163 | defined here | Note requiring evaluation framework parity with `.github/prompts/issue-feature-review.md` for on-demand reviews. |
| templates/agents/issue-feature-review.shared.md | 175 | defined here | Note requiring evaluation framework parity with `.github/prompts/issue-feature-review.md` across shared platforms. |

## Consumes
Review logic modifications in `.claude/agents/issue-feature-review.md` or `.github/prompts/issue-feature-review.md`.

## Produces
Synchronized review criteria, evaluation schemas, and recommendations across prompt and agent interfaces.

## When applied
When modifying the issue feature review evaluation logic, ensuring changes are mirrored across on-demand and CI/CD agent configurations.

## Sub-concepts
none

## Part of
issue-feature-review

## Implementation status
clean

## Design notes
Enforces synchronization discipline between interactive Claude agent configurations and automated GitHub prompt runners. By designating `.github/prompts/issue-feature-review.md` and `.claude/agents/issue-feature-review.md` as dual surfaces requiring identical evaluation logic, rjm prevents drift between manual issue reviews and automated CI/CD triage workflows.
