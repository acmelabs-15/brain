---
package: rjm
name: ALERTING
slug: alerting
kind: phase
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

# ALERTING

## Definition — verbatim
> "5. ALERTING           Define burn rate alerts" — .claude/skills/slo-designer/SKILL.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/SKILL.md | 119 | defined here | Step 5 of the 6-stage SLO design process defining burn rate alerts. |

## Consumes
Calculated error budgets and operational escalation procedures.

## Produces
Burn rate alerting rules and multi-window alert logic separating pages from tickets.

## When applied
Executed as the fifth stage in the `slo-designer` process prior to final documentation.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch

## Design notes
The operational alerting phase in the SLO design process configuring proactive notifications based on budget consumption rate rather than instantaneous error spikes. It prevents alert fatigue by distinguishing between fast-burning emergencies requiring immediate pages and slow burns handled via ticketing.
