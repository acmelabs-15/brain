---
package: rjm
name: activation gate
slug: activation-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# activation gate

## Definition — verbatim
(used, not defined)

> "CI wrappers for the software-engineering-library activation gate." — scripts/eval/software_engineering_library_activation_ci.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_ci.py | 2 | used here | Named in module docstring as the target gate wrapped by the CI automation script. |

## Consumes
Rule activation scenario fixtures and evaluation results from `eval-rule-activation.py`.

## Produces
Gate pass/fail verdict, updated consecutive failure tracking state, and markdown report.

## When applied
Executed in CI workflows (scheduled weekly and pull request dry-run) to evaluate skill progressive disclosure.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
An automated CI quality gate in rjm ensuring that software engineering library book rules activate appropriately via progressive disclosure rather than suffering reachability regressions.
