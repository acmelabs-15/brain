---
package: rjm
name: DEFAULT_RUNS
slug: default-runs
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

# DEFAULT_RUNS

## Definition — verbatim
(used, not defined)

> "DEFAULT_RUNS = 3" — scripts/eval/eval-prompt-change.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 119 | defined here | Cites constant enforcing minimum 3 runs per scenario under the flakiness protocol. |
| scripts/eval/eval-prompt-change.py | 81 | defined here | Constant defining baseline run count of 3 for prompt evaluation scenarios. |

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
`DEFAULT_RUNS` is an integer configuration constant in `eval-prompt-change.py` specifying the standard 3-run execution count for scenario evaluations, classified as `name-only` per D-023.
