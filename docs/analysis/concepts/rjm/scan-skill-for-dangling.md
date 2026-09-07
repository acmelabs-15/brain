---
package: rjm
name: _scan_skill_for_dangling
slug: scan-skill-for-dangling
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _scan_skill_for_dangling

## Definition — verbatim
(used, not defined)

> "def _scan_skill_for_dangling(" — scripts/validation/check_skill_md_exec_portability.py:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 109 | defined here | Helper function scanning skill files to find script references that do not exist on disk. |

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
defects: other

## Design notes
An internal scanning function detecting unresolvable script references rather than an agent lifecycle concept.
