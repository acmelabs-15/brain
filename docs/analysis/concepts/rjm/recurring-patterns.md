---
package: rjm
name: Recurring Patterns
slug: recurring-patterns
kind: pattern
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Recurring Patterns

## Definition — verbatim
> "### Recurring Patterns" — .claude/skills/retrospective/references/frameworks.md:290

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 290 | defined here | Table in Patterns and Shifts activity tracking recurring behavioral patterns across sessions. |

## Consumes
Multi-session execution data, incident logs, or task execution histories.

## Produces
Structured inventory of recurring patterns with frequency, impact rating, and category.

## When applied
Applied during the Patterns and Shifts activity in Phase 1 for multi-session or multi-execution analysis.

## Sub-concepts
none

## Part of
patterns-and-shifts

## Implementation status
clean

## Design notes
Recurring Patterns identifies persistent behavioral tendencies or repetitive failure modes across multiple sessions. Tracking these patterns over time allows teams to recognize structural problems that transcend individual tasks and warrant strategic intervention.
