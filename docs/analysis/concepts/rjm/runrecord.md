---
package: rjm
name: RunRecord
slug: runrecord
kind: artifact
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/eval_run_rollup.py, sha256: 753a8fee7f7e9c6e8be84160aadeb914cc92a954b39e96c482c0214f422821ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RunRecord

## Definition — verbatim
> "One (fixture_id, variant, run_index) result row in `runs.jsonl`." — scripts/eval/_eval_agent_types.py:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 238 | defined here | Specified under schemaVersion: 1 capturing prompt hashes, fixture hashes, and assertion results. |
| scripts/eval/_eval_agent_types.py | 127 | defined here | Defined as the primary dataclass representing a single evaluated fixture run row. |
| scripts/eval/_run_persistence.py | 52 | used here | Imported and serialized to `runs.jsonl` using atomic temp-and-rename persistence. |
| scripts/eval/_run_rollup_core.py | 15 | used here | Cited in design comments explaining that adding columns would bump schemaVersion across write paths. |
| scripts/eval/eval_run_rollup.py | 10 | used here | Referenced in module documentation regarding schema stability and reuse without schema bumps. |
| scripts/eval/eval-agent-vs-baseline.py | 44 | used here | Imported and populated with evaluation outcomes before being saved via RunPersistence. |

## Consumes
Evaluated fixture data, prompt content hashes, model execution results, and assertion scores.

## Produces
An immutable entry appended to `runs.jsonl` under the execution run directory.

## When applied
Persisted immediately following the completion and scoring of each individual fixture run.

## Sub-concepts
none

## Part of
eval-agent-vs-baseline, runpersistence

## Implementation status
clean

## Design notes
`RunRecord` is the foundational data unit of persisted evaluation output in rjm. Recorded as JSON lines in `runs.jsonl`, each record uniquely identifies a `(fixture_id, variant, run_index)` execution, capturing cryptographic prompt and fixture content hashes, assertion pass/fail results, token usage, and latency. It forms the append-only event log from which statistical reports and multi-run rollups are computed.
