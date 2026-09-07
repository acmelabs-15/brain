---
package: rjm
name: load_origin_upstreams
slug: load-origin-upstreams
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# load_origin_upstreams

## Definition — verbatim
(used, not defined)

> "def load_origin_upstreams(run_git: GitRunner) -> dict[str, str]:" — scripts/maintenance/_gc_remote.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_remote.py | 24 | defined here | Function parsing git config regex output to map local branches to their origin upstream tracking branches. |

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
`load_origin_upstreams` is a Python function in maintenance scripts parsing git config upstream branches rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
