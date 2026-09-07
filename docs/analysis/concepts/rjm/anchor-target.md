---
package: rjm
name: _anchor_target
slug: anchor-target
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _anchor_target

## Definition — verbatim
> "def _anchor_target(" — scripts/metrics_writer.py:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics_writer.py | 98 | defined here | Helper function anchoring relative target paths to the project directory or custom base directory. |

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
`_anchor_target` is a helper function in `scripts/metrics_writer.py` resolving and anchoring file paths under a designated base directory rather than a lifecycle concept, classified as `name-only` per D-023.
