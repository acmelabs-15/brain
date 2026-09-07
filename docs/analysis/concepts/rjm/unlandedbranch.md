---
package: rjm
name: UnlandedBranch
slug: unlandedbranch
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# UnlandedBranch

## Definition — verbatim
(used, not defined)

> "class UnlandedBranch(NamedTuple):" — scripts/maintenance/detect_unlanded_commits.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_unlanded_commits.py | 38 | defined here | NamedTuple data structure holding branch name, tip SHA, and unmerged commit count. |

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
defects: doc-drift, orphan

## Design notes
UnlandedBranch is a Python NamedTuple representing detected unmerged branches rather than an SDLC lifecycle concept, classified as name-only per D-023.
