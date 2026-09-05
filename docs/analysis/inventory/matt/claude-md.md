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
verified: 2026-09-05 quote-check+coverage
---

# CLAUDE.md

## Purpose — required, verbatim
> "Skills are organized into bucket folders under `skills/`:" — CLAUDE.md:1
(first substantive paragraph; no explicit purpose statement)

## Design intent — required
Governing configuration and maintenance manual for Claude Code agent interactions in the `matt` repository (also linked as `AGENTS.md` for Codex parity). Mandates directory organization across five buckets (`engineering/`, `productivity/`, `misc/`, `in-progress/`, `deprecated/`), defines promotion requirements into `.claude-plugin/plugin.json` and `README.md`, enforces human-facing documentation page creation under `docs/` and synchronization with the `ask-matt` router, defines the user-invoked vs. model-invoked execution split across Claude Code and Codex, specifies local installation script maintenance (`scripts/link-skills.sh`), and imposes a strict prose prohibition against em-dashes. Without this file, developers and agents modifying skills would violate package promotion invariants, cause documentation drift, misconfigure harness execution policies, or break marketplace publishing rules.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- doc README.md — CLAUDE.md:9
- config .claude-plugin/plugin.json — CLAUDE.md:9
- doc .agents/install-block.md — CLAUDE.md:11
- config .claude-plugin/marketplace.json — CLAUDE.md:11
- doc .agents/adr/0002-ship-as-a-claude-code-plugin.md — CLAUDE.md:11
- doc .agents/writing-docs.md — CLAUDE.md:17
- doc .agents/invocation.md — CLAUDE.md:19
- skill ask-matt — CLAUDE.md:21
- script scripts/link-skills.sh — CLAUDE.md:23

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:35
- doc CHANGELOG.md — CHANGELOG.md:36
- doc CHANGELOG.md — CHANGELOG.md:90
- doc README.md — README.md:231
- skill writing-for-agents — skills/productivity/writing-for-agents/SKILL.md:3
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:24

## Concepts named — required, verbatim
- `engineering/` — CLAUDE.md:3 — defined here
- `productivity/` — CLAUDE.md:4 — defined here
- `misc/` — CLAUDE.md:5 — defined here
- `in-progress/` — CLAUDE.md:6 — defined here
- `deprecated/` — CLAUDE.md:7 — defined here
- `promoted` — CLAUDE.md:9 — defined here
- `skills` — CLAUDE.md:9 — used here
- `User-invoked` — CLAUDE.md:15 — used here
- `Model-invoked` — CLAUDE.md:15 — used here
- `What it does` — CLAUDE.md:17 — used here
- `When to reach for it` — CLAUDE.md:17 — used here
- `Common questions` — CLAUDE.md:17 — used here
- `It's working if` — CLAUDE.md:17 — used here
- `disable-model-invocation` — CLAUDE.md:19 — used here
- `allow_implicit_invocation` — CLAUDE.md:19 — used here
- `router` — CLAUDE.md:21 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction — CLAUDE.md:25: mandates "No em-dashes anywhere in this repo's prose (SKILL.md files, docs, README.md, CHANGELOG.md, ADRs, changesets, code comments)", but historical sections of `CHANGELOG.md` lines 191-264 contain numerous em-dashes.

## Observations
Serves as the primary operational instruction file for Claude Code agents, with `AGENTS.md` maintained as an exact symlink (`fa8a2aaf79ca544e`) to provide Codex with identical repository instructions. Distinguishes promoted buckets (`engineering/` and `productivity/`) that ship in `.claude-plugin/plugin.json` and get docs pages at `https://aihero.dev/skills-<name>` from non-promoted buckets (`misc/`, `in-progress/`, `deprecated/`) that do not ship in the plugin and receive no docs pages. Establishes that router skills like `ask-matt` must be updated whenever any user-reachable skill is added, renamed, or modified.

## Context cost
3703 bytes, 26 lines, approximately 750 tokens.
