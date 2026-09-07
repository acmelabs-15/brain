---
package: rjm
name: Circuit Breakers
slug: circuit-breakers
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Circuit Breakers

## Definition — verbatim
> "1. **Circuit Breakers**: Fail fast when dependency is down" — .claude/skills/slo-designer/references/slo-design-patterns.md:197

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 197 | used here | Listed as a dependency chain mitigation strategy to fail fast when downstream services become unavailable. |

## Consumes
Dependency failure rates and response timeout telemetry.

## Produces
Automated circuit tripping to halt outbound calls and return fast failures or fallback responses.

## When applied
When calling remote or external services that may experience sustained outages.

## Sub-concepts
none

## Part of
dependency-chain-patterns

## Implementation status
defects: orphan

## Design notes
Circuit Breakers protect calling systems from resource exhaustion by failing fast when a dependency fails repeatedly, avoiding thread starvation and giving impaired downstream systems time to recover.
