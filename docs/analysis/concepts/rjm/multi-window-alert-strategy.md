---
package: rjm
name: Multi-Window Alert Strategy
slug: multi-window-alert-strategy
kind: pattern
package_phase: rjm:spec
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

# Multi-Window Alert Strategy

## Definition — verbatim
(used, not defined)

> "### Multi-Window Alert Strategy" — .claude/skills/slo-designer/references/slo-design-patterns.md:247

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 247 | defined here | Reference pattern specifying multi-window burn rate alert conditions and actions. |

## Consumes
Burn rate measurements across multiple evaluation windows (1h, 6h, 24h) and error budget policies.

## Produces
Configured alert rules routing severe rapid burns to pages and gradual burns to tickets or backlogs.

## When applied
Applied during the alerting design phase of service reliability engineering.

## Sub-concepts
none

## Part of
slo-design-patterns

## Implementation status
defects: orphan

## Design notes
An alerting pattern that evaluates error budget burn rate over multiple concurrent time windows (e.g. 1-hour and 6-hour windows for paging) to ensure alerts trigger only for significant, sustained budget consumption while suppressing false alarms from transient spikes.
