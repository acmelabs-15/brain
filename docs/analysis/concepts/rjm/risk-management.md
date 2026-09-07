---
package: rjm
name: Risk Management
slug: risk-management
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Risk Management

## Definition — verbatim
(used, not defined)

> "Phase 1 before merge is correct prioritization" — .agents/archive/planning/PR-60/003-pr-60-plan-critique.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 22 | used here | Evaluated as an evaluation criterion scoring 9/10 for prioritizing critical fixes before merge. |

## Consumes
Remediation plans, vulnerability reports, and deployment staging sequences.

## Produces
Risk scores, phasing recommendations, and mitigation sequencing decisions.

## When applied
Applied during plan critique to verify that risky changes are quarantined and prioritized appropriately before merge.

## Sub-concepts
none

## Part of
evaluation-criteria

## Implementation status
defects: cross-file-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95)

## Design notes
`Risk Management` represents the evaluation dimension ensuring that implementation plans structure work into risk-bounded phases, isolating critical defects and resolving high-risk security fixes prior to merging into production branches.
