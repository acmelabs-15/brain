---
package: addy
name: horizontal slicing
slug: horizontal-slicing
kind: pattern
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

# horizontal slicing

## Definition — verbatim
(used, not defined)

> "**Bad (horizontal slicing):**" — skills/planning-and-task-breakdown/SKILL.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/planning-and-task-breakdown/SKILL.md | 61 | defined here | Warned against as an anti-pattern that builds architectural layers in isolation rather than features |

## Consumes
Decomposed task planning requests, functional specifications.

## Produces
Layer-segregated task lists (e.g., all database schema first, then all API endpoints, then UI) that cannot be verified end-to-end until completion.

## When applied
Identified as an anti-pattern during Step 3 of the planning process when tasks are partitioned by architectural tier rather than feature capability.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
Horizontal slicing is an architectural planning anti-pattern where work is organized strictly by technical tier (database, API, UI) rather than end-to-end user value. In addy, agents are explicitly forbidden from planning horizontally because it delays integration verification until the very end, leaving the system broken and untestable between tasks.
