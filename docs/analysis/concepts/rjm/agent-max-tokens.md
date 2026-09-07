---
package: rjm
name: _AGENT_MAX_TOKENS
slug: agent-max-tokens
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _AGENT_MAX_TOKENS

## Definition — verbatim
(used, not defined)

> "_AGENT_MAX_TOKENS = 2048" — scripts/eval/eval-agents.py:560

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 560 | defined here | Constant defining the maximum completion token limit (2048) allocated for agent evaluation calls. |
| scripts/eval/eval-oneshot-vs-shipped.py | 69 | defined here | Constant defining the maximum completion token limit (1500) allocated for agent responses in one-shot benchmarks. |

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
defects: missing-path

## Design notes
An internal integer constant (`_AGENT_MAX_TOKENS`) in evaluation scripts setting model generation token limits, classified as `name-only` per D-023.
