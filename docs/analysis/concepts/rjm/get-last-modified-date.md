---
package: rjm
name: get_last_modified_date
slug: get-last-modified-date
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_last_modified_date

## Definition — verbatim
(used, not defined)

> "def get_last_modified_date(path: Path, project_root: Path) -> str:" — scripts/skill_registry.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_registry.py | 84 | defined here | Queries git commit history for the most recent commit timestamp on a given path. |

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
defects: orphan, doc-drift

## Design notes
get_last_modified_date is a Python helper function identifier querying git log commit dates rather than an SDLC lifecycle concept, classified as name-only per D-023.
