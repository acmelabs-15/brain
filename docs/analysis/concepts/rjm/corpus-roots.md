---
package: rjm
name: CORPUS_ROOTS
slug: corpus-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CORPUS_ROOTS

## Definition — verbatim
(used, not defined)

> "CORPUS_ROOTS: tuple[str, ...] = (" — scripts/validation/check_skill_memory_references.py:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 102 | defined here | Constant tuple enumerating directory roots scanned for markdown instruction files. |

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
`CORPUS_ROOTS` is a Python constant tuple identifier listing directory paths for instruction scanning rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
