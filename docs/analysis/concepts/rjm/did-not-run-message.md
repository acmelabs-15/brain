---
package: rjm
name: DID_NOT_RUN_MESSAGE
slug: did-not-run-message
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

# DID_NOT_RUN_MESSAGE

## Definition — verbatim
(used, not defined)

> "DID_NOT_RUN_MESSAGE = \"AI review did not run because context build had an infrastructure failure.\"" — scripts/ci/check_ai_review_infra_gate.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_ai_review_infra_gate.py | 42 | defined here | Constant containing the canonical explanation message written to the output file on infrastructure skip. |

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
`DID_NOT_RUN_MESSAGE` is a constant explanation string emitted to the verdict file when AI review is skipped due to an infrastructure fault rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
