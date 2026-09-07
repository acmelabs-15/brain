---
package: rjm
name: PR Validation Report
slug: pr-validation-report
kind: artifact
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

# PR Validation Report

## Definition — verbatim
> "## PR Validation Report" — scripts/ci/build_pr_validation_report.py:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_pr_validation_report.py | 88 | defined here | Title heading and structure of the generated PR validation report summarizing compliance checks. |

## Consumes
PR validation status inputs including description check outcome, bypass label flags, issue linking keywords, and template compliance.

## Produces
Markdown validation report artifact `pr-validation-report.md` posted to CI summaries and PR discussions.

## When applied
Executed in CI during pull request validation to consolidate automated check findings.

## Sub-concepts
description-validation, pr-standards, blocking-issues

## Part of
pr-validation

## Implementation status
clean

## Design notes
The PR Validation Report is the synthesized markdown summary produced during pull request CI validation, consolidating checks on description-to-diff alignment, issue linking keywords, and template compliance into an auditable status artifact for reviewers.
