---
package: rjm
name: Dependency
slug: dependency
kind: pattern
package_phase: rjm:chaos-experiment
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Dependency

## Definition — verbatim
> "| Dependency | External service unavailable, slow response |" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 26 | used here | Chaos experiment category simulating third-party and upstream service delays or unavailabilities. |

## Consumes
Upstream service APIs, third-party vendor integrations, and downstream database connections.

## Produces
Simulated remote service unresponsiveness, HTTP 500/503 errors, and latency delays from external dependencies.

## When applied
Applied to validate fault isolation, cached fallback data, and fallback UI experiences when secondary services degrade.

## Sub-concepts
none

## Part of
chaos-engineering

## Implementation status
defects: missing-path

## Design notes
Dependency chaos experiments ensure that upstream or third-party service outages do not trigger cascading failures throughout the primary application. RJM uses this pattern to enforce loose coupling and verify that fallback pathways preserve essential user functionality.
