---
package: rjm
name: AnthropicAPIAdapter
slug: anthropicapiadapter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
  - {path: scripts/eval/_eval_api_adapter.py, sha256: 314efe9e10fd6ff6a07b9955b2eb647bfb54cbf9afb869ceb9a690ec0f8587e0}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AnthropicAPIAdapter

## Definition — verbatim
(used, not defined)

> "DESIGN-004 §5.4 (AnthropicAPIAdapter). Thin wrapper over `_anthropic_api`" — scripts/eval/_eval_api_adapter.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 28 | defined here | Component providing retry, backoff, and logging around API calls. |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 96 | defined here | Task row specifying AnthropicAPIAdapter.call_model() wrapping _anthropic_api. |
| scripts/eval/_eval_api_adapter.py | 3 | defined here | Module docstring describing AnthropicAPIAdapter as thin API wrapper. |
| scripts/eval/eval-agent-vs-baseline.py | 9 | used here | Live execution path component executing model calls. |
| scripts/eval/variance-control.py | 39 | used here | Imported for model calling with retry support. |

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
AnthropicAPIAdapter is a Python class identifier wrapping Anthropic API invocations with retry policies, backoff, and logging, classified as name-only per D-023.
