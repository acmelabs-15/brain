---
package: addy
name: Deep persona trees
slug: deep-persona-trees
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Deep persona trees

## Definition — verbatim
> "`/ship` calls a `pre-ship-coordinator` that calls a `quality-coordinator` that calls `code-reviewer`." — references/orchestration-patterns.md:332

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 330 | defines | Cataloged as an anti-pattern involving multi-tier nested hierarchical persona delegations |

## Consumes
Complex multi-agent coordination topologies

## Produces
Architectural boundary constraint restricting orchestration depth to at most 1 (slash command -> personas)

## When applied
When designing hierarchical agent workflows or coordinator agents

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
An orchestration anti-pattern describing multi-level nested delegation hierarchies among coordinator personas. Deep trees introduce latency and token bloat without decision value, degrade context through compounding summarizations, and make workflow failures difficult to trace.
