---
package: rjm
name: closed-loop rule
slug: closed-loop-rule
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/quality_gate/external_signal_gate.py, sha256: cb8b033119ec2c000474d36abc089ece414b9a36cf71b30921df7a95b37ed48d}
  - {path: scripts/quality_gate/spec_external_signal_gate.py, sha256: 510ded18b54df99fd7301f7c667dede1238db6d73fedc9cc195e61b081bd4604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
