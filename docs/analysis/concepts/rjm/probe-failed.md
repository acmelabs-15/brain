---
package: rjm
name: _probe_failed
slug: probe-failed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/pr_merge_state.py, sha256: 11604a6b3e6c7d85f97f123b4a945a8b18465811c07e89316eee03a3d957afda}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _probe_failed

## Definition — verbatim
(used, not defined)

> "def _probe_failed(" — scripts/github_core/pr_merge_state.py:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/pr_merge_state.py | 151 | defined here | Helper constructing a PROBE_FAILED PrMergeState with sanitized error details and ADR-035 exit code. |

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
defects: script-bug

## Design notes
Internal constructor function assembling a failure state object with sanitized diagnostic details, classified as name-only per D-023.
