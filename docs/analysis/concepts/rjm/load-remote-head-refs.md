---
package: rjm
name: load_remote_head_refs
slug: load-remote-head-refs
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# load_remote_head_refs

## Definition — verbatim
(used, not defined)

> "def load_remote_head_refs(run_git: GitRunner) -> frozenset[str]:" — scripts/maintenance/_gc_remote.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_remote.py | 10 | defined here | Function querying origin via ls-remote --heads to retrieve the set of branch names currently present on the remote. |

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
clean

## Design notes
`load_remote_head_refs` is a Python function in maintenance scripts querying remote branches rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
