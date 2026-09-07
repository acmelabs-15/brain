---
package: rjm
name: FLAKINESS_BLOCK_THRESHOLD
slug: flakiness-block-threshold
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FLAKINESS_BLOCK_THRESHOLD

## Definition — verbatim
(used, not defined)

> "FLAKINESS_BLOCK_THRESHOLD = 0.4" — scripts/eval/eval-prompt-change.py:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 121 | defined here | Cites constant enforcing gate failure if scenario flakiness rate exceeds 40%. |
| scripts/eval/eval-prompt-change.py | 83 | defined here | Constant setting the maximum acceptable flakiness threshold to 0.4 (40%). |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
flakiness-protocol

## Implementation status
defects: missing-path

## Design notes
`FLAKINESS_BLOCK_THRESHOLD` is a floating-point threshold constant (0.4) defining the maximum tolerable flakiness proportion before the evaluation gate blocks, classified as `name-only` per D-023.
