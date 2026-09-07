---
package: rjm
name: _reject_symlink
slug: reject-symlink
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _reject_symlink

## Definition — verbatim
> "def _reject_symlink(target: Path) -> None:" — scripts/metrics_writer.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics_writer.py | 85 | defined here | Helper function raising MetricsWriteError if target path is a symlink, guarding against CWE-59 link following. |

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
`_reject_symlink` is a helper function in `scripts/metrics_writer.py` checking and rejecting symlink targets to prevent CWE-59 vulnerabilities rather than a lifecycle concept, classified as `name-only` per D-023.
