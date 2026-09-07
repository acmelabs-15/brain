---
package: rjm
name: _write_all
slug: write-all
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/metrics_writer.py, sha256: 7a9d4b92bf72b4f8881fbb900d4586a83289d0055caf7f50b556927e6fdafed1}
  - {path: scripts/validation/portability_baseline_write.py, sha256: 6fdbc46571c4fccf993f37619487303343ea2b16ac3686423e452c90ca29ff12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
