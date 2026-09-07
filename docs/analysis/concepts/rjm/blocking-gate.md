---
package: rjm
name: BLOCKING gate
slug: blocking-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BLOCKING gate

## Definition — verbatim
> "Security review is a TWO-PHASE process. Pre-implementation analysis is insufficient. PIV is MANDATORY for all security-relevant changes." — templates/agents/security.shared.md:341

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 25 | used here | Identified as the missing enforcement mechanism whose absence allowed repeated constraint violations in Session 15. |
| .agents/projects/v0.4.0/PLAN.md | 220 | defined here | Defines prerequisite gate criteria that must be satisfied before extraction Phase 0 begins. |
| templates/agents/security.shared.md | 341 | defined here | Specifies Post-Implementation Verification (PIV) as a mandatory blocking gate for all security-relevant modifications. |

## Consumes
Verifiable tool outputs, test passes, security scan reports, and prerequisite task completions.

## Produces
Binary go/no-go progression verdict permitting or prohibiting subsequent workflow execution.

## When applied
Enforced at critical lifecycle transitions, including session initialization, phase transitions, and pre-PR submission.

## Sub-concepts
constraint-validation, pre-commit

## Part of
session-protocol, verification-based-enforcement

## Implementation status
defects: missing-path, doc-drift

## Design notes
A BLOCKING gate is an automated or mechanically enforced boundary checkpoint that halts execution until explicit verification criteria are met. Unlike advisory warnings or trust-based conventions, a BLOCKING gate physically or procedurally prevents agents from proceeding to implementation, commit, or pull request creation without verifiable proof of compliance. In rjm, blocking gates turn passive policies into active quality guarantees.
