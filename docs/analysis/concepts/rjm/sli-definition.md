---
package: rjm
name: SLI DEFINITION
slug: sli-definition
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

# SLI DEFINITION

## Definition — verbatim
> "2. SLI DEFINITION     Select measurable indicators" — .claude/skills/slo-designer/SKILL.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/SKILL.md | 110 | defined here | Step 2 of the 6-stage SLO design process selecting measurable indicators. |

## Consumes
Critical user journeys and system architectural context from Step 1 (Discovery).

## Produces
Selected Service Level Indicators across availability, latency, throughput, error rate, and correctness.

## When applied
Executed as the second stage in the `slo-designer` process.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch

## Design notes
The second phase in the SLO design process where designers and agents map critical user journeys to concrete, quantifiable metrics. Selecting specific indicators prevents metric bloat and ensures reliability targets measure user-impacting behavior.
