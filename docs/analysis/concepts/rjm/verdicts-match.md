---
package: rjm
name: verdicts_match
slug: verdicts-match
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# verdicts_match

## Definition — verbatim
> "def verdicts_match(local: str, ci: str) -> bool:" — scripts/metrics/emit_verdict_mismatch.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/emit_verdict_mismatch.py | 34 | defined here | Comparison function returning True when local and CI review verdicts collapse to the same canonical outcome. |

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
`verdicts_match` is a Python comparison function in `scripts/metrics/emit_verdict_mismatch.py` checking if local and CI review verdicts collapse to the same canonical outcome rather than a lifecycle concept, classified as `name-only` per D-023.
