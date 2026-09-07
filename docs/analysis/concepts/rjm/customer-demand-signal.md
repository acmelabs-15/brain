---
package: rjm
name: customer demand signal
slug: customer-demand-signal
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

# customer demand signal

## Definition — verbatim
> "Customer demand signal changed" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 125 | used here | Reassessment trigger rule monitoring significant changes in customer requirements, volume, or feedback. |

## Consumes
Customer usage telemetry, customer advisory board feedback, churn analysis, and sales loss feedback.

## Produces
Sourcing re-evaluation trigger indicating that customer expectations or scale demands diverge from initial assumptions.

## When applied
Checked during product reviews when customer feature demand or volume scaling deviates from early models.

## Sub-concepts
none

## Part of
reassessment-plan

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
A customer-centric feedback gate in rjm's reassessment framework that triggers when real customer adoption, usage intensity, or feature expectations deviate from initial assumptions, ensuring that capability roadmaps remain anchored to validated market demand.
