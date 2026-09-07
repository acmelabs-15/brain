---
package: rjm
name: report_file
slug: report-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# report_file

## Definition — verbatim
(used, not defined)

> "write_output("report_file", report_file)" — .github/scripts/generate_spec_report.py:283

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 283 | used here | Step output parameter identifier holding the path to the generated specification validation report. |
| scripts/ci/collect_metrics_and_report.py | 27 | defined here | Constant identifying the output metrics report file path. |

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
defects: orphan, missing-path

## Design notes
`report_file` is a step output parameter identifier and script variable holding generated report file paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
