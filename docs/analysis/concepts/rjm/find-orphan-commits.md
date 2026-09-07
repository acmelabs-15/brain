---
package: rjm
name: find_orphan_commits
slug: find-orphan-commits
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_orphan_commits

## Definition — verbatim
(used, not defined)

> "def find_orphan_commits(" — scripts/maintenance/detect_orphan_commits.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 55 | defined here | Main entry function identifying merged PRs whose head branch moved post-merge. |

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
find_orphan_commits is a Python function in detect_orphan_commits.py finding unlanded commits on merged PR branches rather than an SDLC lifecycle concept, classified as name-only per D-023.
