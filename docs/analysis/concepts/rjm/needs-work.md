---
package: rjm
name: Needs Work
slug: needs-work
kind: gate
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

# Needs Work

## Definition — verbatim
> "| 40-69% | Needs Work | Refine before adding |" — .claude/skills/retrospective/scripts/score_atomicity.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/score_atomicity.py | 26 | used here | Gating quality band requiring statements scoring 40-69% to undergo mandatory refinement before memory addition. |

## Consumes
Candidate retrospective learning statement achieving an atomicity score between 40% and 69%.

## Produces
A blocking evaluation verdict preventing persistence until the statement is refined to eliminate compound or vague elements.

## When applied
Applied during Phase 4 learning extraction when an atomicity evaluation yields a score between 40% and 69%.

## Sub-concepts
none

## Part of
quality-thresholds

## Implementation status
clean

## Design notes
Needs Work is a critical gating quality tier in retrospective atomicity scoring (40–69%). It prevents ambiguous, compound, or non-actionable learning candidates from contaminating the knowledge base, requiring agents or operators to rewrite statements to meet the persistence threshold.
