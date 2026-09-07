---
package: rjm
name: get_investigation_allowlist
slug: get-investigation-allowlist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_investigation_allowlist

## Definition — verbatim
(used, not defined)

> "def get_investigation_allowlist() -> list[str]:" — scripts/modules/investigation_allowlist.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/investigation_allowlist.py | 14 | defined here | Function returning the canonical regex patterns for investigation-only path allowlist. |

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
get_investigation_allowlist is an internal Python helper function returning allowlist regex patterns rather than an independent lifecycle concept.
