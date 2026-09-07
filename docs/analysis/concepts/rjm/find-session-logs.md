---
package: rjm
name: find_session_logs
slug: find-session-logs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_session_logs

## Definition — verbatim
> "def find_session_logs(sessions_dir: Path) -> list[Path]:" — scripts/measure_context_retrieval_metrics.py:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/measure_context_retrieval_metrics.py | 95 | defined here | Function discovering and sorting session JSON log files within the sessions directory. |

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
`find_session_logs` is a Python utility function in `scripts/measure_context_retrieval_metrics.py` that discovers session JSON files rather than a lifecycle concept, classified as `name-only` per D-023.
