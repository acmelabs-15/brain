---
package: rjm
name: _tip_sha
slug: tip-sha
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _tip_sha

## Definition — verbatim
(used, not defined)

> "def _tip_sha(branch: str, repo: str) -> str:" — scripts/maintenance/detect_unlanded_commits.py:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_unlanded_commits.py | 60 | defined here | Helper resolving the current tip commit SHA for a branch via git rev-parse. |

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
_tip_sha is a private helper resolving a Git branch's tip SHA via rev-parse rather than an SDLC lifecycle concept, classified as name-only per D-023.
