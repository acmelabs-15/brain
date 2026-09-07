---
package: rjm
name: _span_contains
slug: span-contains
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _span_contains

## Definition — verbatim
(used, not defined)

> "def _span_contains(spans: set[tuple[int, int, int, int]], token: tokenize.TokenInfo) -> bool:" — scripts/validation/check_skill_portability.py:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 161 | defined here | Function checking whether a token's line and column position falls within any ignored span. |

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
defects: doc-drift, orphan

## Design notes
A Python helper function identifier in `check_skill_portability.py`, classified as name-only per D-023.
