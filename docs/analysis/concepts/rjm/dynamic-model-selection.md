---
package: rjm
name: Dynamic Model Selection
slug: dynamic-model-selection
kind: pattern
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Dynamic Model Selection

## Definition — verbatim
(used, not defined)
> "### Option 3: Dynamic Model Selection Per Task" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 182 | used here | Alternative routing strategy considered and rejected in favor of static agent model assignments |

## Consumes
Task prompt characteristics, real-time complexity metrics, and runtime routing rules.

## Produces
Dynamically allocated model selection per invocation.

## When applied
Evaluated during architectural model routing decisions.

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented (rejected in ADR-039)

## Design notes
Dynamic Model Selection is an architectural routing pattern that determines LLM model assignments dynamically at runtime based on task complexity. In ADR-039, this pattern was evaluated and rejected because stable agent usage patterns made static configuration simpler, more maintainable, and less prone to unpredictable billing spikes.
