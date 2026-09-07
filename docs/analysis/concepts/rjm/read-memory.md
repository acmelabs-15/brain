---
package: rjm
name: read_memory
slug: read-memory
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
---

# read_memory

## Definition — verbatim
(used, not defined)

> "finds references itself, and it only looks at ``read_memory`` and" — scripts/validation/check_skill_memory_references.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 52 | used here | Named operation targeted during instruction scanning to extract and validate literal memory references. |

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
`read_memory` is an MCP tool identifier for reading Serena memories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
