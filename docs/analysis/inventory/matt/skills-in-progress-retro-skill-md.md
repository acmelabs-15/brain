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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/retro/SKILL.md

## Purpose — required, verbatim
> "Conduct a retrospective on a coding session." — skills/in-progress/retro/SKILL.md:3

## Design intent — required
Provides a structured post-session retrospective protocol to inspect session logs and recommend actionable improvements to the agent's working environment across seven distinct categories (navigation, automated checks, coding standards, global AGENTS.md, tool economy, no-ops, and information access). Codifies an architectural division of labor between implementation and review: implementation agents face heavy context pressure and should not bear coding standards in context, while review agents operate with minimal context pressure on code diffs and should enforce repository conventions via `CODING_STANDARDS.md`.

## Phase — required
none

## Inputs — required
User-specified session or default to current session (`skills/in-progress/retro/SKILL.md:13`), local session logs (`skills/in-progress/retro/SKILL.md:13`), and repository steering files (`CLAUDE.md`, `AGENTS.md`, `CODING_STANDARDS.md`, docs, and skills).

## Outputs — required
Prioritized presentation of candidate environment improvements to the user, ordered by severity (`skills/in-progress/retro/SKILL.md:25`).

## Invokes — required
- skill writing-for-agents — skills/in-progress/retro/SKILL.md:11

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `retro` — skills/in-progress/retro/SKILL.md:2 — defined here
- `retrospective` — skills/in-progress/retro/SKILL.md:7 — defined here
- `environment` — skills/in-progress/retro/SKILL.md:7 — defined here
- `writing-for-agents` — skills/in-progress/retro/SKILL.md:11 — used here
- `Navigation` — skills/in-progress/retro/SKILL.md:17 — defined here
- `navigation pointer` — skills/in-progress/retro/SKILL.md:17 — defined here
- `Automated checks` — skills/in-progress/retro/SKILL.md:18 — defined here
- `Coding standards` — skills/in-progress/retro/SKILL.md:19 — defined here
- `reviewer agent` — skills/in-progress/retro/SKILL.md:19 — defined here
- `Global AGENTS.md` — skills/in-progress/retro/SKILL.md:20 — defined here
- `Tool economy` — skills/in-progress/retro/SKILL.md:21 — defined here
- `No-ops` — skills/in-progress/retro/SKILL.md:22 — defined here
- `Information access` — skills/in-progress/retro/SKILL.md:23 — defined here
- `Implementation vs Review` — skills/in-progress/retro/SKILL.md:29 — defined here
- `context pressure` — skills/in-progress/retro/SKILL.md:31 — defined here
- `implementation agent` — skills/in-progress/retro/SKILL.md:31 — defined here
- `review agent` — skills/in-progress/retro/SKILL.md:33 — defined here
- `CLAUDE.md` — skills/in-progress/retro/SKILL.md:41 — used here
- `AGENTS.md` — skills/in-progress/retro/SKILL.md:41 — used here
- `CODING_STANDARDS.md` — skills/in-progress/retro/SKILL.md:42 — defined here

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
Contains insightful context engineering guidance regarding repo files: `CLAUDE.md`/`AGENTS.md` are pushed to every context window and must be used sparingly solely for navigation pointers; `CODING_STANDARDS.md` should be reserved for review agents rather than implementation agents.

## Context cost
3388 bytes, 45 lines, approximately 650 tokens. Discloses `writing-for-agents` (10886 bytes, ~2600 tokens), for total context cost of ~3250 tokens if loaded.
