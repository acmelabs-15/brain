---
package: rjm
name: provisional window
slug: provisional-window
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

# provisional window

## Definition — verbatim
(used, not defined)
> "The provisional window below closed without" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 16 | defined here | Retrospective status note recording that the two-week observation window expired without empirical validation |

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
defects: unfailable-gate, doc-drift (provisional window expired without validation and model assignments were reverted incidentally)

## Design notes
Governance timeframe established in ADR-039 for evaluating downgraded model assignments; not an autonomous development lifecycle concept per D-023.
