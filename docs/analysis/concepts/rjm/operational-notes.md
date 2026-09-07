---
package: rjm
name: Operational Notes
slug: operational-notes
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Operational Notes

## Definition — verbatim
(used, not defined)

> "## Operational Notes" — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 76 | defined here | Architecture template section documenting deployment frequency, observability paths, and on-call runbooks. |

## Consumes
Deployment automation, monitoring dashboards, log aggregators, and on-call rotation schedules.

## Produces
Operational readiness reference section connecting architectural design to day-two operations.

## When applied
Required final section in ARCHITECTURE.template.md before deploying services to production.

## Sub-concepts
deployment, observability, runbook

## Part of
architecture

## Implementation status
clean

## Design notes
Operational Notes ensures that architectural documentation bridges the gap between software design and production operations. By mandating explicit documentation of deployment cadences, observability dashboards (metrics, logs, traces), and on-call runbook pointers, it guarantees that engineers maintaining the system have immediate access to operational runbooks when incidents occur.
