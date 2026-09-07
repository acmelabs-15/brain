---
package: rjm
name: sync_pair
slug: sync-pair
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# sync_pair

## Definition — verbatim
(used, not defined)

> "def sync_pair(" — scripts/sync_plugin_lib.py:187

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_plugin_lib.py | 187 | defined here | Synchronizes one source directory to its lib destination, rewriting imports and detecting drift. |

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
`sync_pair` is a Python function identifier executing directory synchronization with import rewriting rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
