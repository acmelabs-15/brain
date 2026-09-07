---
package: rjm
name: THRESHOLD_REPORT_PATH
slug: threshold-report-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# THRESHOLD_REPORT_PATH

## Definition — verbatim
(used, not defined)

> "THRESHOLD_REPORT_PATH = Path(\"activation-threshold-report.json\")" — scripts/eval/software_engineering_library_activation_ci.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_ci.py | 28 | defined here | Constant defining the file path (`activation-threshold-report.json`) for threshold reports. |

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
A Python constant identifier specifying the file path for machine-readable threshold evaluation reports, classified as `kind: name-only` per D-023.
