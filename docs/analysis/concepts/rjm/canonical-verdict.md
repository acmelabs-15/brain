---
package: rjm
name: _canonical_verdict
slug: canonical-verdict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _canonical_verdict

## Definition — verbatim
> "def _canonical_verdict(verdict: str) -> str:" — scripts/metrics/emit_verdict_mismatch.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/emit_verdict_mismatch.py | 39 | defined here | Helper function trimming whitespace, uppercasing, and normalizing review verdict tokens using merge_verdicts. |

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
`_canonical_verdict` is a helper function in `scripts/metrics/emit_verdict_mismatch.py` normalizing review verdict tokens for telemetry logging rather than a lifecycle concept, classified as `name-only` per D-023.
