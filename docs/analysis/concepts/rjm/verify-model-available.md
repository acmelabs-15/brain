---
package: rjm
name: verify_model_available
slug: verify-model-available
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# verify_model_available

## Definition — verbatim
(used, not defined)

> "def verify_model_available(" — scripts/eval/_anthropic_api.py:343

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_anthropic_api.py | 343 | defined here | Preflight function validating model accessibility before eval run execution. |
| scripts/eval/eval-agents.py | 49 | used here | Imported to verify target model availability before agent evaluations. |
| scripts/eval/eval-rule-activation.py | 65 | used here | Imported to perform model accessibility preflight before rule evaluations. |

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
defects: missing-path, doc-drift

## Design notes
verify_model_available is a Python preflight validation function identifier verifying model access before evaluation runs rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
