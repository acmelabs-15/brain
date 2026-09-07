---
package: rjm
name: migrate_file
slug: migrate-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# migrate_file

## Definition — verbatim
(used, not defined)

> "Return one of: migrated, already-migrated, skipped-no-pattern, error." — scripts/migrations/req003_inline_plugin_root_bootstrap.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 84 | defined here | Function performing regex replacement to migrate individual hook scripts to inline bootstrap. |

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
migrate_file is an internal migration script function modifying individual hook files rather than an independent lifecycle concept.
