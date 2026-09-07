---
package: rjm
name: Commonality
slug: commonality
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

# Commonality

## Definition — verbatim
(used, not defined)

> "| Commonality | Var1 | Var2 | Var3 |" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 88 | used here | First column header in expected markdown table format docstring within validate-cva-matrix.py. |

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
Commonality is a column header label documented in the expected table format of validate-cva-matrix.py rather than an independent operational lifecycle concept, classified as name-only per D-023.
