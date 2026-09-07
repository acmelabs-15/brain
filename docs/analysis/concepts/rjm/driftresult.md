---
package: rjm
name: DriftResult
slug: driftresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DriftResult

## Definition — verbatim
(used, not defined)

> "class DriftResult:" — scripts/sync/detect_spec_drift.py:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/detect_spec_drift.py | 130 | defined here | Dataclass aggregating drift findings, files scanned count, references checked count, and computing the overall scan verdict. |

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
`DriftResult` is a Python dataclass identifier aggregating drift scan findings and computing pass/drift verdicts rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
