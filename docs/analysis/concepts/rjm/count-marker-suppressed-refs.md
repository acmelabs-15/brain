---
package: rjm
name: count_marker_suppressed_refs
slug: count-marker-suppressed-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# count_marker_suppressed_refs

## Definition — verbatim
(used, not defined)

> "def count_marker_suppressed_refs(text: str) -> int:" — scripts/validation/check_skill_md_portability.py:389

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 389 | defined here | Counts upstream path references hidden by a vendor-portability marker to establish a secondary ratchet. |

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
`count_marker_suppressed_refs` is a Python validation function identifier establishing ratchet baselines for suppressed references rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
