---
package: rjm
name: Resource exhaustion
slug: resource-exhaustion
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

# Resource exhaustion

## Definition — verbatim
> "| Resource exhaustion | CPU spike, memory pressure, disk fill |" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 25 | used here | Category of chaos experiments simulating CPU spikes, memory pressure, and disk saturation. |

## Consumes
Hardware resources including CPU cycles, memory allocations, disk storage, and I/O capacity.

## Produces
Artificial hardware saturation testing backpressure, queueing limits, and graceful degradation routines.

## When applied
Applied during stress testing, capacity planning, and resilience verification.

## Sub-concepts
none

## Part of
chaos-engineering

## Implementation status
defects: missing-path

## Design notes
Resource exhaustion tests system behavior when hardware capacities reach saturation limits. In RJM, this experiment pattern verifies that systems shed load, throttle incoming requests, or trigger auto-scaling alerts rather than crashing unceremoniously due to OOM kills or disk fill lockups.
