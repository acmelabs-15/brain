---
package: rjm
name: Haiku 4.5
slug: haiku-4-5
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

# Haiku 4.5

## Definition — verbatim
(used, not defined)
> "| Haiku 4.5 | $1/MTok | $5/MTok | 0.33x |" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 91 | used here | Low-cost, low-latency model tier in the Claude 4.5 family, utilized for high-volume CRUD, pattern matching, and retrieval |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
- three-tier-assignment-model

## Implementation status
clean

## Design notes
Model tier identifier within the Claude 4.5 family; categorized as name-only per D-023.
