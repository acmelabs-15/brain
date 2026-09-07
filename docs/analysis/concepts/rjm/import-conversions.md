---
package: rjm
name: IMPORT_CONVERSIONS
slug: import-conversions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# IMPORT_CONVERSIONS

## Definition — verbatim
(used, not defined)

> "IMPORT_CONVERSIONS: list[tuple[re.Pattern[str], str]] = [" — scripts/sync_plugin_lib.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_plugin_lib.py | 49 | defined here | Regex pattern list used to rewrite absolute scripts/ imports into relative imports for plugin distribution. |

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
`IMPORT_CONVERSIONS` is a Python constant list compiling regex patterns for import path rewriting rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
