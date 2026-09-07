---
package: rjm
name: make_is_landed
slug: make-is-landed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# make_is_landed

## Definition — verbatim
(used, not defined)

> "def make_is_landed(base_ref: str = "origin/main") -> Callable[[str], bool]:" — scripts/maintenance/detect_orphan_commits.py:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 139 | defined here | Factory constructing a predicate closure testing if a commit is reachable from base_ref. |

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
make_is_landed is a Python factory function in detect_orphan_commits.py returning a commit reachability predicate rather than an SDLC lifecycle concept, classified as name-only per D-023.
