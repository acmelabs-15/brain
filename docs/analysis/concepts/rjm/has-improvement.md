---
package: rjm
name: has_improvement
slug: has-improvement
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

# has_improvement

## Definition — verbatim
(used, not defined)

> "This is recorded as `has_improvement` and surfaced in the gate output, but it is not a hard pass requirement" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 95 | defined here | Metric recording fail-to-pass flips, designated as informational rather than a hard blocking requirement. |
| scripts/eval/eval-prompt-change.py | 451 | defined here | Docstring and calculation specifying that `has_improvement` is reported for visibility but not required for gate pass. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
acceptance-gate

## Implementation status
defects: missing-path

## Design notes
`has_improvement` is a Boolean metric and report dictionary key tracking whether an edit flipped any scenario from fail to pass, classified as `name-only` per D-023.
