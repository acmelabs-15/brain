---
package: rjm
name: PREFIX_TO_DIR
slug: prefix-to-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# PREFIX_TO_DIR

## Definition — verbatim
(used, not defined)

> "PREFIX_TO_DIR = {" — scripts/restructure_memories.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/restructure_memories.py | 30 | defined here | Mapping table binding memory filename prefixes to target topic directory names. |

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
`PREFIX_TO_DIR` is a Python dictionary constant identifier mapping filename prefixes to subdirectories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
