---
package: rjm
name: has_portability_marker
slug: has-portability-marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# has_portability_marker

## Definition — verbatim
(used, not defined)

> "def has_portability_marker(text: str) -> bool:" — scripts/validation/check_skill_md_exec_portability.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 96 | defined here | Function checking if text contains an intentional vendor-portability-exec comment marker. |
| scripts/validation/check_skill_md_portability.py | 329 | defined here | Function checking if text contains a vendor-portability opt-out comment marker outside code blocks. |

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
defects: other, doc-drift

## Design notes
A marker detection predicate in validation scripts rather than an agent lifecycle concept.
