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
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/implement-spec/SKILL.md

## Purpose — required, verbatim
> "Implement a specification in code." — skills/in-progress/implement-spec/SKILL.md:3

## Design intent — required
Multi-subagent implementation orchestration framework for delivering a complete specification on a single PR branch. Treats tickets as a dependency-blocked task graph with an active frontier rather than a sequential list. Spawns concurrent implementer subagents in isolated git worktrees, merges completed work back to the PR branch via merger subagents, drives code review, and cleans up worktrees upon completion.

## Phase — required
none

## Inputs — required
- Specification describing how to implement in code (skills/in-progress/implement-spec/SKILL.md:7).
- Tickets associated with the spec forming a task graph with blocking relationships (skills/in-progress/implement-spec/SKILL.md:7, 11).
- Exploration markdown notes saved in an external directory outside repo (skills/in-progress/implement-spec/SKILL.md:21).
- Context pointers to spec, tickets, research notes, and previous commits (skills/in-progress/implement-spec/SKILL.md:13).

## Outputs — required
- Draft PR implementing the entire spec on a single branch and closing spec issues and tickets (skills/in-progress/implement-spec/SKILL.md:9, 23).
- Merged commits on the PR branch (skills/in-progress/implement-spec/SKILL.md:27).
- PR marked ready for review (skills/in-progress/implement-spec/SKILL.md:33).

## Invokes — required
- skill code-review — skills/in-progress/implement-spec/SKILL.md:31

## Invoked by — required
- doc skills/in-progress/README.md — skills/in-progress/README.md:17

## Concepts named — required, verbatim
- `implement-spec` — skills/in-progress/implement-spec/SKILL.md:2 — defined here
- `spec` — skills/in-progress/implement-spec/SKILL.md:7 — used here
- `tickets` — skills/in-progress/implement-spec/SKILL.md:7 — used here
- `task graph` — skills/in-progress/implement-spec/SKILL.md:11 — defined here
- `blocking` — skills/in-progress/implement-spec/SKILL.md:11 — used here
- `frontier` — skills/in-progress/implement-spec/SKILL.md:11 — defined here
- `context pointers` — skills/in-progress/implement-spec/SKILL.md:13 — used here
- `Implementer subagents` — skills/in-progress/implement-spec/SKILL.md:15 — defined here
- `maximum concurrency` — skills/in-progress/implement-spec/SKILL.md:15 — used here
- `exploration subagent` — skills/in-progress/implement-spec/SKILL.md:21 — defined here
- `draft PR` — skills/in-progress/implement-spec/SKILL.md:23 — used here
- `worktree` — skills/in-progress/implement-spec/SKILL.md:25 — used here
- `merger subagent` — skills/in-progress/implement-spec/SKILL.md:27 — defined here
- `/code-review` — skills/in-progress/implement-spec/SKILL.md:31 — used here

## Structure
- Steps — skills/in-progress/implement-spec/SKILL.md:17

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines a role-based subagent architecture: `exploration subagent` (gathers external facts into a directory outside the repository), `implementer subagent` (works concurrently in isolated worktrees on separate branches), and `merger subagent` (merges completed work to the PR branch and recalculates the frontier). Emphasizes sparse communication using context pointers rather than copying context.

## Context cost
2043 bytes, 36 lines, ~450 tokens. Invokes `/code-review` (~2800 tokens). Total ~3250 tokens.
