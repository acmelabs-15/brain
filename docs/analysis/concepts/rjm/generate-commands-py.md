---
package: rjm
name: generate_commands.py
slug: generate-commands-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# generate_commands.py

## Definition — verbatim
(used, not defined)

> "``src/copilot-cli/skills/`` via ``build/scripts/generate_commands.py``; that" — scripts/validation/check_skill_md_portability.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 51 | used here | Cited as the generator script transforming `.claude/commands` into Copilot CLI skills. |

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
defects: doc-drift

## Design notes
`generate_commands.py` is a Python build generator script file name generating command skills rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
