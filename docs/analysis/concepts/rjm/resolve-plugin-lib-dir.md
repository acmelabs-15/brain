---
package: rjm
name: resolve_plugin_lib_dir
slug: resolve-plugin-lib-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# resolve_plugin_lib_dir

## Definition — verbatim
(used, not defined)

> "The resolve_plugin_lib_dir function is also available for cases where you" — scripts/hook_utilities/bootstrap.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/bootstrap.py | 24 | defined here | Resolves the absolute path to the plugin's lib directory via environment variable or filesystem ancestor search. |

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
A Python helper function that resolves the absolute path to the plugin lib directory, classified as name-only per D-023.
