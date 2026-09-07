---
package: rjm
name: recompute_counts
slug: recompute-counts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# recompute_counts

## Definition — verbatim
(used, not defined)

> "def recompute_counts(policy: dict[str, Any]) -> None:" — scripts/skillbook.py:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 141 | defined here | Recomputes derived policy projection fields confirms, contradicts, and application count from the evidence array. |

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
defects: doc-drift

## Design notes
recompute_counts is a Python function identifier projecting derived counts from evidence arrays rather than an SDLC lifecycle concept, classified as name-only per D-023.
