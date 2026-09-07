---
package: rjm
name: Description Validation
slug: description-validation
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Description Validation

## Definition — verbatim
(used, not defined)

> "### Description Validation" — scripts/ci/build_pr_validation_report.py:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_pr_validation_report.py | 93 | used here | Section heading and report table summarizing whether the PR description matches the actual git diff. |

## Consumes
`DESCRIPTION_RESULT` and `BYPASS_USED` environment status inputs.

## Produces
Report table entry reflecting description match status or bypass override.

## When applied
Evaluated in CI `build_pr_validation_report.py` when verifying PR changes against descriptions.

## Sub-concepts
none

## Part of
pr-validation-report

## Implementation status
clean

## Design notes
Description Validation is the CI quality gate verifying that pull request descriptions accurately describe the code changes in the diff, flagging mismatches as blocking issues unless an authorized bypass label is present.
