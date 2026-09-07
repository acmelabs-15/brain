---
package: rjm
name: _run_update_baseline
slug: run-update-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _run_update_baseline

## Definition — verbatim
(used, not defined)

> "def _run_update_baseline(" — scripts/validation/check_skill_md_portability.py:1293

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 1293 | defined here | Orchestrates baseline file update operations while enforcing safety guards against accidental shrinks or marker growth. |

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
defects: doc-drift

## Design notes
`_run_update_baseline` is an internal Python execution function identifier handling baseline update logic rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
