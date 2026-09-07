---
package: rjm
name: Chain reaction
slug: chain-reaction
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Chain reaction

## Definition — verbatim
> "**Chain reaction**: a slow node makes its peers absorb its load, the peers slow down, and the chain consumes the cluster." — .claude/skills/software-engineering-library/references/release-it.md:222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 222 | defined here | Defined as a stability anti-pattern where an impaired node causes excess load to shift to peer nodes, progressively bringing down the entire cluster. |

## Consumes
Dynamic load balancers, horizontal worker pools, and automated failover mechanisms without load shedding.

## Produces
Cluster-wide overload and sequential peer failure.

## When applied
Identified and defended against during review of load distribution, scaling policies, and worker group allocations.

## Sub-concepts
none

## Part of
stability-anti-pattern

## Implementation status
defects: missing-path

## Design notes
An anti-pattern where the slowdown or failure of one worker causes its peers to absorb its diverted traffic, leading the peers to saturate and fail sequentially. Bounded capacity, early load shedding, and bulkhead isolation in rjm prevent chain reactions from consuming server or worker clusters.
