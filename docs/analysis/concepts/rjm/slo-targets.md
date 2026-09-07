---
package: rjm
name: SLO TARGETS
slug: slo-targets
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

# SLO TARGETS

## Definition — verbatim
> "3. SLO TARGETS        Set achievable targets" — .claude/skills/slo-designer/SKILL.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/SKILL.md | 113 | defined here | Step 3 of the 6-stage SLO design process setting achievable targets. |

## Consumes
Defined SLIs, historical telemetry baselines, and dependency chain constraints.

## Produces
Quantitative target thresholds (e.g. 99.9% availability, p99 < 200ms) with documented business rationales.

## When applied
Executed as the third stage in the `slo-designer` process following SLI definition.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch

## Design notes
The third phase in the SLO design process setting realistic, achievable performance goals for defined SLIs. It balances user expectations against engineering velocity by avoiding unrealistic targets (like 100% availability) and accounting for external dependency chains.
