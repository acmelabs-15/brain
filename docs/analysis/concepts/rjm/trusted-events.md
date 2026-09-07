---
package: rjm
name: _TRUSTED_EVENTS
slug: trusted-events
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _TRUSTED_EVENTS

## Definition — verbatim
(used, not defined)

> "_TRUSTED_EVENTS = frozenset({\"schedule\", \"workflow_dispatch\"})" — scripts/validation/assert_trusted_smoke_context.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/assert_trusted_smoke_context.py | 41 | defined here | Constant frozenset defining the GitHub Actions event names authorized for secret-bearing smoke tests. |

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
`_TRUSTED_EVENTS` is a private frozenset constant in `scripts/validation/assert_trusted_smoke_context.py` defining GitHub Actions event triggers permitted to execute authenticated smoke workflows rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
