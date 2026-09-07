---
package: rjm
name: closed-loop rule
slug: closed-loop-rule
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# closed-loop rule

## Definition — verbatim
> "external signal is present (the closed-loop rule)." — scripts/quality_gate/external_signal_gate.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/external_signal_gate.py | 8 | used here | Applied to prevent AI quality gate approval when no external deterministic signal is present. |
| scripts/quality_gate/spec_external_signal_gate.py | 11 | used here | Applied to require deterministic acceptance criteria signals alongside LLM agent verdicts. |

## Consumes
Deterministic test status (pytest) or deterministic requirement verification artifacts (acceptance criteria checkboxes) alongside LLM agent review verdicts.

## Produces
Grounded gate verdicts refusing PASS when no external ground-truth signal is present or satisfied.

## When applied
Applied during PR quality gate evaluation and spec-validation workflows to ensure quality gates never pass solely on LLM self-evaluations.

## Sub-concepts
none

## Part of
review

## Implementation status
defects: orphan

## Design notes
An architectural safety pattern and gating constraint in rjm establishing that automated quality gates cannot issue a passing verdict based on LLM agent evaluations alone without corroborating deterministic external signals (Issue #2108 / #1855).
