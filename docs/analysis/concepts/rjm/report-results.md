---
package: rjm
name: report_results
slug: report-results
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# report_results

## Definition — verbatim
(used, not defined)

> "def report_results(" — scripts/validate_session_json.py:1422

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 1422 | defined here | Defined as a reporting function formatting validation results and errors for human-readable output. |

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
defects: doc-drift, missing-path

## Design notes
`report_results` is a Python function identifier in `scripts/validate_session_json.py` that formats and prints pass, fail, or warning messages to standard output rather than an SDLC lifecycle concept.
