---
package: rjm
name: PR Standards
slug: pr-standards
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

# PR Standards

## Definition — verbatim
(used, not defined)

> "### PR Standards" — scripts/ci/build_pr_validation_report.py:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_pr_validation_report.py | 99 | used here | Section heading in the validation report summarizing issue linking keywords and PR template compliance checks. |

## Consumes
`KEYWORDS_STATUS` and `TEMPLATE_STATUS` environment inputs.

## Produces
Report table verifying presence of issue linking keywords and template compliance.

## When applied
Evaluated during pull request CI validation to enforce repository hygiene and traceability.

## Sub-concepts
none

## Part of
pr-validation-report

## Implementation status
clean

## Design notes
PR Standards is a quality gate in pull request CI reporting that verifies adherence to repository hygiene rules, specifically requiring issue linking keywords (Closes, Fixes, Resolves #N) and pull request template compliance.
