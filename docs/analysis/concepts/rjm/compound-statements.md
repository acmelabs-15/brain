---
package: rjm
name: Compound statements
slug: compound-statements
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

# Compound statements

## Definition — verbatim
> "| Compound statements ("and", "also") | -15% each |" — .claude/skills/retrospective/scripts/score_atomicity.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/score_atomicity.py | 14 | used here | Deduction factor in the atomicity rubric penalizing statements containing coordinating conjunctions by 15% each. |

## Consumes
Candidate retrospective learning statements.

## Produces
A 15% point penalty applied per detected compound conjunction marker ("and", "also").

## When applied
Applied during Phase 4 learning extraction atomicity evaluation.

## Sub-concepts
none

## Part of
atomicity-scoring

## Implementation status
clean

## Design notes
Compound statements is an anti-pattern in learning extraction where multiple thoughts are linked via conjunctions rather than distilled into single atomic insights. The atomicity scorer penalizes this pattern to ensure learnings remain distinct, modular, and separately actionable when retrieved from memory.
