---
package: rjm
name: DriftFinding
slug: driftfinding
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DriftFinding

## Definition — verbatim
(used, not defined)

> "class DriftFinding:" — scripts/sync/detect_spec_drift.py:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/detect_spec_drift.py | 112 | defined here | Dataclass representing a stale specification reference containing spec file, line number, referenced path, and recommendation. |

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
`DriftFinding` is a Python dataclass identifier modeling an individual stale specification reference rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
