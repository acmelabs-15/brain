---
package: addy
name: meta-orchestrator
slug: meta-orchestrator
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# meta-orchestrator

## Definition — verbatim
> "A persona whose job is to decide which other persona to call." — references/orchestration-patterns.md:286

## Also called — verbatim
> "Router persona" — references/orchestration-patterns.md:284

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agents.md | 81 | defines | Illustrated as an invalid orchestration anti-pattern that creates unnecessary routing layers and token overhead |
| references/orchestration-patterns.md | 284 | defines | Prohibited anti-pattern category explaining why routing personas fail and what to do instead |

## Consumes
User requests routed through an intermediary model before reaching the actual specialized persona.

## Produces
Paraphrasing loss, double token costs, and increased latency without adding domain value.

## When applied
Prohibited anti-pattern; never to be applied.

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
The meta-orchestrator is an explicit anti-pattern in addy, rejected because a model-based routing persona introduces token overhead and prompt distortion compared to direct user slash commands and deterministic intent matching.
