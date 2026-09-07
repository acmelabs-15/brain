---
package: rjm
name: PERSISTENCE_THRESHOLD
slug: persistence-threshold
kind: name-only
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
  - {path: .claude/skills/retrospective/scripts/score_atomicity.py, sha256: 57eca0bd3d23fbb59f688775840896cb580895c1db94cb591259860d7fbbb43d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PERSISTENCE_THRESHOLD

## Definition — verbatim
(used, not defined)

> "PERSISTENCE_THRESHOLD = 70" — .claude/skills/retrospective/scripts/score_atomicity.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/run_retrospective.py | 128 | used here | Imported from scoring module to determine whether extracted learnings qualify for persistence to memory. |
| .claude/skills/retrospective/scripts/score_atomicity.py | 62 | defined here | Constant defined as 70 setting the minimum atomicity score required for persisting learnings to memory. |

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
`PERSISTENCE_THRESHOLD` is a constant identifier (70) setting the minimum atomicity percentage required to persist learnings into long-term memory rather than a lifecycle concept, classified as `kind: name-only` per D-023.
