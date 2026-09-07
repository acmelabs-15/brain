---
package: rjm
name: Error Budget
slug: error-budget
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Error Budget

## Definition — verbatim
> "| **Error Budget** | Allowed failures before SLO breach. | 0.1% = 43 min/month downtime |" — .claude/skills/slo-designer/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 7 | used here | Table column header in the Pattern Selection Guide showing monthly allowed downtime per service archetype. |
| .claude/skills/slo-designer/SKILL.md | 49 | defined here | Defined in the Core Concepts table as the allowed failures before an SLO breach occurs. |
| .claude/skills/slo-designer/SKILL.md | 116 | defined here | Stage 4 of the 6-stage SLO design lifecycle responsible for calculating allowed failures. |

## Consumes
Target SLO percentage and time window duration.

## Produces
Quantified allowance of acceptable failures or downtime (e.g., minutes per month or failed request budget).

## When applied
During phase 4 of the SLO design lifecycle, and continuously monitored during service operations to govern release velocity.

## Sub-concepts
burn-rate, error-budget-policy

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch, orphan

## Design notes
An Error Budget quantifies the margin of acceptable service unreliability (100% minus SLO target) over a rolling window, converting reliability targets into an operational currency that balances feature velocity against system stability.
