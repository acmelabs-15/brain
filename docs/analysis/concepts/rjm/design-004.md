---
package: rjm
name: DESIGN-004
slug: design-004
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_eval_api_adapter.py, sha256: 314efe9e10fd6ff6a07b9955b2eb647bfb54cbf9afb869ceb9a690ec0f8587e0}
  - {path: scripts/eval/_eval_common.py, sha256: 68a26fff6cd877843cddfabd13608f4f1e8f30b0808e5e73888793b6dc811ad6}
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
  - {path: scripts/eval/_report_writer.py, sha256: 2880d2a761552d864a734fd23db9f205c2ade9b2964f5892a7043ec3fb488fc7}
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DESIGN-004

## Definition — verbatim
(used, not defined)

> "id: DESIGN-004" — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 3 | defined here | Frontmatter identifier for Agent Eval Harness Spike design document. |
| scripts/eval/_eval_agent_types.py | 3 | used here | Docstring reference citing DESIGN-004 type definitions. |
| scripts/eval/_eval_api_adapter.py | 3 | used here | Docstring reference citing DESIGN-004 §5.4 API adapter specification. |
| scripts/eval/_eval_common.py | 22 | used here | Cites DESIGN-004 for common evaluation utilities and pricing. |
| scripts/eval/_plan_runner.py | 1 | used here | Docstring reference citing DESIGN-004 §5.3a plan runner specification. |
| scripts/eval/_report_writer.py | 3 | used here | Docstring reference citing DESIGN-004 §5.5 report writer specification. |
| scripts/eval/_run_persistence.py | 12 | used here | Cites DESIGN-004 for run persistence and atomic write guarantees. |
| scripts/eval/eval-agent-vs-baseline.py | 4 | used here | Docstring reference citing DESIGN-004 §5 evaluation pipeline architecture. |

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
defects: exit-code-mismatch, missing-path, script-bug

## Design notes
DESIGN-004 is a design specification document identifier rather than an independent software lifecycle concept, classified as name-only per D-023.
