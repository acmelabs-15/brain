---
package: rjm
name: Handoff
slug: handoff
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/explainer.md, sha256: ce937234dc5604132840cbd7837d41f214c02ab70f6b0af4dd56c6dcb5d65351}
  - {path: .claude/agents/skillbook.md, sha256: 91f950500a94ec961cadfc48125029f649b3fe031969b91c398d7b8da4747398}
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
  - {path: templates/agents/explainer.shared.md, sha256: 8e17580db6644e5a5966cd2256957a569f0415a5bcc5c536d8900746276f3916}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
  - {path: templates/agents/skillbook.shared.md, sha256: 75728e08c68359b9eade70c8c9358d8de6dca100cfdae2b34906567f5edf188f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Handoff

## Definition — verbatim
> "Explicit transfer of context and control between agents with clear accountability" — README.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/explainer.md | 128 | defined here | Defines completion and delegation handoff protocol returning to the orchestrator. |
| .claude/agents/skillbook.md | 166 | defined here | Defines skillbook return handoff protocol to the orchestrator. |
| .claude/skills/requirements-interview/SKILL.md | 98 | defined here | Specifies downstream consumption and handoff of structured PRD artifacts to the spec-generator skill. |
| README.md | 144 | defined here | Glossary entry defining handoff as explicit transfer of context and control between agents with clear accountability. |
| templates/agents/critic.shared.md | 227 | defined here | Shared template specifying critic return protocol to orchestrator. |
| templates/agents/explainer.shared.md | 134 | defined here | Shared template specifying explainer completion handoff to orchestrator. |
| templates/agents/implementer.shared.md | 867 | defined here | Shared template defining implementer completion status and work handoff to orchestrator. |
| templates/agents/issue-feature-review.shared.md | 155 | defined here | Shared template defining issue review return protocol to orchestrator. |
| templates/agents/milestone-planner.shared.md | 173 | defined here | Shared template defining milestone planner return handoff to orchestrator. |
| templates/agents/skillbook.shared.md | 169 | defined here | Shared template specifying skillbook return protocol to orchestrator. |

## Consumes
Completed work artifacts, execution telemetry, remaining blockers, verification outputs.

## Produces
Structured return payload or transition artifact transferring control to the orchestrator or downstream agent.

## When applied
Invoked when a delegated specialist agent finishes its assigned task or encounters an insurmountable blocker.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift

## Design notes
Handoff is the fundamental coordination mechanism in rjm's multi-agent architecture. By formalizing explicit transfer of context, deliverables, and completion status between subagents and the orchestrator, it enforces clear accountability, prevents silent failures, and eliminates conversational drift.
