---
package: rjm
name: Static assignments
slug: static-assignments
kind: technique
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

# Static assignments

## Definition — verbatim
(used, not defined)

> "Static assignments are simpler to maintain and debug." — .agents/architecture/ADR-039-agent-model-cost-optimization.md:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 184 | defined here | Cited in ADR-039 alternatives analysis as preferable to dynamic routing because agent usage patterns are stable. |

## Consumes
Analysis of agent usage patterns and task requirements across sessions.

## Produces
Fixed model tier mappings in agent configuration definitions.

## When applied
When configuring agent model tiers across the system, opting for predictable static configurations over dynamic routing.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Static model assignments configure each agent role with a predetermined model tier rather than dynamically selecting models per prompt at runtime. In rjm's architecture, this design choice avoids routing overhead, unpredictable billing spikes, and complex runtime fallback logic, relying on stable agent roles where capability requirements are known in advance.
