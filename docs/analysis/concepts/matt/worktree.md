---
package: matt
name: worktree
slug: worktree
kind: technique
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

# worktree

## Definition — verbatim
(used, not defined)
> "Each implementer subagent should work in its own worktree, on its own branch." — skills/in-progress/implement-spec/SKILL.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/implement-spec/SKILL.md | 25 | used here | Execution environment providing isolated checkouts for concurrent implementer subagents. |

## Consumes
Git repository and dedicated branch per ticket.

## Produces
Isolated working directory for ticket implementation without index or file contention.

## When applied
Created when launching implementer subagents on ready frontier tickets, and removed during final cleanup.

## Sub-concepts
none

## Part of
implement-spec

## Implementation status
clean

## Design notes
The git worktree isolation mechanism used by implement-spec to enable concurrent background subagent execution. Allocating an independent worktree to each implementer subagent prevents git lock contention, working directory collisions, and intermediate state interference during parallel ticket execution.
