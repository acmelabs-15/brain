---
package: rjm
name: try_load_origin_upstreams
slug: try-load-origin-upstreams
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# try_load_origin_upstreams

## Definition — verbatim
(used, not defined)

> "def try_load_origin_upstreams(run_git: GitRunner) -> dict[str, str]:" — scripts/maintenance/_gc_remote.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_remote.py | 45 | defined here | Safe wrapper loading origin upstreams while catching RuntimeError and returning an empty dictionary on failure. |

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
`try_load_origin_upstreams` is a Python function in maintenance scripts providing safe upstream loading rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
