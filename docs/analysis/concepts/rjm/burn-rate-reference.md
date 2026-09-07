---
package: rjm
name: Burn Rate Reference
slug: burn-rate-reference
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Burn Rate Reference

## Definition — verbatim
> "## Burn Rate Reference" — .claude/skills/slo-designer/references/slo-design-patterns.md:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 234 | defined here | Section heading introducing the lookup table for standard error budget burn rates and multi-window alerting strategies. |

## Consumes
Current error consumption rate and measurement window duration.

## Produces
Standardized burn rate thresholds (1x to 72x) and multi-window alert triggers (page, ticket, backlog).

## When applied
When designing or tuning alert thresholds based on error budget consumption velocity.

## Sub-concepts
none

## Part of
slo-design-patterns

## Implementation status
defects: orphan

## Design notes
The Burn Rate Reference provides a standard lookup table translating error consumption velocity (from 1x to 72x) into time-to-exhaustion projections and multi-window alerting conditions, ensuring engineers page on rapid outages while ticketing slow burns.
