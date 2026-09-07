---
package: rjm
name: Blocking Issues
slug: blocking-issues
kind: pattern
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

# Blocking Issues

## Definition — verbatim
(used, not defined)

> "### ⚠️ Blocking Issues" — scripts/ci/build_pr_validation_report.py:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_pr_validation_report.py | 107 | used here | Section heading in the markdown validation report enumerating critical failures that block PR merge. |

## Consumes
List of critical validation failures such as description-diff mismatch or validation execution errors.

## Produces
Bulleted list of blocking failure explanations in the PR validation report.

## When applied
Rendered in the PR validation report when overall validation status is FAIL or ERROR.

## Sub-concepts
none

## Part of
pr-validation-report

## Implementation status
clean

## Design notes
Blocking Issues represents the pattern of categorizing validation failures into hard blockers that prevent merging, distinct from non-blocking warnings, ensuring immediate visibility into required remediation steps.
