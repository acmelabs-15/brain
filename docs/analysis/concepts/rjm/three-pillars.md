---
package: rjm
name: three pillars
slug: three-pillars
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# three pillars

## Definition — verbatim
> "the three pillars (logs, metrics, traces) reference. Use it to check that a new path is observable across the relevant pillars, not just one. Logs are timestamped discrete events, metrics are aggregated numeric measurements, and traces follow a request across boundaries." — .claude/skills/review/references/observability.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/observability.md | 52 | used here | Reference guideline establishing logs, metrics, and traces as the three foundational observability pillars for evaluating new code paths. |

## Consumes
Reference documentation `.claude/skills/observability/references/three-pillars-reference.md` and telemetry emitted by new or modified code paths.

## Produces
Evaluations and review feedback confirming that software components emit balanced telemetry across logs, metrics, and traces.

## When applied
Applied during observability review to verify that newly added or altered code paths provide holistic production visibility across all three pillars.

## Sub-concepts
- logs-pillar-1
- metrics-pillar-2
- traces-pillar-3

## Part of
observability

## Implementation status
clean

## Design notes
The core architectural pattern in rjm governing production visibility, requiring systems to combine timestamped discrete event logs, aggregated numeric metrics, and cross-boundary distributed traces rather than relying on a single telemetry dimension.
