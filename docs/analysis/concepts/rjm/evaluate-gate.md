---
package: rjm
name: evaluate_gate
slug: evaluate-gate
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_ai_review_infra_gate.py, sha256: fcc4034f1ade9de3980298877acd16390171096679d20e7b081657457f8c531f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# evaluate_gate

## Definition — verbatim
> "def evaluate_gate(context_infra_failure: str) -> GateDecision:" — scripts/ci/check_ai_review_infra_gate.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_ai_review_infra_gate.py | 59 | defined here | Pure evaluation function deciding whether to skip Copilot review based on context infrastructure build results. |

## Consumes
`CONTEXT_INFRA_FAILURE` environment variable string.

## Produces
`GateDecision` instance signaling whether to execute or bypass the review step.

## When applied
Invoked prior to launching the Copilot CLI review in CI.

## Sub-concepts
none

## Part of
ai-review

## Implementation status
clean

## Design notes
`evaluate_gate` is the decision function for the AI review infrastructure gate, ensuring that agent reviews are bypassed with clear diagnostics when upstream context generation suffers infrastructure failure.
