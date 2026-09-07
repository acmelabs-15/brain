---
package: rjm
name: Error Budget Policy
slug: error-budget-policy
kind: technique
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

# Error Budget Policy

## Definition — verbatim
> "### Error Budget Policy" — .claude/skills/slo-designer/SKILL.md:319

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 222 | used here | Cited in the anti-patterns section warning that defining SLOs without an error budget policy makes metrics meaningless. |
| .claude/skills/slo-designer/SKILL.md | 319 | defined here | Defined as the agreed rules governing engineering actions when error budget is exhausted versus healthy. |

## Consumes
Current error budget balance and burn rate trajectory.

## Produces
Operational decisions (feature freezes and reliability investments when exhausted; accelerated experimentation and risk acceptance when healthy).

## When applied
When error budgets are depleted below agreed thresholds or during regular sprint planning and release triage.

## Sub-concepts
error-budget

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch, orphan

## Design notes
An Error Budget Policy defines formal organizational rules balancing development velocity against stability, specifying concrete engineering shifts (such as feature freezes or technical debt sprints) when budgets are exhausted.
