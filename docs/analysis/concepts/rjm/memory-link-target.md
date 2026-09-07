---
package: rjm
name: MEMORY_LINK_TARGET
slug: memory-link-target
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MEMORY_LINK_TARGET

## Definition — verbatim
(used, not defined)

> "MEMORY_LINK_TARGET = re.compile(" — scripts/update_memory_index_tokens.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 38 | defined here | Compiled regular expression extracting markdown link target filenames from memory index lines. |

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
defects: missing-path, other

## Design notes
A compiled regular expression pattern constant extracting link targets rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
