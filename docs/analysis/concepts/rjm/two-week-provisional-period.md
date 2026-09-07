---
package: rjm
name: Two-week provisional period
slug: two-week-provisional-period
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Two-week provisional period

## Definition — verbatim
(used, not defined)
> "Two-week provisional period allows monitoring to validate that downgraded agents maintain acceptable quality." — .agents/architecture/ADR-039-agent-model-cost-optimization.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 64 | defined here | Specified time window in ADR-039 for collecting monitoring data on downgraded agents |

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
defects: unfailable-gate, doc-drift (monitoring was never conducted during the two-week window)

## Design notes
Time-bounded observation period established in ADR-039 for model validation; categorized as name-only per D-023.
