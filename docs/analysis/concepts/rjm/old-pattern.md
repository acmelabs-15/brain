---
package: rjm
name: OLD_PATTERN
slug: old-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# OLD_PATTERN

## Definition — verbatim
(used, not defined)

> "OLD_PATTERN = re.compile(" — scripts/migrations/req003_inline_plugin_root_bootstrap.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 41 | defined here | Compiled regex matching legacy setup_hook_lib_path bootstrap code in hook scripts. |

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
OLD_PATTERN is a script-internal regex variable used to match legacy bootstrap code during migration rather than a lifecycle concept.
