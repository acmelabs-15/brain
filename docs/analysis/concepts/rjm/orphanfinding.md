---
package: rjm
name: OrphanFinding
slug: orphanfinding
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# OrphanFinding

## Definition — verbatim
(used, not defined)

> "class OrphanFinding:" — scripts/maintenance/detect_orphan_commits.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 44 | defined here | Dataclass representing a merged pull request whose head branch moved after merge. |

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
OrphanFinding is a Python dataclass representing detected orphan commit findings on merged branches rather than an SDLC lifecycle concept, classified as name-only per D-023.
