---
package: rjm
name: classify_file
slug: classify-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# classify_file

## Definition — verbatim
(used, not defined)

> "def classify_file(name: str) -> str | None:" — scripts/restructure_memories.py:291

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/restructure_memories.py | 291 | defined here | Classification function resolving the target subdirectory name for a memory file based on prefix rules. |

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
`classify_file` is a Python classification function identifier mapping memory files to topic directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
