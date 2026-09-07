---
package: rjm
name: fetch_remote_tips
slug: fetch-remote-tips
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# fetch_remote_tips

## Definition — verbatim
(used, not defined)

> "def fetch_remote_tips(remote: str = "origin") -> dict[str, str]:" — scripts/maintenance/detect_orphan_commits.py:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 124 | defined here | Helper retrieving current remote branch head commit SHAs via git ls-remote. |

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
fetch_remote_tips is a Python helper function in detect_orphan_commits.py querying remote Git references rather than an SDLC lifecycle concept, classified as name-only per D-023.
