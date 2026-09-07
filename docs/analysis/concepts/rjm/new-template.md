---
package: rjm
name: NEW_TEMPLATE
slug: new-template
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# NEW_TEMPLATE

## Definition — verbatim
(used, not defined)

> "NEW_TEMPLATE = '''# Bootstrap: find lib directory via env var or manifest walk-up." — scripts/migrations/req003_inline_plugin_root_bootstrap.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 53 | defined here | String template defining replacement inline bootstrap code injected into hook scripts. |

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
NEW_TEMPLATE is a constant code template string used by the migration script to format inline bootstrap replacements rather than a lifecycle concept.
