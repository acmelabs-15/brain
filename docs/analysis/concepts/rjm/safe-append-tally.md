---
package: rjm
name: safe_append_tally
slug: safe-append-tally
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# safe_append_tally

## Definition — verbatim
> "def safe_append_tally(" — scripts/metrics_writer.py:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics_writer.py | 135 | defined here | Core utility function appending one record line to a tally file under exclusive lock with symlink and traversal protections. |

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
`safe_append_tally` is a Python utility function in `scripts/metrics_writer.py` providing secure atomic append operations to metrics tally files rather than a lifecycle concept, classified as `name-only` per D-023.
