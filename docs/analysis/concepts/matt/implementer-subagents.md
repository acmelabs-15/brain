---
package: matt
name: implementer subagents
slug: implementer-subagents
kind: role
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# implementer subagents

## Definition — verbatim
> "**Implementer subagents** should be run in the background where possible for **maximum concurrency**." — skills/in-progress/implement-spec/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Explains that implementer subagents run in background worktrees across the ready frontier. |
| skills/in-progress/implement-spec/SKILL.md | 15 | defined here | Defines implementer subagents and dictates background execution for maximum concurrency. |

## Consumes
An unblocked ticket, isolated git worktree, dedicated branch, and context pointers to specifications and notes.

## Produces
Implemented code changes, green test suites, and commits on a ticket-specific feature branch.

## When applied
Spawned in the background by `implement-spec` whenever unblocked tickets are available on the ready frontier.

## Sub-concepts
none

## Part of
implement-spec, subagent

## Implementation status
clean

## Design notes
Dedicated autonomous worker agents in the `implement-spec` workflow. Each implementer subagent is assigned exactly one unblocked ticket and operates inside an isolated git worktree on its own branch, writing code and running tests independently without index or working directory contention.
