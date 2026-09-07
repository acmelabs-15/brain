---
package: rjm
name: save_scan_state
slug: save-scan-state
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# save_scan_state

## Definition — verbatim
(used, not defined)

> "Persist ``last_run`` to the state file (creates parent dirs)." — scripts/issue_triage.py:579

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 578 | defined here | Function writing the current run timestamp to a JSON state file for incremental scanning. |

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
`save_scan_state` is a state-persistence helper in `scripts/issue_triage.py` writing scan watermarks to disk rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
