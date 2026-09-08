---
package: rjm
name: _killpg_safe
slug: killpg-safe
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _killpg_safe

## Definition — verbatim
(used, not defined)

> "def _killpg_safe(pid: int) -> None:" — scripts/validation/run_workflow_local_test.py:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/run_workflow_local_test.py | 224 | defined here | Process termination function sending SIGTERM and SIGKILL to a process group while guarding the parent process group. |

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
An internal Python process management helper function rather than an agent lifecycle concept, classified as name-only per D-023.
