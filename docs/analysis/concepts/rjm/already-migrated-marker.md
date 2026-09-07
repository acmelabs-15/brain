---
package: rjm
name: ALREADY_MIGRATED_MARKER
slug: already-migrated-marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ALREADY_MIGRATED_MARKER

## Definition — verbatim
(used, not defined)

> "ALREADY_MIGRATED_MARKER = 'os.environ.get" — scripts/migrations/req003_inline_plugin_root_bootstrap.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 81 | defined here | String marker constant used to detect whether a hook script has already received the inline bootstrap. |

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
ALREADY_MIGRATED_MARKER is an internal sentinel string variable used to detect previously applied migrations rather than a lifecycle concept.
