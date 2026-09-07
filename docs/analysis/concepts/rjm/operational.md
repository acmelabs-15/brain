---
package: rjm
name: operational
slug: operational
kind: technique
package_phase: rjm:Evaluate
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# operational

## Definition — verbatim
> "| **Operational** | 30% | Time to value, Team fit, Integration complexity, Maintenance burden |" — .claude/skills/buy-vs-build-framework/SKILL.md:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 113 | used here | Specified as a primary category in the example criteria JSON configuration with 30.0% weight. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 164 | defined here | Defined in the decision matrix table as a 30% weight dimension assessing delivery velocity and maintenance drag. |

## Consumes
Time-to-value estimates, team technical capabilities, integration architecture requirements, and maintenance overhead projections.

## Produces
Normalized category sub-scores (0-10 scale) contributing to composite decision matrix scoring.

## When applied
Applied during Phase 3 (Multi-Criteria Evaluation) of the buy-vs-build framework.

## Sub-concepts
none

## Part of
decision-matrix-scores, buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
operational represents one of the three foundational evaluation dimensions in the buy-vs-build framework. It evaluates the pragmatic execution friction of each option—quantifying delivery timeline, team skill fit, systems integration complexity, and long-term maintenance overhead—preventing organizations from adopting theoretically superior solutions that fail due to operational friction.
