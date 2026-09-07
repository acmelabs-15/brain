---
package: matt
name: blocking relationships
slug: blocking-relationships
kind: pattern
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# blocking relationships

## Definition — verbatim
> "The tickets are not a list of steps. They are a **task graph** with blocking relationships between them." — skills/in-progress/implement-spec/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/implement-spec/SKILL.md | 11 | defined here | Defines dependency edges between tickets in a task graph that dictate execution readiness. |

## Consumes
Decomposed implementation tickets and their prerequisite relationships.

## Produces
A directed acyclic dependency structure that determines which tickets remain blocked and which belong to the unblocked frontier.

## When applied
When decomposing a specification into tickets and evaluating ticket readiness during `implement-spec` execution.

## Sub-concepts
none

## Part of
task-graph, implement-spec

## Implementation status
clean

## Design notes
In `implement-spec`, blocking relationships represent dependency edges between implementation tickets in a task graph. By modeling dependencies explicitly rather than relying on a linear checklist, blocking relationships ensure implementer subagents work only on tickets whose prerequisites have merged, unlocking parallel execution across the unblocked frontier.
