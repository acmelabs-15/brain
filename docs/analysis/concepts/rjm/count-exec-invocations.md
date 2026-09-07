---
package: rjm
name: count_exec_invocations
slug: count-exec-invocations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# count_exec_invocations

## Definition — verbatim
(used, not defined)

> "def count_exec_invocations(text: str) -> int:" — scripts/validation/check_skill_md_exec_portability.py:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 150 | defined here | Function counting bare executable invocations matching EXEC_PATTERN in text. |

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
An internal calculation function counting executable invocation pattern matches rather than an agent lifecycle concept.
