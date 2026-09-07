---
package: rjm
name: _is_same_actor
slug: is-same-actor
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_same_actor

## Definition — verbatim
(used, not defined)

> "def _is_same_actor(" — scripts/update_reviewer_signal_stats.py:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 156 | defined here | Function comparing two actor identities to authoritatively match PR authors against comment authors. |

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
defects: orphan

## Design notes
`_is_same_actor` is an internal Python helper function identifier in `scripts/update_reviewer_signal_stats.py` verifying GitHub user identities rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
