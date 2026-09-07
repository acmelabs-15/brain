---
package: rjm
name: cohort-based
slug: cohort-based
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/lean-startup.md, sha256: 2dced9a8a71a571271b621d0be2e74299d328252264c6f3cd9f9f81ffa7c91bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# cohort-based

## Definition — verbatim
> "4. Measure with cohort-based, actionable metrics. Track behavior of a defined" — .claude/skills/business-strategy/references/lean-startup.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/lean-startup.md | 44 | defined here | Measurement methodology analyzing user behavior grouped by join date over time to isolate product changes. |

## Consumes
User activity logs partitioned by acquisition date or version onboarding cohorts.

## Produces
Longitudinal retention and engagement comparisons showing whether product updates improve user retention.

## When applied
"Measure with cohort-based, actionable metrics. Track behavior of a defined group over time. Avoid vanity totals (cumulative signups, raw page views) that always go up and prove nothing." — .claude/skills/business-strategy/references/lean-startup.md:44-46

## Sub-concepts
none

## Part of
actionable-metrics, build-measure-learn

## Implementation status
clean

## Design notes
Cohort-based analysis examines the behavior of discrete customer groups segmented by join date across their product lifecycle. In rjm, cohort tracking is mandated over aggregate reporting because only cohort retention curves reveal whether product iterations are genuinely improving user satisfaction over time.
