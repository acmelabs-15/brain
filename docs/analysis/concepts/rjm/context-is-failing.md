---
package: rjm
name: context_is_failing
slug: context-is-failing
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# context_is_failing

## Definition — verbatim
(used, not defined)

> "def context_is_failing(context: dict[str, Any]) -> bool:" — scripts/pr_maintenance_rollup.py:142

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 142 | defined here | Predicate checking if a status context has a failing conclusion or state. |

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
clean

## Design notes
`context_is_failing` is a Python predicate function identifier checking whether a status context carries a failure verdict rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
