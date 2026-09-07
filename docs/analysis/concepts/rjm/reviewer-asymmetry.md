---
package: rjm
name: Reviewer Asymmetry
slug: reviewer-asymmetry
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reviewer Asymmetry

## Definition — verbatim
> "Same-context review produces confirmation bias: a reviewer who shares the implementer's working state tends to validate the framing rather than challenge it." — .claude/agents/critic.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 16 | defines | Section heading and foundational doctrine establishing fresh-context adversarial review. |
| .claude/agents/implementer.md | 18 | defines | Section heading mandating that implementers write code that survives cold, fresh-context review. |
| .claude/agents/qa.md | 15 | defines | Section heading defining QA's role as a fresh-context adversarial reviewer of implementer code. |
| scripts/eval/eval-reviewer-asymmetry.py | 2 | defines | Docstring of the evaluator script measuring behavioral adherence to reviewer-asymmetry framing. |
| templates/agents/critic.shared.md | 20 | defines | Shared template section heading establishing adversarial review asymmetry. |
| templates/agents/implementer.shared.md | 27 | defines | Shared template section heading instructing implementers to anticipate external adversarial review. |
| templates/agents/qa.shared.md | 18 | defines | Shared template section heading establishing QA's adversarial review stance. |

## Consumes
Plans, specifications, and code diffs produced by implementers or planners.

## Produces
Rigorous, unbiased critiques and defect discovery free from authorial confirmation bias.

## When applied
Applied whenever reviews, critiques, or evaluations are performed across agent boundaries.

## Sub-concepts
adversarial-reviewer

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction, doc-drift

## Design notes
An architectural pattern enforcing cognitive separation between authoring and review, using isolated context and skeptical perspective to expose defects that same-context reviewers overlook.
