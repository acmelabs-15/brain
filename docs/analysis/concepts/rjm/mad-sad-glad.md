---
package: rjm
name: Mad Sad Glad
slug: mad-sad-glad
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Mad Sad Glad

## Definition — verbatim
> "Adapted from Mad Sad Glad. Classify execution outcomes by emotional valence." — .claude/agents/retrospective.md:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 224 | used here | Outcome classification technique categorizing execution events into Mad, Sad, and Glad buckets. |
| .claude/skills/retrospective/SKILL.md | 88 | used here | Mandated step in retrospective execution workflow for outcome classification. |
| templates/agents/retrospective.shared.md | 220 | used here | Shared agent prompt specifying the Mad Sad Glad emotional valence table and agent semantics. |

## Consumes
Session execution traces, agent interaction logs, and tool execution history.

## Produces
Grouped execution events classified by impact (Mad: blockers/broken tooling; Sad: missed opportunities/drift; Glad: successes/accelerators).

## When applied
Applied during Phase 1 (Gather Data) during outcome classification.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Adapted from agile team retrospectives for multi-agent systems, Mad Sad Glad translates qualitative execution sentiment into structured diagnostic data. "Mad" captures acute operational blockers, "Sad" highlights friction and unmet expectations, and "Glad" identifies reliable accelerators to retain.
