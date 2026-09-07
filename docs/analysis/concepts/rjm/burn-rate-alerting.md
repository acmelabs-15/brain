---
package: rjm
name: Burn Rate Alerting
slug: burn-rate-alerting
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

# Burn Rate Alerting

## Definition — verbatim
(used, not defined)

> "## Burn Rate Alerting" — .claude/skills/slo-designer/SKILL.md:228

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/SKILL.md | 228 | defined here | Section prescribing alert configuration rules and multi-window conditions based on budget consumption velocity. |

## Consumes
Calculated error budgets and burn rate thresholds.

## Produces
Tiered severity actions (Warning, Elevated, Urgent, Critical, Emergency) and multi-window alert logic.

## When applied
Applied during Step 5 (Alerting) of the SLO design process.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch

## Design notes
A core SRE alerting technique that triggers notifications based on how quickly the error budget is being consumed rather than instantaneous threshold crossings. In rjm, it combines multi-window logic (evaluating both short and long burn windows) to achieve high alert precision with zero false alarms.
