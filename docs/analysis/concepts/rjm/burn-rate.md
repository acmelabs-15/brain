---
package: rjm
name: Burn Rate
slug: burn-rate
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Burn Rate

## Definition — verbatim
> "Speed of error budget consumption." — .claude/skills/slo-designer/SKILL.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/SKILL.md | 50 | defined here | Core concept table defining burn rate as the speed of error budget consumption. |

## Consumes
Error budget percentage and active failure rate.

## Produces
Burn rate factor (1x, 2x, 6x, 14.4x, 36x) and time-to-exhaustion projections.

## When applied
Monitored continuously during production operations and used to trigger tiered alerts.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch

## Design notes
Burn Rate measures the speed at which an error budget is consumed relative to normal operation (e.g. 1x burn consumes the entire budget over 30 days, while 14.4x consumes it in 50 hours). In rjm, burn rate calculation drives tiered operational alerting (Warning, Elevated, Urgent, Critical, Emergency).
