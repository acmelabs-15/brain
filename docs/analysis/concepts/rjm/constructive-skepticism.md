---
package: rjm
name: Constructive Skepticism
slug: constructive-skepticism
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

# Constructive Skepticism

## Definition — verbatim
> "Ask these questions silently for every request:" — .claude/agents/issue-feature-review.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 48 | defines | Section detailing six internal questions (why now, who asked, what problem, smallest version, doing nothing, existing tool) to sharpen triage recommendations. |
| templates/agents/issue-feature-review.shared.md | 60 | defines | Shared template specification for constructive skepticism questioning. |

## Consumes
Raw feature requests, user problem statements, and proposed requirements.

## Produces
Calibrated evaluation recommendations free of uncritical optimism.

## When applied
Applied silently during the intake review of every feature request.

## Sub-concepts
none

## Part of
issue-feature-review-agent

## Implementation status
clean

## Design notes
The guiding philosophical attitude of issue feature review. Rather than being obstructionist, constructive skepticism asks whether a feature can be solved with existing tools, whether doing nothing is acceptable, or whether a smaller version can be tested first, protecting developers from manufactured work.
