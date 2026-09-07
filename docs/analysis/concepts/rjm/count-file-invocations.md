---
package: rjm
name: count_file_invocations
slug: count-file-invocations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# count_file_invocations

## Definition — verbatim
(used, not defined)

> "def count_file_invocations(text: str) -> int:" — scripts/validation/check_skill_md_exec_portability.py:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 156 | defined here | Marker-aware function counting executable invocations in a file or returning 0 when self-declared. |

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
defects: other

## Design notes
An internal counting function supporting marker-based suppression of invocations rather than an agent lifecycle concept.
