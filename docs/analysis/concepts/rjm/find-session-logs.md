---
package: rjm
name: find_session_logs
slug: find-session-logs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/measure_context_retrieval_metrics.py, sha256: 02cfed6442a9a6f67c9374b9808c64b11b04ed0fb0791e1b287b90180ffe27ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
