---
package: rjm
name: GateDecision
slug: gatedecision
kind: artifact
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

# GateDecision

## Definition — verbatim
> "class GateDecision:" — scripts/ci/check_ai_review_infra_gate.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_ai_review_infra_gate.py | 49 | defined here | Dataclass representing the evaluated outcome of the infrastructure skip gate, including verdict, message, and retry count. |

## Consumes
Context infrastructure failure status flag.

## Produces
Structured decision record containing skip boolean, verdict string, message, and retry metadata.

## When applied
Constructed during gate evaluation to encapsulate review execution decisions.

## Sub-concepts
none

## Part of
ai-review

## Implementation status
clean

## Design notes
`GateDecision` is an immutable data structure encapsulating the evaluation outcome of the AI review infrastructure gate, ensuring consistent propagation of skip flags, verdicts, and telemetry across CI steps.
