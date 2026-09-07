---
package: rjm
name: vendor viability
slug: vendor-viability
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

# vendor viability

## Definition — verbatim
> "Vendor viability (from current state only)" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 82 | used here | Reassessment trigger rule monitoring external supplier solvency, acquisition risk, or product end-of-life. |

## Consumes
Supplier financial reports, M&A announcements, product deprecation roadmaps, and service degradation metrics.

## Produces
Triggered reassessment signal forcing leadership to prepare exit strategies or in-house contingency plans.

## When applied
Checked during ongoing operational review of purchased or partnered capabilities.

## Sub-concepts
none

## Part of
reassessment-plan

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
A protective risk gate in rjm's reassessment framework that triggers when a third-party vendor encounters solvency problems, corporate acquisition, or product discontinuation, protecting the enterprise from unexpected service disruptions.
