---
package: rjm
name: update_index_references
slug: update-index-references
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# update_index_references

## Definition — verbatim
(used, not defined)

> "def update_index_references(" — scripts/restructure_memories.py:332

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/restructure_memories.py | 332 | defined here | Rewrites reference links within index markdown files to include target subdirectory prefixes. |

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
`update_index_references` is an internal Python migration function for rewriting markdown links across index files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
