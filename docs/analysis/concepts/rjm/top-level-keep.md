---
package: rjm
name: TOP_LEVEL_KEEP
slug: top-level-keep
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TOP_LEVEL_KEEP

## Definition — verbatim
(used, not defined)

> "TOP_LEVEL_KEEP = {" — scripts/restructure_memories.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/restructure_memories.py | 19 | defined here | Set constant defining special memory files that must remain at the top level of the memories directory. |

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
`TOP_LEVEL_KEEP` is a Python set constant identifier listing memory files retained at top level rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
