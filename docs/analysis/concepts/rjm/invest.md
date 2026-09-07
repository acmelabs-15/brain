---
package: rjm
name: INVEST
slug: invest
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/explainer.md, sha256: ce937234dc5604132840cbd7837d41f214c02ab70f6b0af4dd56c6dcb5d65351}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: templates/agents/explainer.shared.md, sha256: 8e17580db6644e5a5966cd2256957a569f0415a5bcc5c536d8900746276f3916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# INVEST

## Definition — verbatim
> "**Validate every user story against INVEST**:" — .claude/agents/explainer.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/explainer.md | 46 | used here | Validation criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable) applied to all user stories in PRDs. |
| scripts/eval/eval-agents.py | 265 | used here | Evaluation criteria requiring user stories with INVEST criteria in generated PRDs. |
| templates/agents/explainer.shared.md | 52 | used here | Validation criteria applied to all user stories in PRDs. |

## Consumes
Draft user stories within PRDs or requirement specifications.

## Produces
Pass/fail validation verdict per story, rejecting stories failing any criterion.

## When applied
Applied during PRD creation when decomposing requirements into user stories.

## Sub-concepts
none

## Part of
explainer

## Implementation status
defects: missing-path

## Design notes
INVEST enforces rigorous scoping and testability on agile user stories. In rjm, requiring stories to be Independent, Negotiable, Valuable, Estimable, Small, and Testable prevents vague or monolithic tasks from entering the implementation pipeline, directly improving planning accuracy and downstream testability.
