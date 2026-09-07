---
package: rjm
name: Three-Tier Assignment Model
slug: three-tier-assignment-model
kind: pattern
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

# Three-Tier Assignment Model

## Definition — verbatim
> "### Three-Tier Assignment Model" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 112 | defined here | Architectural decision partitioning agents into Opus, Sonnet, and Haiku tiers to optimize API expenditure |

## Consumes
Agent role definitions, token consumption patterns, and operational reasoning requirements.

## Produces
Tiered model assignments across agent configuration files.

## When applied
Applied when designing or updating agent system rosters to balance reasoning depth with API cost.

## Sub-concepts
- opus-4-5
- sonnet-4-5
- haiku-4-5

## Part of
none

## Implementation status
defects: doc-drift, unfailable-gate (ADR-039 model assignments were reverted incidentally without formal validation)

## Design notes
The Three-Tier Assignment Model is an architectural strategy in rjm that organizes agent personas into distinct capability classes (high-reasoning code generation, structured analysis and coordination, and high-frequency CRUD/retrieval). This pattern ensures that expensive frontier models are reserved strictly for high-stakes generation tasks while routing routine tasks to cost-effective alternatives.
