---
package: rjm
name: Goals
slug: goals
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Goals

## Definition — verbatim
> "State the outcome, not the implementation." — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 9 | defined here | Subsection enumerating target architectural outcomes rather than prescriptive implementation details. |

## Consumes
Stakeholder requirements, functional needs, and quality attributes.

## Produces
Prioritized list of desired business and technical outcomes.

## When applied
Defined in early architecture design to establish success criteria.

## Sub-concepts
outcome-driven-design

## Part of
goals-and-non-goals, architecture

## Implementation status
clean

## Design notes
Goals articulates the fundamental outcomes a system or component must deliver, focusing explicitly on target states rather than implementation mechanisms. By separating desired outcomes from implementation choices, it keeps architectural designs resilient to refactoring while maintaining clear accountability.
