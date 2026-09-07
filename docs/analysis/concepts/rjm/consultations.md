---
package: rjm
name: consultations
slug: consultations
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# consultations

## Definition — verbatim
> "`consultations` is what **this run** charged: zero on every refusal that" — scripts/eval/README.md:1023

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 1023 | defined here | Decision payload accounting property recording the consultation charge incurred by the current gate execution. |

## Consumes
Execution path and refusal status of the gate invocation.

## Produces
Integer accounting charge (0 for early refusal, 1 for evaluated candidate) in gate decision JSON.

## When applied
Emitted in every verdict document produced by `optimize-artifact.py gate`.

## Sub-concepts
none

## Part of
held-out-gated-optimization

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
An accounting attribute in rjm's gate output recording whether the current run consumed one consultation from the allocated evaluation budget.
