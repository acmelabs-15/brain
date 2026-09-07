---
package: rjm
name: commands_dir
slug: commands-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# commands_dir

## Definition — verbatim
(used, not defined)

> "    commands_dir = Path(\".claude/commands\")" — scripts/modules/slash_command_validator.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/slash_command_validator.py | 28 | defined here | Local variable specifying the directory path containing slash command definitions. |

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
defects: orphan

## Design notes
A local variable identifier (`commands_dir`) specifying the commands directory path rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
