---
package: rjm
name: canary deployment
slug: canary-deployment
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

# canary deployment

## Definition — verbatim
(used, not defined)

> "2. Use canary deployment pattern for experiments" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 50 | used here | Blast radius containment rule recommending canary deployment patterns for isolating experiment traffic. |

## Consumes
Canary infrastructure routing rules and traffic splitting mechanisms.

## Produces
Segmented cohort of users or instances exposed to experiment variables without risking the broader fleet.

## When applied
Applied when deploying experiments or new capabilities against live production workloads.

## Sub-concepts
none

## Part of
blast-radius-containment

## Implementation status
defects: missing-path

## Design notes
The canary deployment pattern exposes only a tiny fraction of infrastructure or traffic to experimental turbulence. In RJM's resilience strategy, it guarantees that unforeseen failure cascades remain strictly localized to the canary cohort while preserving general system availability.
