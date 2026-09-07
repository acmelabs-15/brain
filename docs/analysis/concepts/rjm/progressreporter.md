---
package: rjm
name: ProgressReporter
slug: progressreporter
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# ProgressReporter

## Definition — verbatim
(used, not defined)

> "class ProgressReporter:" — scripts/progress/reporter.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/progress/__init__.py | 19 | used here | Re-exported in module initialization namespace. |
| scripts/progress/README.md | 40 | used here | Documented as the primary class for tracking multi-step session progress. |
| scripts/progress/reporter.py | 78 | defined here | Dataclass tracking session-level phases, completed steps, and skill invocations. |

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
`ProgressReporter` is a Python class identifier implementing session progress tracking and terminal status reporting rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
