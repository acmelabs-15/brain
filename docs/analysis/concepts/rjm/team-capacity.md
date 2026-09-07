---
package: rjm
name: team capacity
slug: team-capacity
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

# team capacity

## Definition — verbatim
> "Team capacity (from current state only)" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 86 | used here | Reassessment trigger condition evaluating material shifts in engineering headcount, attrition, or skill availability. |

## Consumes
Engineering team staffing rosters, key person departure records, and organizational capacity allocations.

## Produces
Re-evaluation recommendation when internal development or maintenance capacity falls below sustainable levels.

## When applied
Checked during periodic post-decision audits or following major engineering reorganizations.

## Sub-concepts
none

## Part of
reassessment-plan

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
A resource governance gate in rjm that fires when internal team staffing or skills change materially (such as key engineer departures or reallocations), ensuring that commitments to build and maintain custom software remain aligned with actual organizational capacity.
