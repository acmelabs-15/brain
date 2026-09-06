---
package: addy
name: runbook
slug: runbook
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# runbook

## Definition — verbatim
> "It links to a runbook" — skills/observability-and-instrumentation/SKILL.md:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/observability-and-instrumentation/SKILL.md | 153 | defined here | Mandatory alert component providing immediate operational context, diagnostic queries, and escalation paths. |

## Consumes
Production alerting rules, operational diagnostics, initial queries, and escalation procedures.

## Produces
A concise, actionable procedural guide enabling on-call engineers to triage and mitigate incidents.

## When applied
Mandatory link attached to every production alert definition.

## Sub-concepts
none

## Part of
- observability-and-instrumentation

## Implementation status
clean

## Design notes
An essential operational artifact attached to production alerts that details what the symptom means, the first diagnostic query to execute, and the escalation path, preventing cognitive thrashing during emergencies.
