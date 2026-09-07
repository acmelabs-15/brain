---
package: rjm
name: required status check
slug: required-status-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/assert_guard_jobs_succeeded.py, sha256: 75c2b7f363d94b50933a989bc3eed9cdfaab33e79605ee26608006151b421120}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# required status check

## Definition — verbatim
(used, not defined)

> "The rule is deliberately strict. A required status check exists to answer one" — .github/scripts/assert_guard_jobs_succeeded.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/assert_guard_jobs_succeeded.py | 6 | used here | Cited in explanation of why guard job aggregation must demand actual execution and success. |

## Consumes
CI workflow execution results and GitHub repository branch protection rules.

## Produces
Enforcement decision gating pull request merge based on job success.

## When applied
Applied by GitHub branch protection before permitting merge into protected branches.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A required status check is a branch protection gating mechanism that mandates verification jobs complete successfully before a pull request can be merged.
