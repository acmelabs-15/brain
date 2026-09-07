---
package: rjm
name: DuplicateRunError
slug: duplicaterunerror
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DuplicateRunError

## Definition — verbatim
(used, not defined)

> "class DuplicateRunError(Exception):" — scripts/eval/_run_persistence.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 146 | defines | Specified as the typed exception raised when an idempotency violation occurs. |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 104 | defines | Implemented as part of task T4-2 to signal duplicate fixture execution attempts. |
| scripts/eval/_run_persistence.py | 57 | defines | Python exception class defined in the evaluation persistence module for duplicate runs. |
| scripts/eval/eval-agent-vs-baseline.py | 60 | uses | Imported and mapped to exit code 1 (logic error) when encountered in the runner loop. |

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
defects: exit-code-mismatch, script-bug

## Design notes
A custom exception class raised when an eval record with an identical `(fixture_id, variant, run_index)` key already exists; classified as name-only per D-023 as an exception identifier rather than an agent lifecycle concept.
