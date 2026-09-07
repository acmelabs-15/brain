---
package: rjm
name: metered usage
slug: metered-usage
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-025-github-actions-arm-runners.md, sha256: 262467b9272dfe90621683f336fc4324737a99706a35977ccd260160d3fef6d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# metered usage

## Definition — verbatim
(used, not defined)

> "GitHub Actions metered usage reached $243.55 in December 2025 with projected monthly costs exceeding $500 USD. The target cost is less than $100/month. Analysis revealed opportunities for significant cost reduction through:" — .agents/architecture/ADR-025-github-actions-arm-runners.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-025-github-actions-arm-runners.md | 24 | used here | Cited in context section as the monthly billing metric motivating CI runner migration. |

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
A GitHub Actions billing metric representing billable consumption minutes for hosted runners, functioning as a financial accounting figure rather than an agent lifecycle concept.
