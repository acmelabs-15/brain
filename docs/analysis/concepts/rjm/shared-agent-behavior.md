---
package: rjm
name: shared agent behavior
slug: shared-agent-behavior
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

# shared agent behavior

## Definition — verbatim
(used, not defined)

> "Compare shared agent behavior through real Claude and Copilot CLIs." — scripts/eval/eval_runtime_parity.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval_runtime_parity.py | 2 | defined here | Target evaluation property comparing behavioral consistency across CLI agent runtimes. |

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
A behavioral comparison target in `eval_runtime_parity.py` assessing parity across Claude Code and Copilot CLI runtimes rather than an SDLC lifecycle concept, classified as name-only per D-023.
