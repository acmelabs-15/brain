---
package: rjm
name: SYNC_PAIRS
slug: sync-pairs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SYNC_PAIRS

## Definition — verbatim
(used, not defined)

> "SYNC_PAIRS: list[tuple[str, str]] = [" — scripts/sync_plugin_lib.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_plugin_lib.py | 27 | defined here | Configuration list of directory tuples mapping source packages under scripts/ to .claude/lib/ destinations. |
| scripts/validation/validate_sync_registry.py | 6 | used here | Referenced as the authoritative registry checked by the gate to ensure all shared packages are registered. |

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
`SYNC_PAIRS` is a Python configuration list constant registering package directory synchronization mappings rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
