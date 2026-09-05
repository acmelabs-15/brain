---
package: matt
path: skills/in-progress/retro/SKILL.md
type: skill
bytes: 3388
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/retro/SKILL.md

## Purpose — required, verbatim
> "Conduct a retrospective on a coding session." — skills/in-progress/retro/SKILL.md:3

## Design intent — required
Analyzes past agent coding sessions to discover concrete opportunities for improving the agent's development environment. Rather than attempting ad-hoc prompt tweaks during code generation, it categorizes session friction into seven systematic targets: navigation pointers, automated checks (linters, typecheckers, tests), reviewer agent coding standards, global AGENTS.md hygiene, tool economy, no-ops in steering instructions, and information access (such as log teeing). Ranks candidates by severity to keep steering minimal and maintain low context pressure on implementation agents.

## Phase — required
none

## Inputs — required
- Session logs on the local machine for a user-specified session or current session (skills/in-progress/retro/SKILL.md:13).
- Repository steering and standards files (`CLAUDE.md`, `AGENTS.md`, `CODING_STANDARDS.md`, docs, skills) (skills/in-progress/retro/SKILL.md:39-44).

## Outputs — required
- Ranked list of improvement candidates presented to the user in order of severity (skills/in-progress/retro/SKILL.md:25).

## Invokes — required
- skill writing-for-agents — skills/in-progress/retro/SKILL.md:11

## Invoked by — required
- doc skills/in-progress/README.md — skills/in-progress/README.md:18

## Concepts named — required, verbatim
- `retro` — skills/in-progress/retro/SKILL.md:2 — defined here
- `retrospective` — skills/in-progress/retro/SKILL.md:7 — defined here
- `environment` — skills/in-progress/retro/SKILL.md:7 — used here
- `writing-for-agents` — skills/in-progress/retro/SKILL.md:11 — used here
- `navigation pointer` — skills/in-progress/retro/SKILL.md:17 — defined here
- `automated checks` — skills/in-progress/retro/SKILL.md:18 — used here
- `coding standards` — skills/in-progress/retro/SKILL.md:19 — used here
- `reviewer agent` — skills/in-progress/retro/SKILL.md:19 — defined here
- `AGENTS.md` — skills/in-progress/retro/SKILL.md:20 — used here
- `Tool economy` — skills/in-progress/retro/SKILL.md:21 — defined here
- `No-ops` — skills/in-progress/retro/SKILL.md:22 — defined here
- `Information access` — skills/in-progress/retro/SKILL.md:23 — defined here
- `context pressure` — skills/in-progress/retro/SKILL.md:31 — defined here
- `CLAUDE.md` — skills/in-progress/retro/SKILL.md:41 — used here
- `CODING_STANDARDS.md` — skills/in-progress/retro/SKILL.md:42 — used here

## Structure
- Steps — skills/in-progress/retro/SKILL.md:9
- Reference — skills/in-progress/retro/SKILL.md:27
- Implementation vs Review — skills/in-progress/retro/SKILL.md:29
- Files — skills/in-progress/retro/SKILL.md:37

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly establishes the architectural principle that implementation agents bear high context pressure (exploration, writing code, debugging) whereas review agents bear low context pressure (reviewing diffs). Consequently, coding standards should be placed on the reviewer agent rather than burdening the implementation agent's context window.

## Context cost
3388 bytes, 45 lines, ~750 tokens. Loads `writing-for-agents` (skills/productivity/writing-for-agents/SKILL.md: 3236 bytes).
