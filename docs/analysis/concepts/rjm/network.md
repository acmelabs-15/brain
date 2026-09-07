---
package: rjm
name: "Network"
slug: network
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

# Network

## Definition — verbatim
> "| Network | Partition, latency injection, packet loss, DNS failure |" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 24 | used here | Category of chaos experiments testing partitions, latency injection, packet loss, and DNS failure. |

## Consumes
Network communication channels, service endpoints, and DNS resolution infrastructure.

## Produces
Simulated connectivity disruptions, elevated packet loss, network latency spikes, or partition boundaries.

## When applied
Applied to evaluate network timeouts, circuit breakers, retry strategies with exponential backoff, and distributed consensus handling.

## Sub-concepts
none

## Part of
chaos-engineering

## Implementation status
defects: missing-path

## Design notes
Network failures represent a pervasive hazard in distributed architectures. In RJM's chaos testing methodology, the network category ensures services handle transient drops, partition events, and DNS outages gracefully without deadlocking or exhausting connection pools.
