---
package: rjm
name: Confidence
slug: confidence
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: .claude/skills/analysis-provenance/scripts/check_provenance.py, sha256: e9ba09d25d1343e57de5e42155192494ac325c4738171459485d9ab85d9e63ce}
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Confidence

## Definition — verbatim
> "Confidence: 100% (certain), 80% (high), 50% (medium), 0% (speculation)" — .claude/agents/roadmap.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 37 | defined here | Defined as a certainty multiplier percentage in RICE feature prioritization. |
| .claude/skills/analysis-provenance/scripts/check_provenance.py | 32 | defined here | Defined as an Enum representing confidence levels in provenance determination. |
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 21 | defined here | Defined as a confidence field in DecisionResult indicating scoring gap certainty. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 32 | defined here | Defined as an Enum representing classification confidence levels. |

## Consumes
Epistemic evidence, evidence gaps, score separations, or classification heuristics.

## Produces
A confidence rating or percentage discounting unverified assumptions.

## When applied
Applied when scoring roadmap epics, classifying problem domains, scoring buy-vs-build trade-offs, and evaluating analysis provenance.

## Sub-concepts
none

## Part of
- rice-scoring
- analysis-provenance
- buy-vs-build-framework
- cynefin-classifier

## Implementation status
defects: exit-code-mismatch, script-bug, doc-drift, unimplemented-feature

## Design notes
Confidence measures certainty and epistemic grounding across analytical tools in rjm. Whether attenuating feature priority in RICE scoring or qualifying automated classifications (Cynefin, provenance, buy-vs-build), Confidence prevents false precision and ensures automated agents explicitly declare their degree of certainty before triggering downstream actions.
