---
package: rjm
name: Cost Savings
slug: cost-savings
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-055-github-actions-runner-selection.md, sha256: b0d91063c2a7f1f750321ec14eff5781d442bef1a96c64b78d5c1cf0b640ac82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cost Savings

## Definition — verbatim
(used, not defined)

> "**Cost Savings**:" — .agents/architecture/ADR-055-github-actions-runner-selection.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-055-github-actions-runner-selection.md | 86 | defined here | Consequence section header detailing 37.5% per-job cost reduction with ARM runners. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
github-actions-runner-selection

## Implementation status
clean

## Design notes
A section label in ADR-055 categorizing the financial benefits of migrating GitHub Actions workflows to ARM runners per D-023.
