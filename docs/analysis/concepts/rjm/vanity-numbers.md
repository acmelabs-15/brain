---
package: rjm
name: Vanity numbers
slug: vanity-numbers
kind: pattern
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

# Vanity numbers

## Definition — verbatim
> "Vanity numbers hide the truth." — .claude/skills/business-strategy/references/lean-startup.md:19-20

## Also called — verbatim
`vanity totals` — .claude/skills/business-strategy/references/lean-startup.md:45

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/lean-startup.md | 19 | defined here | Warned against as deceptive aggregate metrics (such as cumulative registrations or raw pageviews) that disguise flat retention. |

## Consumes
Aggregate, cumulative activity logs that fail to segment users into cohorts over time.

## Produces
Superficial growth statistics that present an illusion of venture progress without validating genuine customer demand.

## When applied
Identified as an anti-pattern during metric review when cumulative counts are used in place of cohort retention data.

## Sub-concepts
none

## Part of
lean-startup

## Implementation status
clean

## Design notes
Vanity numbers are cumulative or unsegmented metrics (such as total registered users or hit counts) that monotonically increase over time without revealing whether users are returning or finding value. In rjm's lifecycle, calling them out prevents engineering teams from conflating marketing volume with true product-market validation.
