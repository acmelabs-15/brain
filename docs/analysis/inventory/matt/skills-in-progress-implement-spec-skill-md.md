---
package: matt
path: skills/in-progress/implement-spec/SKILL.md
type: skill
bytes: 2043
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/implement-spec/SKILL.md

## Purpose — required, verbatim
> "Implement a specification in code." — skills/in-progress/implement-spec/SKILL.md:3

## Design intent — required
Coordinates the concurrent implementation of an approved specification by modeling its implementation tickets as a dependency-blocked task graph rather than a sequential list. Dispatches autonomous background implementer subagents across the unblocked ticket frontier, giving each subagent its own isolated git worktree and branch. Integrates completed ticket branches using a dedicated merger subagent, maintains sparse subagent communication through context pointers, runs an automated code review pass across the consolidated PR branch, and cleans up temporary worktrees before final review submission.

## Phase — required
none

## Inputs — required
- Specification document and associated implementation tickets defining dependency blocking relationships (task graph)
- Target repository codebase, branch state, and git worktrees

## Outputs — required
- Unified feature branch and draft GitHub pull request that marks the spec issue and tickets as closed
- Integrated commits produced by implementer subagents and merged by merger subagents
- Post-implementation code review fixes and clean git worktree state

## Invokes — required
- command /code-review — skills/in-progress/implement-spec/SKILL.md:31

## Invoked by — required
- doc README.md — skills/in-progress/README.md:17

## Concepts named — required, verbatim
- `implement-spec` — skills/in-progress/implement-spec/SKILL.md:2 — defined here
- `spec` — skills/in-progress/implement-spec/SKILL.md:7 — used here
- `tickets` — skills/in-progress/implement-spec/SKILL.md:7 — used here
- `task graph` — skills/in-progress/implement-spec/SKILL.md:11 — defined here
- `frontier` — skills/in-progress/implement-spec/SKILL.md:11 — defined here
- `context pointers` — skills/in-progress/implement-spec/SKILL.md:13 — defined here
- `Implementer subagents` — skills/in-progress/implement-spec/SKILL.md:15 — defined here
- `exploration subagent` — skills/in-progress/implement-spec/SKILL.md:21 — defined here
- `worktree` — skills/in-progress/implement-spec/SKILL.md:25 — used here
- `merger subagent` — skills/in-progress/implement-spec/SKILL.md:27 — defined here

## Structure
- `## Steps` — skills/in-progress/implement-spec/SKILL.md:17

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines a multi-subagent division of labor: exploration subagent (writes shared markdown notes outside the repo), implementer subagents (build tickets concurrently in isolated git worktrees), and merger subagents (integrate branches into the PR branch).
- Emphasizes sparse communication via context pointers (paths, commits, ticket URLs) to minimize context pollution and token expenditure across parallel subagent instances.

## Context cost
2043 bytes (~511 tokens). Compact 36-line multi-agent orchestration procedure.
