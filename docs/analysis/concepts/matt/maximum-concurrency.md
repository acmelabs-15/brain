---
package: matt
name: maximum concurrency
slug: maximum-concurrency
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

# maximum concurrency

## Definition — verbatim
> "**Implementer subagents** should be run in the background where possible for **maximum concurrency**." — skills/in-progress/implement-spec/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/implement-spec/SKILL.md | 15 | defined here | Orchestration strategy of executing implementer subagents in background processes across unblocked tickets. |

## Consumes
Multiple independent, unblocked tickets on the active frontier and available subagent execution capacity.

## Produces
Concurrent subagent execution in isolated git worktrees, accelerating completion across the task graph.

## When applied
When tickets become ready on the active frontier in `implement-spec`.

## Sub-concepts
none

## Part of
implement-spec

## Implementation status
clean

## Design notes
In `implement-spec`, maximum concurrency is an execution pattern where orchestrating agents dispatch all ready tickets on the active frontier to parallel background implementer subagents running in isolated worktrees, eliminating serialized bottlenecks across multi-ticket feature implementations.
