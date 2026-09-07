---
package: rjm
name: interleave
slug: interleave
kind: technique
package_phase: rjm:roadmap
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# interleave

## Definition — verbatim
> "**Resolve by interleave** (debt that enables features ships first), not by picking sides" — .claude/agents/roadmap.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 23 | defined here | Resolution strategy for balancing product feature requests against engineering technical debt. |

## Consumes
Competing demands between product feature velocity and engineering technical debt remediation.

## Produces
Sequenced delivery plans where foundational technical debt that unlocks upcoming feature work is prioritized first.

## When applied
Applied during roadmap scheduling when engineering and product priorities clash.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
clean

## Design notes
Interleave breaks the false dichotomy between product features and engineering refactoring. Instead of trading off whole quarters to tech debt or ignoring debt entirely, interleaving sequences technical debt remediation directly ahead of the specific feature epics that depend upon or benefit from it.
