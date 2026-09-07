---
package: rjm
name: RunPersistence
slug: runpersistence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RunPersistence

## Definition — verbatim
(used, not defined)

> "class RunPersistence:" — scripts/eval/_run_persistence.py:323

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 28 | defined here | Component providing idempotency and atomic writes for evaluation runs. |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 97 | defined here | Task row specifying RunPersistence temp-write, duplicate guard, and JSONL append. |
| scripts/eval/_run_persistence.py | 323 | defined here | Class definition implementing atomic persistence and duplicate run guards. |
| scripts/eval/_run_rollup_core.py | 3 | used here | Cites RunPersistence as per-run record write mechanism. |
| scripts/eval/eval-agent-vs-baseline.py | 9 | used here | Live execution path component recording evaluation run outputs. |

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
defects: doc-drift, exit-code-mismatch, missing-path, script-bug

## Design notes
RunPersistence is a Python class identifier managing atomic disk serialization, duplicate guards, and JSONL log persistence, classified as name-only per D-023.
