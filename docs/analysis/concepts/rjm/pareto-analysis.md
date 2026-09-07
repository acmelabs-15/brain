---
package: rjm
name: pareto_analysis
slug: pareto-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# pareto_analysis

## Definition — verbatim
> "### Lens 8: Pareto Analysis (80/20 Rule)" — .claude/skills/skillforge/references/multi-lens-framework.md:210

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 24 | used here | Utilized as an evaluation lens during the CVA skill specification analysis. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 210 | defined here | Defined as Lens 8 (80/20 Rule) identifying high-leverage features and critical root causes. |

## Consumes
Feature backlogs, complexity drivers, bug lists, architectural requirements.

## Produces
Prioritized focus list isolating the 20% of inputs, features, or components that drive 80% of value or complexity.

## When applied
During feature scoping, triage, and abstraction design to concentrate engineering effort on high-impact areas.

## Sub-concepts
none

## Part of
multi-lens-framework

## Implementation status
defects: doc-drift, missing-path

## Design notes
pareto_analysis (Lens 8 in rjm's multi-lens framework) enforces the 80/20 principle across scoping, specification, and architectural analysis. It directs agents and engineers to isolate the vital few requirements that deliver the majority of user value while pruning marginal capabilities that inflate context and maintenance costs. Without it, projects risk squandering resources on low-value edge cases and over-generalizing systems for minimal return.
