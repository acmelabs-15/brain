---
package: rjm
name: Incident response
slug: incident-response
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
  - {path: .claude/skills/observability/references/three-pillars-reference.md, sha256: 63be0738d54cfdc95c4c4190a3f4bf85375759061d8b4d32deed110f28d5526b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Incident response

## Definition — verbatim
(used, not defined)

> "- **Incident response**: Chaos validates runbooks and recovery procedures" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 60 | used here | SRE integration mapping highlighting that chaos exercises validate incident response runbooks and recovery procedures. |
| .claude/skills/observability/references/three-pillars-reference.md | 92 | used here | Operational scenario table row pairing incident response with traces and logs for root cause analysis. |

## Consumes
Operational alert notifications, telemetry data (logs and traces), and disaster recovery runbooks.

## Produces
Service mitigation actions, root cause analyses, and updated operational recovery procedures.

## When applied
Triggered during operational service disruptions or scheduled disaster recovery drills.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Incident response defines the operational procedures for triaging, diagnosing, and mitigating system outages. In RJM, it links observability telemetry directly to recovery runbooks, with chaos experiments serving to proactively validate and train these response mechanisms.
