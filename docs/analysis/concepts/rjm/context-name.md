---
package: rjm
name: context_name
slug: context-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# context_name

## Definition — verbatim
(used, not defined)

> "def context_name(context: dict[str, Any]) -> str:" — scripts/pr_maintenance_rollup.py:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 110 | defined here | Utility returning the check name for CheckRun or StatusContext nodes. |

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
`context_name` is a Python utility function identifier extracting the status check name from GitHub GraphQL context nodes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
