---
package: rjm
name: NON-REGRESSION RATCHET
slug: non-regression-ratchet
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/instruction_budget.py, sha256: c57feaeaba07cea56c524e40fcef7945cc51684df1a4f69733a85e65ae241183}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# NON-REGRESSION RATCHET

## Definition — verbatim
> "The per-extension ceilings are a NON-REGRESSION RATCHET seeded just above the current measured bytes." — scripts/validation/instruction_budget.py:18-19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/instruction_budget.py | 18 | defines | Enforces that per-extension instruction byte ceilings never increase silently and lower as rules are rescoped. |

## Consumes
Instruction budget measurements and predefined extension ceilings.

## Produces
Pass/fail status in CI and warnings when headroom falls below reserve margins.

## When applied
Checked during pull request validation and automated CI runs.

## Sub-concepts
none

## Part of
instruction-budget

## Implementation status
clean

## Design notes
The non-regression ratchet locks in current instruction byte boundaries, ensuring that instruction additions cannot expand context usage without an explicit, recorded ceiling modification. It encourages refactoring broad, always-on rules into targeted, task-specific skills.
