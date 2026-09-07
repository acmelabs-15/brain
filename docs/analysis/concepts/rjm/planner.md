---
package: rjm
name: planner
slug: planner
kind: role
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# planner

## Definition — verbatim
> "Interactive planning and execution for complex tasks." — .claude/skills/planner/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-feasibility-analysis.md | 233 | used here | Assigned as routing destination to revise v0.4.0 plan with updated timeline and session estimates. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 125 | used here | Categorized under Sonnet 4.5 agent tier for balanced capability and execution cost. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 43 | used here | Named as an alternative skill for execution planning after sourcing choices are finalized. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 43 | used here | Referenced as the tool to invoke when execution plans are needed following sourcing decisions. |
| .claude/skills/code-qualities-assessment/SKILL.md | 399 | used here | Highlighted as an integration partner to sequence refactoring targets into actionable milestones. |
| .claude/skills/planner/SKILL.md | 2 | defined here | Defined as an interactive planning and execution skill and agent role. |

## Consumes
High-level feature requirements, architectural decisions (ADRs), or codebase refactoring recommendations.

## Produces
Structured milestone plans with detailed specifications, task breakdowns, and delegation instructions for specialized agents.

## When applied
Invoked when decomposing complex multi-step initiatives into sequenced milestones or executing approved plans through delegation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
The planner in rjm serves as both a specialized planning agent role and an interactive skill. It bridges high-level requirements and concrete implementation by breaking down multi-step projects into verifiable milestones with explicit specifications, and coordinating execution via delegation to specialized subagents.
