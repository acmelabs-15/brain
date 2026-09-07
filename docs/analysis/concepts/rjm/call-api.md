---
package: rjm
name: call_api
slug: call-api
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# call_api

## Definition — verbatim
(used, not defined)

> "def call_api(" — scripts/eval/_anthropic_api.py:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_anthropic_api.py | 221 | defined here | Core function dispatching API completion requests to LLM provider endpoints. |
| scripts/eval/eval_skill_router.py | 70 | used here | Imported to send completion requests during skill routing evaluation. |
| scripts/eval/eval-agents.py | 50 | used here | Imported to dispatch model calls during agent evaluation trials. |
| scripts/eval/eval-oneshot-vs-shipped.py | 30 | used here | Imported to execute model completion calls for comparison benchmarks. |
| scripts/eval/eval-rule-activation.py | 66 | used here | Imported to invoke LLM endpoints during rule activation evaluations. |

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
defects: missing-path, doc-drift, orphan

## Design notes
call_api is a Python function identifier dispatching prompt completion requests across evaluation scripts rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
