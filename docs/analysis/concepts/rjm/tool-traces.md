---
package: rjm
name: tool traces
slug: tool-traces
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval_runtime_parity.py, sha256: b82cb3ba9712885b31d0393a91be3a2c390ebeb27c3759d1f2c8f61c5a8d281f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tool traces

## Definition — verbatim
(used, not defined)

> "ids, agent hashes, tool traces, and assertion results." — scripts/eval/eval_runtime_parity.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval_runtime_parity.py | 7 | defined here | Evaluation report data stream recording tool call events executed by agents. |

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
An execution log artifact in `eval_runtime_parity.py` capturing structured tool invocation events during agent evaluation, classified as name-only per D-023.
