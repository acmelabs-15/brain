---
package: rjm
name: explainers
slug: explainers
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# explainers

## Definition — verbatim
(used, not defined)

> "| `references/explainers-and-intents.md` | Write explainers before work, use intents as permission gates |" — .claude/skills/planner/SKILL.md:292

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 292 | used here | Architectural reference prescribing writing explainer documents before initiating implementation work. |

## Consumes
Problem statement, user requirements, and technical constraints.

## Produces
A written explanatory document detailing architectural goals, context, and expected behaviors before work begins.

## When applied
Authored prior to beginning code modifications to clarify intent and communicate context.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift

## Design notes
A concise pre-implementation document designed to communicate context, architectural approach, and rationale before initiating engineering work to prevent misunderstandings and misaligned implementations.
