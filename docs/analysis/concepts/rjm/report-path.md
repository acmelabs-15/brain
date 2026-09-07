---
package: rjm
name: REPORT_PATH
slug: report-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REPORT_PATH

## Definition — verbatim
(used, not defined)

> "REPORT_PATH = Path(\"pr-validation-report.md\")" — scripts/ci/build_pr_validation_report.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_pr_validation_report.py | 11 | defined here | Constant defining the default output path (`pr-validation-report.md`) for the generated PR validation report. |
| scripts/eval/software_engineering_library_activation_ci.py | 27 | defined here | Constant defining the destination markdown report path (`activation-gate-report.md`) for library activation evaluation. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`REPORT_PATH` is a filesystem path configuration constant specifying destination report filenames in CI scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
