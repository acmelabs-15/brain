---
package: rjm
name: end-to-end delivery eval
slug: end-to-end-delivery-eval
kind: technique
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

# end-to-end delivery eval

## Definition — verbatim
> "End-to-end delivery eval: plan-rubric proxy (issue #2859)." — scripts/eval/eval-e2e-delivery.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_e2e_delivery_core.py | 1 | defined here | Module docstring introducing pure evaluation and scoring logic for end-to-end delivery benchmarking. |
| scripts/eval/eval-e2e-delivery.py | 2 | defined here | Runner docstring defining the evaluation methodology measuring an agent's ability to carry an under-specified ask toward completion. |

## Consumes
Deliberately vague task germs and hidden acceptance criteria derived from real merged PRs.

## Produces
Scored plan evaluations across five rubric axes and serialized execution reports.

## When applied
Applied when evaluating whether an agent can carry an under-specified ask to a complete plan with tests, docs, and gates.

## Sub-concepts
plan-rubric-proxy, hidden-criteria, rubric-axes, max-score

## Part of
agent-eval-discipline

## Implementation status
clean

## Design notes
An evaluation technique introduced in issue #2859 that benchmarks agent planning capability against hidden PR acceptance criteria rather than simple prompt routing classification.
