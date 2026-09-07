---
package: rjm
name: DEFAULT_STALE_BASE
slug: default-stale-base
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DEFAULT_STALE_BASE

## Definition — verbatim
(used, not defined)

> "DEFAULT_STALE_BASE = 20" — scripts/report_pr_supersession.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 71 | defined here | Constant defining the default commit threshold (20) behind base branch for supersession checks. |

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
defects: missing-path

## Design notes
`DEFAULT_STALE_BASE` is a Python integer constant identifier defining commit lag threshold rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
