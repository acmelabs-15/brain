---
package: rjm
name: edit_budget
slug: edit-budget
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# edit_budget

## Definition — verbatim
> "Return how many patches step ``step`` of ``total`` may propose." — scripts/eval/_optimizer_core.py:349

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 348 | defined here | Cosine decay calculation function determining maximum allowable patch edits for a given optimization step. |

## Consumes
Current step index, total step count, maximum edit count, and minimum edit count.

## Produces
An integer edit budget constraining the number of atomic patches an optimizer iteration may submit.

## When applied
Evaluated before patch generation and patch application in each step of an automated optimization loop.

## Sub-concepts
none

## Part of
apply-patches

## Implementation status
clean

## Design notes
`edit_budget` dynamically throttles allowable prompt edits across an optimization lifecycle using a cosine decay schedule. Early iterations receive higher edit budgets to permit structural exploration, while later iterations are constrained to minimal edits, ensuring convergence toward stable, high-performing configurations.
