---
package: rjm
name: hook_utilities
slug: hook-utilities
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# hook_utilities

## Definition — verbatim
(used, not defined)

> "hook_utilities`` or ``github_core``. The earlier M7-T2 cleanup" — scripts/migrations/req003_inline_plugin_root_bootstrap.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 11 | used here | Referenced as the shared hook library module from which hooks import utilities. |

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
defects: orphan, other

## Design notes
hook_utilities is a shared Python library module providing hook helper utilities rather than an independent lifecycle concept.
