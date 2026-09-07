---
package: rjm
name: NO_RESOLUTION
slug: no-resolution
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# NO_RESOLUTION

## Definition — verbatim
(used, not defined)

> "If empty → NO_RESOLUTION, skip" — scripts/incoherence.py:523

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 523 | defined here | Classification state indicating the user left an issue resolution block empty in the report. |

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
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
An internal resolution parser classification state in `scripts/incoherence.py` indicating missing user input rather than an independent lifecycle concept.
