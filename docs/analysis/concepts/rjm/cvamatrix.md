---
package: rjm
name: CVAMatrix
slug: cvamatrix
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CVAMatrix

## Definition — verbatim
(used, not defined)

> "class CVAMatrix:" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 30 | defined here | Dataclass definition representing parsed CVA matrix rows, columns, and data cells. |

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
defects: doc-drift, script-bug

## Design notes
CVAMatrix is a Python dataclass identifier used internally within validate-cva-matrix.py to represent table data structures rather than an operational lifecycle concept, classified as name-only per D-023.
