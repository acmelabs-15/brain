---
package: rjm
name: _GIT_TIMEOUT
slug: git-timeout
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _GIT_TIMEOUT

## Definition — verbatim
(used, not defined)

> "_GIT_TIMEOUT = 30" — scripts/maintenance/detect_orphan_commits.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 40 | defined here | Constant setting Git subprocess timeout in seconds for orphan commit detection. |
| scripts/maintenance/detect_unlanded_commits.py | 22 | defined here | Constant setting Git subprocess timeout in seconds for unlanded commit detection. |

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
_GIT_TIMEOUT is an internal timeout constant for Git subprocess invocations rather than an SDLC lifecycle concept, classified as name-only per D-023.
