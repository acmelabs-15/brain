---
package: rjm
name: No actionable guidance
slug: no-actionable-guidance
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

# No actionable guidance

## Definition — verbatim
> "| No actionable guidance | -30% |" — .claude/skills/retrospective/scripts/score_atomicity.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/score_atomicity.py | 18 | used here | Deduction factor penalizing statements that fail to provide specific, reproducible actions by 30%. |

## Consumes
Candidate retrospective learning statements.

## Produces
A 30% point deduction for passive, overly brief, or non-prescriptive statements.

## When applied
Applied during Phase 4 learning extraction atomicity evaluation.

## Sub-concepts
none

## Part of
atomicity-scoring

## Implementation status
clean

## Design notes
No actionable guidance is an anti-pattern penalizing retrospective statements that describe problems or observational states without prescribing concrete, reproducible actions. This control ensures that extracted learnings act as operational directives rather than passive reflections.
