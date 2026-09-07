---
package: rjm
name: _write_all
slug: write-all
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _write_all

## Definition — verbatim
> "def _write_all(fd: int, data: bytes, target: Path) -> None:" — scripts/metrics_writer.py:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics_writer.py | 110 | defined here | Helper function writing byte buffers to a file descriptor using memoryview to handle partial writes. |
| scripts/validation/portability_baseline_write.py | 73 | defined here | Helper function writing full byte payloads to an open file descriptor in a loop until complete. |

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
`_write_all` is a helper function identifier implemented in `scripts/metrics_writer.py` and `scripts/validation/portability_baseline_write.py` for complete byte buffer writes to file descriptors rather than a lifecycle concept, classified as `name-only` per D-023.
