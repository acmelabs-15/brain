---
package: rjm
path: .claude/skills/planner/references/DEVELOPMENT.md
type: reference
bytes: 3945
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/references/DEVELOPMENT.md, sha256: 06ad9674244d722217cba611a0fb84777898c72b107bcc9e70513e9f7eeee7bf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/references/DEVELOPMENT.md

## Purpose — required, verbatim
> "Planning skill with resources that must stay synced with agent prompts." — .claude/skills/planner/references/DEVELOPMENT.md:5

## Design intent — required
Documents the synchronization protocol between the planner skill's authoritative resource files (`plan-format.md`, `temporal-contamination.md`, `diff-format.md`, `default-conventions.md`) and downstream agent prompts that embed those resources 1:1. It provides an index of the planner skill's files, outlines the four-tier priority hierarchy for decision backing, and defines grep-based verification checks to prevent doc-code drift across prompts.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill SKILL.md — .claude/skills/planner/references/DEVELOPMENT.md:11
- script scripts/planner.py — .claude/skills/planner/references/DEVELOPMENT.md:12
- skill resources/plan-format.md — .claude/skills/planner/references/DEVELOPMENT.md:13
- skill resources/temporal-contamination.md — .claude/skills/planner/references/DEVELOPMENT.md:14
- skill resources/diff-format.md — .claude/skills/planner/references/DEVELOPMENT.md:15
- skill resources/default-conventions.md — .claude/skills/planner/references/DEVELOPMENT.md:16

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Resource Sync Requirements` — .claude/skills/planner/references/DEVELOPMENT.md:18 — defined here
- `plan-format.md` — .claude/skills/planner/references/DEVELOPMENT.md:25 — used here
- `temporal-contamination.md` — .claude/skills/planner/references/DEVELOPMENT.md:32 — used here
- `diff-format.md` — .claude/skills/planner/references/DEVELOPMENT.md:43 — used here
- `default-conventions.md` — .claude/skills/planner/references/DEVELOPMENT.md:53 — used here
- `Four-tier priority hierarchy` — .claude/skills/planner/references/DEVELOPMENT.md:63 — defined here
- `user-specified` — .claude/skills/planner/references/DEVELOPMENT.md:65 — defined here
- `doc-derived` — .claude/skills/planner/references/DEVELOPMENT.md:66 — defined here
- `default-derived` — .claude/skills/planner/references/DEVELOPMENT.md:67 — defined here
- `assumption` — .claude/skills/planner/references/DEVELOPMENT.md:68 — defined here
- `Sync Verification` — .claude/skills/planner/references/DEVELOPMENT.md:70 — defined here

## Structure
# skills/planner/ — .claude/skills/planner/references/DEVELOPMENT.md:1
## Overview — .claude/skills/planner/references/DEVELOPMENT.md:3
## Index — .claude/skills/planner/references/DEVELOPMENT.md:7
## Resource Sync Requirements — .claude/skills/planner/references/DEVELOPMENT.md:18
### plan-format.md — .claude/skills/planner/references/DEVELOPMENT.md:25
### temporal-contamination.md — .claude/skills/planner/references/DEVELOPMENT.md:32
### diff-format.md — .claude/skills/planner/references/DEVELOPMENT.md:43
### default-conventions.md — .claude/skills/planner/references/DEVELOPMENT.md:53
## Sync Verification — .claude/skills/planner/references/DEVELOPMENT.md:70

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` · .claude/skills/planner/references/DEVELOPMENT.md:1 · File resides under `references/` but is not referenced or invoked by `.claude/skills/planner/SKILL.md` or any other in-scope file.
- `missing-path` · .claude/skills/planner/references/DEVELOPMENT.md:38 · Target agent file `agents/technical-writer.md` does not exist in the repository.
- `missing-path` · .claude/skills/planner/references/DEVELOPMENT.md:39 · Target agent file `agents/quality-reviewer.md` does not exist in the repository.
- `missing-path` · .claude/skills/planner/references/DEVELOPMENT.md:49 · Target agent file `agents/developer.md` does not exist in the repository.
- `missing-path` · .claude/skills/planner/references/DEVELOPMENT.md:76 · Directory pattern `agents/*.md` does not exist in the repository.

## Observations
Explains an architectural trade-off: `SKILL.md` references resources directly because the primary Claude session can read files, but agent prompts embed resources 1:1 because sub-agents cannot access files reliably.

## Context cost
3945 bytes, approximately 950 tokens.
