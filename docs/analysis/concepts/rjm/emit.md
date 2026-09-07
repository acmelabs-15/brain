---
package: rjm
name: emit
slug: emit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_ai_review_infra_gate.py, sha256: fcc4034f1ade9de3980298877acd16390171096679d20e7b081657457f8c531f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# emit

## Definition — verbatim
(used, not defined)

> "def emit(decision: GateDecision, output_file: str) -> None:" — scripts/ci/check_ai_review_infra_gate.py:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_ai_review_infra_gate.py | 106 | defined here | Writes gate outcomes, output files, environment variables, and skip annotations to their sinks. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`emit` is a sink publisher function in `scripts/ci/check_ai_review_infra_gate.py` that writes outputs to GITHUB_OUTPUT and stdout rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
