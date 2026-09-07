---
package: rjm
name: MEMORIES_DIR
slug: memories-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MEMORIES_DIR

## Definition — verbatim
(used, not defined)

> "MEMORIES_DIR = Path(\".serena/memories\")" — scripts/restructure_memories.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/restructure_memories.py | 16 | defined here | Constant defining the target directory path for Serena memories (.serena/memories). |

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
defects: script-bug

## Design notes
`MEMORIES_DIR` is a Python Path constant identifier pointing to the memory directory rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
