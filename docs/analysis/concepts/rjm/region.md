---
package: rjm
name: "Region"
slug: region
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

# Region

## Definition — verbatim
> "| Region | Simulate region or availability zone failure |" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 27 | used here | Large-scale chaos experiment category simulating region or availability zone outages. |

## Consumes
Multi-region or multi-availability zone cloud architecture and DNS routing configurations.

## Produces
Simulated total loss of a cloud availability zone or geographical region to verify global failover.

## When applied
Applied during disaster recovery drills and high-availability architecture validation.

## Sub-concepts
none

## Part of
chaos-engineering

## Implementation status
defects: missing-path

## Design notes
Region failure tests catastrophe-level resilience by blackholing an entire cloud region or availability zone. In RJM, this pattern validates that DNS geo-routing, database cross-region replication, and automated traffic shift mechanisms maintain customer availability despite macro infrastructure outages.
