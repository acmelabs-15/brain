---
package: rjm
name: SYNC_FILE_PAIRS
slug: sync-file-pairs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SYNC_FILE_PAIRS

## Definition — verbatim
(used, not defined)

> "SYNC_FILE_PAIRS: list[tuple[str, str]] = [" — scripts/sync_plugin_lib.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_plugin_lib.py | 41 | defined here | Configuration list defining individual single-file source-to-destination pairs for exact byte copies. |

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
`SYNC_FILE_PAIRS` is a Python configuration list constant specifying single-file module copy mappings rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
