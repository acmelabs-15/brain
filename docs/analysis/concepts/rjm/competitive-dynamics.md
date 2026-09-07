---
package: rjm
name: competitive dynamics
slug: competitive-dynamics
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py, sha256: f8f1d7b0e29c9d8ce64daf97e8f81f34057384309203ba9ef1eecbb73eda1afb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# competitive dynamics

## Definition — verbatim
> "Competitive dynamics shifted (urgency increased)" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 116 | used here | Reassessment trigger rule evaluating heightened market urgency or aggressive competitor movements. |

## Consumes
Competitive intelligence data, rival product launches, and market window-of-opportunity changes.

## Produces
Sourcing reconsideration trigger recommending faster time-to-market paths (such as buying or partnering) when delivery urgency surges.

## When applied
Checked when market competition intensifies, compressing acceptable delivery timeframes.

## Sub-concepts
none

## Part of
reassessment-plan

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
A market-sensing trigger gate in rjm's reassessment framework that flags when rival actions or shifting market dynamics compress delivery timelines, prompting re-evaluation of lengthy in-house development projects in favor of rapid commercial acquisition.
