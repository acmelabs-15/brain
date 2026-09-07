---
package: rjm
name: _resolve_under
slug: resolve-under
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _resolve_under

## Definition — verbatim
> "def _resolve_under(target: Path, base: Path) -> Path:" — scripts/metrics_writer.py:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics_writer.py | 119 | defined here | Helper function confirming a resolved target path remains strictly within an allowed base directory against CWE-23 traversal. |

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
`_resolve_under` is a helper function in `scripts/metrics_writer.py` validating that a resolved target path remains confined beneath a designated base directory rather than a lifecycle concept, classified as `name-only` per D-023.
