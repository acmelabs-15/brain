---
package: rjm
name: aggregate guard status
slug: aggregate-guard-status
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

# aggregate guard status

## Definition — verbatim
> "Fail the aggregate guard status unless every upstream job succeeded." — .github/scripts/assert_guard_jobs_succeeded.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/assert_guard_jobs_succeeded.py | 2 | defined here | Documented as the CI aggregation rule requiring every upstream guard job to succeed. |

## Consumes
NEEDS_JSON environment variable containing GitHub Actions upstream job status payloads.

## Produces
Pass (exit code 0) or failure (exit code 1) reporting status across all upstream guard jobs.

## When applied
Applied in CI workflows as the aggregate guard check before reporting pull request status.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Aggregate guard status enforces an all-or-nothing gating policy across workflow dependency graphs in rjm, rejecting skipped or cancelled upstream jobs to eliminate false-green CI outcomes.
