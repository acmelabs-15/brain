---
package: rjm
name: externally-grounded signal
slug: externally-grounded-signal
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# externally-grounded signal

## Definition — verbatim
> "one **externally-grounded signal**: a deterministic tool whose verdict does not depend on a language model." — docs/design/external-signal-gating.md:24-25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/design/external-signal-gating.md | 24 | defined here | Defined as the mandatory deterministic tool input required for quality gates to issue a block/allow decision. |

## Consumes
Execution traces, exit codes, and findings from deterministic tools (pytest, Pester, linters, CodeQL).

## Produces
Objective binary pass/fail or warning signal for gate aggregation.

## When applied
Required as an input signal in every quality gate evaluating code, tests, security, specifications, or documentation.

## Sub-concepts
none

## Part of
external-signal-gating

## Implementation status
defects: missing-path

## Design notes
An externally-grounded signal in rjm is an evaluation signal produced by a deterministic tool whose verdict does not depend on a language model. By requiring at least one such signal in every gate, rjm prevents circular self-validation loops where models judge model outputs without objective verification.
