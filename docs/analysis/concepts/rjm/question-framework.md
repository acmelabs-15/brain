---
package: rjm
name: Question Framework
slug: question-framework
kind: checklist
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

# Question Framework

## Definition — verbatim
(used, not defined)

> "## Question Framework" — .claude/skills/slo-designer/SKILL.md:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/SKILL.md | 161 | defined here | Section detailing a 5-part structured interview framework for gathering SLO requirements. |

## Consumes
Unstructured user or service requirements.

## Produces
Structured answers covering Service Context, User Journeys, Current State, Infrastructure, and Targets.

## When applied
Applied during the discovery phase of SLO design to collect necessary inputs before specifying SLIs.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch

## Design notes
A structured 5-part diagnostic framework in `slo-designer` guiding agents and developers through interrogating service context, critical user journeys, current telemetry baselines, infrastructure constraints, and target tolerances. It ensures all necessary inputs are gathered systematically before defining metrics.
