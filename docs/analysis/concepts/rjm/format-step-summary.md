---
package: rjm
name: format_step_summary
slug: format-step-summary
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# format_step_summary

## Definition — verbatim
(used, not defined)

> "def format_step_summary(findings: Sequence[OrphanFinding], examined: int) -> str:" — scripts/maintenance/detect_orphan_commits.py:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 174 | defined here | Formatter rendering GitHub Actions job step summary markdown table. |

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
defects: orphan

## Design notes
format_step_summary is a Python helper function formatting GitHub Actions job summaries rather than an SDLC lifecycle concept, classified as name-only per D-023.
