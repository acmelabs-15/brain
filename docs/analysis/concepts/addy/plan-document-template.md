---
package: addy
name: Plan Document Template
slug: plan-document-template
kind: template
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/planning-and-task-breakdown/SKILL.md, sha256: ed0f90cc5951ddd4bcab7f871f64efec93a49af9279ef93bc470da77ad8da3f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Plan Document Template

## Definition — verbatim
(used, not defined)

> "## Plan Document Template" — skills/planning-and-task-breakdown/SKILL.md:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/planning-and-task-breakdown/SKILL.md | 166 | defined here | Standardizes the structure of the implementation plan written to tasks/plan.md |

## Consumes
Feature requirements, architecture decisions, dependency graph, sequenced task lists.

## Produces
The implementation plan document saved to `tasks/plan.md`.

## When applied
When generating the high-level plan document summarizing architectural decisions, phased task lists, and risk mitigations.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
The plan document template standardizes the documentation of architectural decisions, risk analyses, open questions, and ordered task phases at `tasks/plan.md`. By separating narrative design rationale from the actionable task list target, it preserves project context across agent sessions and compaction events.
