---
package: rjm
name: Missing metrics/evidence
slug: missing-metrics-evidence
kind: pattern
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

# Missing metrics/evidence

## Definition — verbatim
> "| Missing metrics/evidence | -25% |" — .claude/skills/retrospective/scripts/score_atomicity.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/score_atomicity.py | 17 | used here | Deduction factor penalizing statements that lack quantitative metrics or execution evidence by 25%. |

## Consumes
Candidate retrospective learning statements.

## Produces
A 25% point deduction when a learning statement fails to cite numeric figures or verifiable evidence.

## When applied
Applied during Phase 4 learning extraction atomicity evaluation.

## Sub-concepts
none

## Part of
atomicity-scoring

## Implementation status
clean

## Design notes
Missing metrics/evidence is an anti-pattern in retrospective learning extraction where statements make qualitative claims without citing numeric metrics or verifiable execution details. Applying this penalty prevents unsubstantiated, untestable assertions from entering institutional memory.
