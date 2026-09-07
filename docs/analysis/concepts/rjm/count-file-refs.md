---
package: rjm
name: count_file_refs
slug: count-file-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# count_file_refs

## Definition — verbatim
(used, not defined)

> "def count_file_refs(text: str) -> int:" — scripts/validation/check_skill_md_portability.py:378

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 378 | defined here | Returns 0 if a file contains an opt-out marker, otherwise counts upstream path references in prose. |

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
`count_file_refs` is a Python validation function identifier calculating marker-aware upstream path counts for a file rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
