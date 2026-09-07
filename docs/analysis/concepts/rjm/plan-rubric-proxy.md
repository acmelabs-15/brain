---
package: rjm
name: plan-rubric proxy
slug: plan-rubric-proxy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_e2e_delivery_core.py, sha256: f7aeb40a86977036c93513fb424b27e9249ddcde90e7e4dc92fdd0097340ccab}
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# plan-rubric proxy

## Definition — verbatim
> "This module is the *plan-rubric proxy* (harness shape 2 in the issue)." — scripts/eval/_e2e_delivery_core.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_e2e_delivery_core.py | 8 | defined here | Module docstring defining the plan-rubric proxy evaluation harness shape. |
| scripts/eval/eval-e2e-delivery.py | 2 | defined here | CLI script docstring defining the plan-rubric proxy evaluation runner. |

## Consumes
Vague task prompts, withheld acceptance criteria, and agent-generated execution plans.

## Produces
LLM judge scoring breakdowns and structured evaluation records.

## When applied
Applied as a lightweight evaluation proxy when full trace-based execution of code changes is cost-prohibitive.

## Sub-concepts
hidden-criteria, rubric-axes

## Part of
end-to-end-delivery-eval

## Implementation status
clean

## Design notes
An evaluation pattern in rjm that scores emitted plan structure and completeness against withheld PR acceptance criteria as an efficient proxy for full delivery capability.
