---
package: matt
path: CLAUDE.md
type: doc
bytes: 3703
unit: inv-matt-3
deprecated: false
aliases:
  - AGENTS.md
memo_inputs:
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CLAUDE.md

## Purpose — required, verbatim
> "Skills are organized into bucket folders under `skills/`:" — CLAUDE.md:1 (no explicit purpose statement)

## Design intent — required
Operational manual and authoring standard for the `mattpocock-skills` repository, configuring agent instructions for Claude Code and (via symlinked `AGENTS.md`) Codex. Establishes the bucket folder hierarchy (`engineering/`, `productivity/`, `misc/`, `in-progress/`, `deprecated/`), defines the boundary for promoted skills that ship in `.claude-plugin/plugin.json` and receive human-facing documentation under `docs/`, enforces dual-harness metadata requirements (`agents/openai.yaml` and invocation policies), mandates maintenance triggers for the `ask-matt` router, documents local symlink setup (`scripts/link-skills.sh`), and sets a binding prose style rule against em-dashes.

## Phase — required
cross-phase

## Inputs — required
Developer or agent modifications to skills, documentation pages, plugin manifests, or harness metadata.

## Outputs — required
Repository authoring constraints, structural guidelines, manifest synchronization requirements, and link script execution instructions.

## Invokes — required
- doc README.md — CLAUDE.md:9
- config .claude-plugin/plugin.json — CLAUDE.md:9
- doc .agents/install-block.md — CLAUDE.md:11
- config .claude-plugin/marketplace.json — CLAUDE.md:11
- doc .agents/adr/0002-ship-as-a-claude-code-plugin.md — CLAUDE.md:11
- doc README.md — CLAUDE.md:13
- file SKILL.md — CLAUDE.md:13
- doc README.md — CLAUDE.md:15
- doc .agents/writing-docs.md — CLAUDE.md:17
- config agents/openai.yaml — CLAUDE.md:19
- doc .agents/invocation.md — CLAUDE.md:19
- skill ask-matt — CLAUDE.md:21
- script scripts/link-skills.sh — CLAUDE.md:23
- doc README.md — CLAUDE.md:25
- doc CHANGELOG.md — CLAUDE.md:25

## Invoked by — required
- doc README.md — README.md:231
- doc CHANGELOG.md — CHANGELOG.md:35
- skill writing-for-agents — skills/productivity/writing-for-agents/SKILL.md:3
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:24
- skill setup-ts-deep-modules — skills/in-progress/setup-ts-deep-modules/SKILL.md:93
- skill retro — skills/in-progress/retro/SKILL.md:41
- doc docs/engineering/wayfinder.md — docs/engineering/wayfinder.md:25
- doc docs/productivity/handoff.md — docs/productivity/handoff.md:56
- doc docs/productivity/grilling.md — docs/productivity/grilling.md:46
- doc docs/productivity/writing-for-agents.md — docs/productivity/writing-for-agents.md:3
- doc docs/engineering/tdd.md — docs/engineering/tdd.md:21
- doc docs/engineering/setup-matt-pocock-skills.md — docs/engineering/setup-matt-pocock-skills.md:7
- doc docs/engineering/ask-matt.md — docs/engineering/ask-matt.md:72

## Concepts named — required, verbatim
- `bucket folders` — CLAUDE.md:1 — defined here
- `engineering/` — CLAUDE.md:3 — defined here
- `productivity/` — CLAUDE.md:4 — defined here
- `misc/` — CLAUDE.md:5 — defined here
- `in-progress/` — CLAUDE.md:6 — defined here
- `deprecated/` — CLAUDE.md:7 — defined here
- `promoted` — CLAUDE.md:9 — defined here
- `Claude Code plugin` — CLAUDE.md:9 — used here
- `single-plugin marketplace` — CLAUDE.md:11 — defined here
- `Codex` — CLAUDE.md:11 — used here
- `User-invoked` — CLAUDE.md:15 — defined here
- `Model-invoked` — CLAUDE.md:15 — defined here
- `docs tree` — CLAUDE.md:17 — defined here
- `user-invoked` — CLAUDE.md:19 — defined here
- `model-invoked` — CLAUDE.md:19 — defined here
- `router` — CLAUDE.md:21 — defined here
- `symlink` — CLAUDE.md:23 — used here
- `em-dashes` — CLAUDE.md:25 — defined here

## Structure
- "Skills are organized into bucket folders under `skills/`:" — CLAUDE.md:1
- `engineering/` — CLAUDE.md:3
- `productivity/` — CLAUDE.md:4
- `misc/` — CLAUDE.md:5
- `in-progress/` — CLAUDE.md:6
- `deprecated/` — CLAUDE.md:7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — CLAUDE.md:25 — Repo-wide rule prohibiting em-dashes in prose is contradicted by numerous existing repo files including CHANGELOG.md and multiple docs.

## Observations
Governs development workflow for the entire repository. Symlinked to `AGENTS.md` (recorded as an EXACT duplicate group in `matt-duplicates.md`), ensuring that agents running under OpenAI Codex consume the identical instruction set as Claude Code.

## Context cost
3703 bytes, 26 lines, approximately 600 tokens.
