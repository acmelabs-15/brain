---
package: rjm
name: Ground-truth discipline
slug: ground-truth-discipline
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ground-truth discipline

## Definition — verbatim
> "Ground-truth discipline: fixture criteria come from real merged PRs, so they" — scripts/eval/eval-e2e-delivery.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-e2e-delivery.py | 24 | defined here | Documented in docstring as the benchmark design discipline anchoring fixture acceptance criteria in real merged PRs. |

## Consumes
Real merged pull requests, closed issue discussions, and shipped bugfixes.

## Produces
Unbiased fixture acceptance criteria and benchmark test cases independent of agent prompt wording.

## When applied
When designing and curating evaluation benchmark fixtures for autonomous coding agents.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An evaluation methodology in rjm requiring benchmark grading criteria to be extracted directly from merged historical pull requests rather than synthesized by prompt authors, ensuring evaluations measure genuine delivery capability without circular prompt overfitting.
