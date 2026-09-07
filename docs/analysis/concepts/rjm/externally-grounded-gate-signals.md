---
package: rjm
name: Externally-grounded gate signals
slug: externally-grounded-gate-signals
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/external_signals/__init__.py, sha256: 5a166b38cfca8b73e0d5f6c531345bdf1466bc01eaf5d61acd3b2d85adbf1447}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Externally-grounded gate signals

## Definition — verbatim
> "Externally-grounded gate signals." — scripts/external_signals/__init__.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/external_signals/__init__.py | 1 | defined here | Module docstring defining the architectural pattern requiring deterministic, non-LLM signals for blocking gate decisions. |

## Consumes
Deterministic verification signals from external tools (pytest, linters, CodeQL, acceptance criteria parsers).

## Produces
Hard, ungameable pass/fail verdicts that prevent pure-LLM evaluators from approving pull requests in a closed loop.

## When applied
Applied across all pull request and spec validation quality gates (`ai-spec-validation.yml`) to ensure automated merge decisions rest on verifiable external evidence.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural design pattern in rjm requiring that quality gates base blocking decisions on deterministic, non-LLM tools rather than model-only judgments. While LLM critics may annotate why issues occurred, requiring external grounding prevents circular hallucination loops where models rubber-stamp generated code without empirical validation.
