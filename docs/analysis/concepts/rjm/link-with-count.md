---
package: rjm
name: LINK_WITH_COUNT
slug: link-with-count
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# LINK_WITH_COUNT

## Definition — verbatim
(used, not defined)

> "LINK_WITH_COUNT = re.compile(" — scripts/update_memory_index_tokens.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 32 | defined here | Compiled regular expression matching markdown links that already contain token counts. |

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
A compiled regular expression pattern constant matching annotated memory links rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
