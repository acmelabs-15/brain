---
package: rjm
name: eval-e2e-delivery.py
slug: eval-e2e-delivery-py
kind: name-only
package_phase: none
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

# eval-e2e-delivery.py

## Definition — verbatim
(used, not defined)

> "| `eval-e2e-delivery.py` | End-to-end delivery eval (plan-rubric proxy). Feeds a vague germ, captures each agent's plan, LLM-judges it against hidden acceptance criteria. Core in `_e2e_delivery_core.py`. | #2859 |" — scripts/eval/README.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 96 | defined here | Documented in evaluation tooling table as an end-to-end delivery proxy evaluator scoring agent plans. |

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
defects: doc-drift, missing-path, script-bug

## Design notes
`eval-e2e-delivery.py` is a Python evaluation script file name implementing plan-rubric proxy scoring for agent delivery rather than an SDLC lifecycle concept.
