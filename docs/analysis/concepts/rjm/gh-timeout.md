---
package: rjm
name: _GH_TIMEOUT
slug: gh-timeout
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _GH_TIMEOUT

## Definition — verbatim
(used, not defined)

> "_GH_TIMEOUT = 60" — scripts/maintenance/detect_orphan_commits.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 39 | defined here | Constant setting GitHub CLI command timeout in seconds. |

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
_GH_TIMEOUT is an internal timeout constant for GitHub CLI subprocess executions rather than an SDLC lifecycle concept, classified as name-only per D-023.
