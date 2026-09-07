---
package: rjm
name: SmokeReportError
slug: smokereporterror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SmokeReportError

## Definition — verbatim
(used, not defined)

> "class SmokeReportError(Exception):" — scripts/validation/assert_smoke_ran.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/assert_smoke_ran.py | 49 | defined here | Exception class raised when a JUnit smoke report cannot be read or parsed. |

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
`SmokeReportError` is a custom Python exception class raised when a JUnit XML smoke test report cannot be found or parsed rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
