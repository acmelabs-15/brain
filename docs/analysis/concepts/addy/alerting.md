---
package: addy
name: Alerting
slug: alerting
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Alerting

## Definition — verbatim
> "Alert on **symptoms users feel**, not on causes:" — skills/observability-and-instrumentation/SKILL.md:139

## Also called — verbatim
`Alerting` — references/observability-checklist.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/observability-checklist.md | 11 | defined here | Checklist section mandating symptom-based alerting, runbook linkage, test-firing, and a two-severity limit |
| skills/observability-and-instrumentation/SKILL.md | 137 | defined here | Process step establishing actionable symptom-based alerting rules, SLO justifications, runbooks, and page/ticket tiers |

## Consumes
SLOs, production metric streams, error rates, latency thresholds, and operational runbooks

## Produces
Actionable, symptom-based notifications routed to page or ticket queues with runbook remediation steps

## When applied
When establishing production monitoring rules prior to feature launch

## Sub-concepts
runbook

## Part of
observability-checklist, observability-and-instrumentation

## Implementation status
clean

## Design notes
Alerting in addy focuses strictly on user-impacting symptoms rather than internal technical causes to avoid alert fatigue. By restricting notifications to two actionable tiers (immediate page vs. weekly ticket), requiring every alert to link to a tested runbook, and basing thresholds on SLOs rather than speculation, it guarantees that engineers are only woken when user experience is actively compromised.
