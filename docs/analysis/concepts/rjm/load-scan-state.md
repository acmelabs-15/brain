---
package: rjm
name: load_scan_state
slug: load-scan-state
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_scan_state

## Definition — verbatim
(used, not defined)

> "Return the persisted ``last_run`` timestamp, or None if absent/invalid." — scripts/issue_triage.py:563

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 562 | defined here | Function reading the previous scan run timestamp from a JSON state file on disk. |

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
`load_scan_state` is a filesystem persistence helper in `scripts/issue_triage.py` for managing incremental scan checkpoints rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
