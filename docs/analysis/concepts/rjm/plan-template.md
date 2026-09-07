---
package: rjm
name: Plan Template
slug: plan-template
kind: template
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/milestone-planner.md, sha256: 3b318f4cec16f9f23b32fa66f9fe490789eaece08c39e1e5b9a6ae1c37af762d}
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Plan Template

## Definition — verbatim
> "## Plan Template" — .claude/agents/milestone-planner.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 119 | defined here | Standard markdown template for roadmap epic plan documents. |
| templates/agents/milestone-planner.shared.md | 122 | defined here | Shared template section providing the canonical markdown structure for epic planning. |

## Consumes
Epic objectives, decomposed milestones, dependency graphs, cross-milestone risks, open questions, and assumptions.

## Produces
Standardized markdown plan files formatted as `# Plan: [Epic Name]`.

## When applied
Invoked by milestone-planner to generate the final epic plan artifact.

## Sub-concepts
milestone-structure, dependency-graph, risk-documentation

## Part of
milestone-planner

## Implementation status
clean

## Design notes
Plan Template standardizes the structure of epic planning documents across rjm. It enforces that every plan includes an overview, measurable objectives, structured milestone specifications, dependency graph diagrams, cross-cutting risks, open questions, and assumptions, ensuring consistent handoffs to downstream task decomposers.
