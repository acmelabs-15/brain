---
package: rjm
name: Team capacity assessment
slug: team-capacity-assessment
kind: technique
package_phase: rjm:Evaluate
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Team capacity assessment

## Definition — verbatim
> "- [ ] Team capacity assessment documented" — .claude/skills/buy-vs-build-framework/SKILL.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/SKILL.md | 141 | defined here | Mandatory exit checklist criterion in Phase 2 requiring documentation of engineering capacity and skill availability. |

## Consumes
Current team staffing levels, engineering competencies, hiring plans, and competing roadmap priorities.

## Produces
Feasibility verdict documenting whether the engineering team can build and maintain the solution.

## When applied
Evaluated during Phase 2 (Cost & Feasibility Analysis) before approving custom build paths.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: missing-path, doc-drift

## Design notes
Team capacity assessment evaluates whether the organization possesses the engineering bandwidth and technical skills necessary to develop and operate a system in-house. It prevents teams from greenlighting custom construction projects that fail due to talent deficits or bandwidth exhaustion.
