---
package: rjm
name: _Issue
slug: issue
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _Issue

## Definition — verbatim
(used, not defined)

> "class _Issue(TypedDict):" — scripts/review_memory_export_security.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/review_memory_export_security.py | 35 | defined here | TypedDict structure storing sensitive data finding category, match count, and sample lines. |
| scripts/validation/pr_description.py | 221 | defined here | Dataclass representing a PR description validation finding with severity, type, file, and message. |

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
`_Issue` is an internal Python type definition in validation scripts representing finding records rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
