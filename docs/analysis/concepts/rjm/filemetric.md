---
package: rjm
name: FileMetric
slug: filemetric
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FileMetric

## Definition — verbatim
(used, not defined)

> "class FileMetric:" — scripts/validate_workspace_budget.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workspace_budget.py | 56 | defined here | Dataclass recording the path, byte size, and existence status of a single workspace file. |

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
defects: orphan

## Design notes
`FileMetric` is a Python dataclass identifier in `validate_workspace_budget.py` representing measured file attributes rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
