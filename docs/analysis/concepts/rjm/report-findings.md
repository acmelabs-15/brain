---
package: rjm
name: _report_findings
slug: report-findings
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _report_findings

## Definition — verbatim
(used, not defined)

> "def _report_findings(findings: list[Finding]) -> None:" — scripts/validation/check_citation_freshness.py:348

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 348 | defined here | Helper function formatting and printing stale citation findings and remediation guidance. |

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
An internal Python helper function identifier in `check_citation_freshness.py` rendering validation findings to stdout, classified as `name-only` per D-023.
