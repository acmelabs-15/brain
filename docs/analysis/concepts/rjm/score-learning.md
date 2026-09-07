---
package: rjm
name: score_learning
slug: score-learning
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

# score_learning

## Definition — verbatim
(used, not defined)

> "def score_learning(learning: str) -> AtomicityScore:" — .claude/skills/retrospective/scripts/score_atomicity.py:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/score_atomicity.py | 182 | defined here | Core scoring function implementing deductions and calculating atomicity metrics for a learning string. |

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
`score_learning` is a Python function identifier implementing the atomicity scoring algorithm rather than a standalone lifecycle concept, classified as `kind: name-only` per D-023.
