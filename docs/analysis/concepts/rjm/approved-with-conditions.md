---
package: rjm
name: APPROVED WITH CONDITIONS
slug: approved-with-conditions
kind: gate
package_phase: rjm:review
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

# APPROVED WITH CONDITIONS

## Definition — verbatim
> "## Verdict: APPROVED WITH CONDITIONS" — .agents/archive/planning/PR-60/003-pr-60-plan-critique.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 10 | defined here | Formal gate verdict issued by the critic agent approving the remediation plan subject to mandatory conditions C1-C4. |

## Consumes
Remediation plan document (`002-pr-60-remediation-plan.md`) and gap analysis (`001-pr-60-review-gap-analysis.md`).

## Produces
A conditional approval verdict permitting implementation only after specified prerequisites (C1-C4) are integrated into the plan.

## When applied
During plan critique when a proposal has sound architecture but requires specific risk mitigations or test verifications before implementation begins.

## Sub-concepts
none

## Part of
critic-review

## Implementation status
defects: cross-file-contradiction

## Design notes
A formal gate verdict issued by the critic agent signaling that a plan is fundamentally sound and approved for implementation provided that all enumerated binding conditions are resolved.
