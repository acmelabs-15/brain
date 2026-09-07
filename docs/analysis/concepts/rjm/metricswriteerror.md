---
package: rjm
name: MetricsWriteError
slug: metricswriteerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MetricsWriteError

## Definition — verbatim
> "class MetricsWriteError(Exception):" — scripts/metrics_writer.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics_writer.py | 77 | defined here | Custom exception class raised when a tally file append is rejected due to symlinks, path traversal, or write failure. |

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
`MetricsWriteError` is an exception class in `scripts/metrics_writer.py` raised when tally file appends are rejected or fail rather than a lifecycle concept, classified as `name-only` per D-023.
