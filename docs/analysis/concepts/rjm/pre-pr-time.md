---
package: rjm
name: pre-PR time
slug: pre-pr-time
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# pre-PR time

## Definition — verbatim
(used, not defined)

> "This gate makes that class of defect fail at pre-PR time instead." — scripts/validation/check_skill_memory_references.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 13 | used here | Characterizes the local validation stage before pull request submission where validation gates run. |

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
`pre-PR time` is a descriptive temporal label in script documentation indicating local pre-submission validation rather than a formal SDLC lifecycle phase, classified as `kind: name-only` per D-023.
