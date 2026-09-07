---
package: rjm
name: Google SRE best practices
slug: google-sre-best-practices
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

# Google SRE best practices

## Definition — verbatim
(used, not defined)

> "Reference patterns for common service types based on Google SRE best practices." — .claude/skills/slo-designer/references/slo-design-patterns.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 3 | used here | Cited as the authoritative external methodology governing SLO design patterns and multi-window burn rate alert rules. |

## Consumes
System architecture and critical user journey telemetry.

## Produces
Quantitative SLIs, error budgets, and multi-window burn rate alert thresholds.

## When applied
When defining service reliability targets, measuring availability and latency metrics, and setting error budget policies.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
Google SRE best practices provides the foundational reliability engineering discipline across rjm's service monitoring tools, establishing user-centric SLIs, quantitative error budgets, and multi-window burn rate alerting rather than unscientific uptime commitments.
