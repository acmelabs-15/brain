---
package: rjm
name: Anti-Patterns to Reject
slug: anti-patterns-to-reject
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/milestone-planner.md, sha256: 3b318f4cec16f9f23b32fa66f9fe490789eaece08c39e1e5b9a6ae1c37af762d}
  - {path: .claude/agents/skillbook.md, sha256: 91f950500a94ec961cadfc48125029f649b3fe031969b91c398d7b8da4747398}
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
  - {path: templates/agents/skillbook.shared.md, sha256: 75728e08c68359b9eade70c8c9358d8de6dca100cfdae2b34906567f5edf188f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Anti-Patterns to Reject

## Definition — verbatim
(used, not defined)

> "## Anti-Patterns to Reject" — .claude/agents/milestone-planner.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 147 | defined here | Section heading cataloging planning anti-patterns like phase-based milestones and vague scope. |
| .claude/agents/skillbook.md | 155 | defined here | Section heading listing skill authoring and maintenance anti-patterns. |
| templates/agents/milestone-planner.shared.md | 150 | defined here | Shared template section heading rejecting invalid milestone structures. |
| templates/agents/skillbook.shared.md | 158 | defined here | Shared template section heading enumerating anti-patterns to reject in skill updates. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A recurring markdown section heading used across agent specifications (such as milestone-planner and skillbook) to enumerate failure modes and invalid patterns that the agent must proactively reject; it is an organizational document label rather than an executable lifecycle concept.
