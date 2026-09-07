---
package: rjm
name: LINK_WITHOUT_COUNT
slug: link-without-count
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# LINK_WITHOUT_COUNT

## Definition — verbatim
(used, not defined)

> "LINK_WITHOUT_COUNT = re.compile(" — scripts/update_memory_index_tokens.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 35 | defined here | Compiled regular expression matching markdown memory links lacking token count annotations. |

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
A compiled regular expression pattern constant matching unannotated memory links rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
