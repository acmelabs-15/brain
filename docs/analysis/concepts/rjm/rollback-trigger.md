---
package: rjm
name: rollback-trigger
slug: rollback-trigger
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# rollback-trigger

## Definition — verbatim
> "Persist rollback-trigger state for software-engineering-library activation evals." — scripts/eval/software_engineering_library_activation_gate.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_gate.py | 2 | defined here | Docstring description of state persistence mechanism enforcing ADR-088 rollback policy. |

## Consumes
Sequential evaluation run verdicts across scheduled CI executions.

## Produces
State persistence and automated CI failure triggering restoration issue creation.

## When applied
Evaluated upon completion of live activation evaluation runs.

## Sub-concepts
none

## Part of
ADR-088

## Implementation status
clean

## Design notes
An enforceable stateful mechanism in rjm ensuring that architectural refactoring of rules into skills is automatically rolled back if activation reachability degrades across consecutive runs.
