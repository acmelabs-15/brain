---
package: rjm
name: Core Behavior
slug: core-behavior
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
  - {path: .claude/agents/milestone-planner.md, sha256: 3b318f4cec16f9f23b32fa66f9fe490789eaece08c39e1e5b9a6ae1c37af762d}
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: .claude/agents/skillbook.md, sha256: 91f950500a94ec961cadfc48125029f649b3fe031969b91c398d7b8da4747398}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
  - {path: templates/agents/skillbook.shared.md, sha256: 75728e08c68359b9eade70c8c9358d8de6dca100cfdae2b34906567f5edf188f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Core Behavior

## Definition — verbatim
(used, not defined)

> "## Core Behavior" — .claude/agents/implementer.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 117 | defined here | Heading defining baseline operational posture and quality standards for implementer persona. |
| .claude/agents/issue-feature-review.md | 14 | defined here | Heading defining triage and review responsibilities for issue feature review agent. |
| .claude/agents/milestone-planner.md | 14 | defined here | Heading defining milestone sequencing and planning norms for milestone planner persona. |
| .claude/agents/roadmap.md | 14 | defined here | Heading establishing tracking and strategic horizon practices for roadmap persona. |
| .claude/agents/skillbook.md | 14 | defined here | Heading establishing skill curation and update protocols for skillbook persona. |
| templates/agents/critic.shared.md | 90 | defined here | Heading defining adversarial critique and rigor standards in shared critic template. |
| templates/agents/implementer.shared.md | 125 | defined here | Heading defining implementer execution behaviors in shared implementer template. |
| templates/agents/issue-feature-review.shared.md | 26 | defined here | Heading defining issue triage behaviors in shared review template. |
| templates/agents/milestone-planner.shared.md | 17 | defined here | Heading defining milestone planning behaviors in shared milestone planner template. |
| templates/agents/roadmap.shared.md | 20 | defined here | Heading defining roadmap tracking behaviors in shared roadmap template. |
| templates/agents/skillbook.shared.md | 17 | defined here | Heading defining skillbook maintenance behaviors in shared skillbook template. |

## Consumes
none

## Produces
none

## When applied
Structural section heading applied across agent persona prompt specifications.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Core Behavior is a standardized structural markdown heading used in agent persona definitions to outline operational heuristics and execution rules, rather than an independent lifecycle artifact or technique.
