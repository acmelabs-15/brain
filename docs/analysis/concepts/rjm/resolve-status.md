---
package: rjm
name: resolve_status
slug: resolve-status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# resolve_status

## Definition — verbatim
(used, not defined)

> "def resolve_status(policy: dict[str, Any], tier: str) -> str:" — scripts/skillbook.py:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 192 | defined here | Resolves operational status (active, questioning, or retired) for a policy based on tier and contradiction rate. |

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
resolve_status is a Python function identifier determining operational policy status rather than an SDLC lifecycle concept, classified as name-only per D-023.
