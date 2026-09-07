---
package: rjm
name: DEFAULT_LIMIT
slug: default-limit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DEFAULT_LIMIT

## Definition — verbatim
(used, not defined)

> "DEFAULT_LIMIT = 50" — scripts/maintenance/detect_orphan_commits.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 38 | defined here | Constant defining the default number of merged pull requests to query. |

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
DEFAULT_LIMIT is a configuration constant in detect_orphan_commits.py setting query limits rather than an SDLC lifecycle concept, classified as name-only per D-023.
