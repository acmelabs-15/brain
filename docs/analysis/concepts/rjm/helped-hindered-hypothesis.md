---
package: rjm
name: Helped, Hindered, Hypothesis
slug: helped-hindered-hypothesis
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Helped, Hindered, Hypothesis

## Definition — verbatim
> "Meta-learning about the retrospective process." — .claude/skills/retrospective/references/frameworks.md:463

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 119 | defined here | Closing activity of Phase 6 generating meta-learning hypotheses. |
| .claude/skills/retrospective/references/frameworks.md | 461 | defined here | Activity specification detailing Helped, Hindered, and Hypothesis prompts and format. |
| .claude/skills/retrospective/references/learning-template.md | 158 | used here | Template section recording what helped, what hindered, and resulting hypothesis. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 355 | defined here | Markdown output generator embedding Helped, Hindered, Hypothesis section. |
| .claude/skills/retrospective/SKILL.md | 154 | used here | Mandated in skill instructions as one of three required closing activities. |
| templates/agents/retrospective.shared.md | 1311 | defined here | Shared agent template defining the Helped, Hindered, Hypothesis structure. |

## Consumes
Retrospective process observations, identified friction points, and facilitators' notes.

## Produces
Testable hypotheses (e.g., "If we [action], then [outcome]") aimed at experimenting with future retrospective adaptations.

## When applied
Executed at the very conclusion of Phase 6 to formalize experimental process improvements.

## Sub-concepts
none

## Part of
close-the-retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Helped, Hindered, Hypothesis converts process feedback into testable scientific hypotheses rather than static complaints. By pairing observations of what facilitated and hindered the session with a formal hypothesis, it drives iterative experimentation in the team's reflective practices.
