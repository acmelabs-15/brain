---
package: rjm
name: AtomicityScore
slug: atomicityscore
kind: name-only
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/scripts/score_atomicity.py, sha256: 57eca0bd3d23fbb59f688775840896cb580895c1db94cb591259860d7fbbb43d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AtomicityScore

## Definition — verbatim
(used, not defined)

> "class AtomicityScore:" — .claude/skills/retrospective/scripts/score_atomicity.py:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/score_atomicity.py | 97 | defined here | Dataclass definition encapsulating atomicity evaluation results, score breakdown, and quality band. |

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
clean

## Design notes
`AtomicityScore` is a Python dataclass identifier representing structured evaluation score results rather than a lifecycle concept, classified as `kind: name-only` per D-023.
