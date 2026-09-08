---
package: rjm
name: complexity-based model routing
slug: complexity-based-model-routing
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# complexity-based model routing

## Definition — verbatim
> "complexity-based model routing. The orchestrator selects stronger or weaker AI" — templates/agents/backlog-generator.shared.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/backlog-generator.shared.md | 100 | defines | Pattern where task title size labels (`[XS]` through `[XXL]`) drive automatic delegation to tiered LLM models based on estimated difficulty. |

## Consumes
Task scope, estimated difficulty, and bracketed size labels (`[XS]`, `[S]`, `[M]`, `[L]`, `[XL]`, `[XXL]`).

## Produces
Optimized model selection decisions delegating simpler tasks to faster, lighter models and complex work to stronger reasoning tiers.

## When applied
Evaluated by the orchestrator when selecting subagents and model configurations for scheduled backlog tasks.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An orchestration optimization pattern that pairs task complexity ratings with proportional model capability, balancing inference cost, execution latency, and reasoning depth.
