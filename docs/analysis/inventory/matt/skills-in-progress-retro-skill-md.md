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
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/retro/SKILL.md

## Purpose — required, verbatim
> "Conduct a retrospective on a coding session." — skills/in-progress/retro/SKILL.md:3

## Design intent — required
Provides an actionable retrospective workflow after a coding session to inspect the coding agent's environment (steering instructions, automated test/lint checks, coding standards, tool calls, and documentation pointers) and propose high-leverage environmental improvements. Establishes the distinction between implementation agents (high context pressure) and review agents (low context pressure), directing coding standards enforcement to the review stage rather than front-loading instructions into global context.

## Phase — required
none

## Inputs — required
- Session logs from the current session or a user-specified prior session (`skills/in-progress/retro/SKILL.md:13`)
- Repository steering files (`CLAUDE.md`, `AGENTS.md`) (`skills/in-progress/retro/SKILL.md:41`)
- Review standards file (`CODING_STANDARDS.md`) (`skills/in-progress/retro/SKILL.md:42`)
- Repository documentation and skill definitions (`skills/in-progress/retro/SKILL.md:43-44`)

## Outputs — required
- Candidates for environment improvement presented to the user in order of severity (`skills/in-progress/retro/SKILL.md:25`)
- Recommended edits to steering files, coding standards, automated checks, or navigation pointers

## Invokes — required
- skill writing-for-agents — skills/in-progress/retro/SKILL.md:11

## Invoked by — required
- doc README.md — skills/in-progress/README.md:18

## Concepts named — required, verbatim
- `retro` — skills/in-progress/retro/SKILL.md:2 — defined here
- `retrospective` — skills/in-progress/retro/SKILL.md:7 — defined here
- `environment` — skills/in-progress/retro/SKILL.md:7 — defined here
- `writing-for-agents` — skills/in-progress/retro/SKILL.md:11 — used here
- `navigation pointer` — skills/in-progress/retro/SKILL.md:17 — defined here
- `automated checks` — skills/in-progress/retro/SKILL.md:18 — defined here
- `coding standards` — skills/in-progress/retro/SKILL.md:19 — defined here
- `reviewer agent` — skills/in-progress/retro/SKILL.md:19 — defined here
- `Global AGENTS.md` — skills/in-progress/retro/SKILL.md:20 — defined here
- `tool economy` — skills/in-progress/retro/SKILL.md:21 — defined here
- `no-ops` — skills/in-progress/retro/SKILL.md:22 — defined here
- `information access` — skills/in-progress/retro/SKILL.md:23 — defined here
- `implementation agent` — skills/in-progress/retro/SKILL.md:31 — defined here
- `context pressure` — skills/in-progress/retro/SKILL.md:31 — defined here
- `review agent` — skills/in-progress/retro/SKILL.md:33 — defined here

## Structure
- `name: retro` — skills/in-progress/retro/SKILL.md:2
- `## Steps` — skills/in-progress/retro/SKILL.md:9
- `## Reference` — skills/in-progress/retro/SKILL.md:27
- `### Implementation vs Review` — skills/in-progress/retro/SKILL.md:29
- `### Files` — skills/in-progress/retro/SKILL.md:37

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · skills/in-progress/README.md:18 bucket README lists retro as "STUB: design notes only, not functional yet", but SKILL.md provides a full 4-step retrospective workflow.
- `missing-path` · skills/in-progress/retro/SKILL.md:42 references `CODING_STANDARDS.md` which does not exist in `sources/matt/`.

## Observations
- Articulates a clear lifecycle separation between implementation and review: implementation agents face maximum context pressure (exploration, drafting, debugging), whereas review agents operate on pre-computed diffs with minimal context pressure, making them the optimal place to enforce standards.
- Recommends keeping `CLAUDE.md`/`AGENTS.md` minimal, acting only as navigation pointers rather than embedding extensive rules.

## Context cost
3388 bytes (~847 tokens) for SKILL.md. When invoking `writing-for-agents` (`skills/productivity/writing-for-agents/SKILL.md`, 5928 bytes), total is ~9316 bytes (~2329 tokens).
