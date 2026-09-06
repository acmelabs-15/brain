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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/implement-spec/SKILL.md

## Purpose — required, verbatim
> "Implement a specification in code." — skills/in-progress/implement-spec/SKILL.md:3

## Design intent — required
Drives automated implementation of an entire specification across multiple tickets into a single unified pull request branch. Rather than executing tickets as a sequential checklist, it models tickets as a task graph with blocking relationships and a dynamic unblocked frontier. Orchestrates parallel background implementer subagents in separate worktrees, merges completed work via merger subagents, executes code review on the resulting PR branch, and cleans up worktrees.

## Phase — required
matt:in-progress

## Inputs — required
- Specification document and associated tickets (`skills/in-progress/implement-spec/SKILL.md:7`).
- Task graph and blocking relationships (`skills/in-progress/implement-spec/SKILL.md:11`).

## Outputs — required
- A single feature branch and draft pull request implementing the entire specification (`skills/in-progress/implement-spec/SKILL.md:9, 23`).
- Subagent markdown exploration notes saved outside the repo (`skills/in-progress/implement-spec/SKILL.md:21`).
- Merged ticket implementations and code review fixes (`skills/in-progress/implement-spec/SKILL.md:27, 31`).

## Invokes — required
- skill /code-review — skills/in-progress/implement-spec/SKILL.md:31

## Invoked by — required
- doc README.md — skills/in-progress/README.md:17

## Concepts named — required, verbatim
- `implement-spec` — skills/in-progress/implement-spec/SKILL.md:2 — defined here
- `spec` — skills/in-progress/implement-spec/SKILL.md:7 — used here
- `tickets` — skills/in-progress/implement-spec/SKILL.md:7 — used here
- `PR` — skills/in-progress/implement-spec/SKILL.md:9 — defined here
- `branch` — skills/in-progress/implement-spec/SKILL.md:9 — used here
- `task graph` — skills/in-progress/implement-spec/SKILL.md:11 — defined here
- `blocking relationships` — skills/in-progress/implement-spec/SKILL.md:11 — defined here
- `frontier` — skills/in-progress/implement-spec/SKILL.md:11 — defined here
- `context pointers` — skills/in-progress/implement-spec/SKILL.md:13 — defined here
- `Implementer subagents` — skills/in-progress/implement-spec/SKILL.md:15 — defined here
- `maximum concurrency` — skills/in-progress/implement-spec/SKILL.md:15 — defined here
- `exploration subagent` — skills/in-progress/implement-spec/SKILL.md:21 — defined here
- `markdown notes` — skills/in-progress/implement-spec/SKILL.md:21 — defined here
- `draft PR` — skills/in-progress/implement-spec/SKILL.md:23 — defined here
- `worktree` — skills/in-progress/implement-spec/SKILL.md:25 — used here
- `merger subagent` — skills/in-progress/implement-spec/SKILL.md:27 — defined here
- `/code-review` — skills/in-progress/implement-spec/SKILL.md:31 — used here
- `ready for review` — skills/in-progress/implement-spec/SKILL.md:33 — defined here

## Structure
- ## Steps — skills/in-progress/implement-spec/SKILL.md:17

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Pioneers explicit multi-subagent coordination architecture: separation between exploration subagents (storing shared markdown notes outside the repository), parallel implementer subagents (operating in isolated git worktrees), and merger subagents.

## Context cost
2043 bytes, 36 lines, ~350 tokens. Invokes `/code-review`.
