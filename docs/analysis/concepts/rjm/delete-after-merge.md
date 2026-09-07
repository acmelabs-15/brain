---
package: rjm
name: DELETE-AFTER-MERGE
slug: delete-after-merge
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DELETE-AFTER-MERGE

## Definition — verbatim
(used, not defined)

> "DELETE-AFTER-MERGE: This script is one-shot. It is idempotent on re-run" — scripts/migrations/req003_inline_plugin_root_bootstrap.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 2 | defined here | Comment tag marking a one-shot migration utility intended for deletion after merge. |

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
DELETE-AFTER-MERGE is a maintenance tag indicating an ephemeral script intended for post-merge cleanup rather than a lifecycle concept.
