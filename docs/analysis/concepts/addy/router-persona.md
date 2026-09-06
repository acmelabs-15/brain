---
package: addy
name: Router persona
slug: router-persona
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Router persona

## Definition — verbatim
> "A persona whose job is to decide which other persona to call." — references/orchestration-patterns.md:286

## Also called — verbatim
`meta-orchestrator` — references/orchestration-patterns.md:284

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 284 | defined here | Anti-pattern catalog entry identifying meta-orchestrator personas that route user requests to other personas |

## Consumes
User intent or requests that could be mapped directly via slash commands or AGENTS.md

## Produces
Superfluous paraphrasing turns, latency, token overhead, and potential information distortion

## When applied
Cataloged as an anti-pattern to avoid when designing slash commands and agent workflows

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
The router persona is cataloged in addy as a primary multi-agent anti-pattern. Creating a persona whose sole purpose is to classify user intent and delegate to other specialist personas introduces unnecessary paraphrasing hops, doubles token costs, causes context degradation, and removes user agency, whereas direct slash commands and documented intent mappings achieve cleaner, cheaper execution.
