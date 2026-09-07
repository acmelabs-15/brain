---
package: rjm
name: LIB_ONLY_FILES
slug: lib-only-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# LIB_ONLY_FILES

## Definition — verbatim
(used, not defined)

> "LIB_ONLY_FILES: set[str] = set()" — scripts/sync_plugin_lib.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_plugin_lib.py | 59 | defined here | Set of filenames that exist only in .claude/lib/ and must not be pruned during sync operations. |

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
`LIB_ONLY_FILES` is a Python configuration set constant preserving destination-only files during library synchronization rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
