---
package: rjm
name: critic conditions
slug: critic-conditions
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md, sha256: 5f3f48708d5dcd1bc3c82b12e518ae4e4739403000a0b9d94268cd93089299da}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# critic conditions

## Definition — verbatim
(used, not defined)

> "This plan has been updated to incorporate ALL 4 critic conditions (C1-C4):" — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md | 15 | used here | Lists the four mandatory conditions (C1-C4) required by the critic review that were incorporated into the plan. |

## Consumes
Plan critique findings from the critic agent (`003-pr-60-plan-critique.md`).

## Produces
A checklist of required remediation items (C1: test verification, C2: PowerShell scope clarification, C3: regex hardening, C4: rollback plan) that must be satisfied before plan approval and implementation.

## When applied
When evaluating and revising remediation plans in response to critic agent reviews.

## Sub-concepts
none

## Part of
pr-60-remediation-plan

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
A set of four mandatory prerequisite conditions formulated by the critic agent that must be incorporated into a remediation plan prior to implementation approval.
