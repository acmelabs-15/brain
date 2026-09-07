---
package: rjm
name: edit_memory
slug: edit-memory
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
---

# edit_memory

## Definition — verbatim
(used, not defined)

> "``edit_memory`` calls with a literal name. ``write_memory`` is excluded on" — scripts/validation/check_skill_memory_references.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 53 | used here | Named operation targeted during instruction scanning to extract and validate literal memory modifications. |

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
out-of-scope

## Design notes
`edit_memory` is an MCP tool identifier for editing Serena memories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
