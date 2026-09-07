---
package: rjm
name: Close the Retrospective
slug: close-the-retrospective
kind: phase
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Close the Retrospective

## Definition — verbatim
> "Phase 6: Close the Retrospective" — .claude/agents/retrospective.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 115 | defined here | Sixth and final phase of the retrospective workflow dedicated to evaluating the retrospective process itself and performing delta triage. |

## Consumes
Completed retrospective analysis from Phase 5 (Learnings & Memory Extraction), including identified root causes and proposed improvements.

## Produces
Retrospective self-assessment (+/Delta, ROTI ratings, Helped/Hindered reflections), prioritized delta triage items, and GitHub issue action items.

## When applied
Executed as the final step of every retrospective session after root causes, actions, and persistent learnings are established.

## Sub-concepts
delta, delta-triage, roti, helped-hindered-hypothesis

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Close the Retrospective establishes a meta-evaluation feedback loop at the end of every retrospective session. By treating the retrospective itself as an operational process subject to inspection and adaptation, it prevents retrospective drift and ensures that the time invested by agents in self-reflection continuously increases in value rather than degrading into ritualistic overhead.
