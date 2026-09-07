---
package: rjm
name: model-pin-evidence.json
slug: model-pin-evidence-json
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

# model-pin-evidence.json

## Definition — verbatim
(used, not defined)
> "`.agents/governance/model-pin-evidence.json`" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 28 | used here | Sidecar configuration file intended to store empirical monitoring data and evidence justifying model pins |

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
defects: unfailable-gate (file contained an empty pins array and was never populated with validation data)

## Design notes
Configuration file name referenced in ADR-039 as governance evidence storage; not an autonomous development lifecycle concept per D-023.
