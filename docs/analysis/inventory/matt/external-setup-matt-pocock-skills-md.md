---
package: matt
path: external/setup-matt-pocock-skills.md
type: doc
bytes: 356510
unit: inv-matt-24
deprecated: false
aliases: []
memo_inputs:
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/setup-matt-pocock-skills.md

## Purpose — required, verbatim
> "Set up one repo so the other skills know how it works." — external/setup-matt-pocock-skills.md:24

## Design intent — required
Configures a repository for the entire Matt Pocock engineering skill suite by answering three key operational questions: where issue tickets live, what triage labels are named, and where domain documentation resides. Instead of modifying static skill code or creating machine-local state, it writes these choices into committed Markdown files under `docs/agents/` (`issue-tracker.md`, `domain.md`, `triage-labels.md`) and updates harness instruction files (`CLAUDE.md`/`AGENTS.md`). Downstream skills read these files at runtime, allowing the skill collection to function seamlessly across GitHub, GitLab, local scratch files, or custom trackers without code changes.

## Phase — required
matt:Getting Started

## Inputs — required
Explicit user invocation command `/setup-matt-pocock-skills` (external/setup-matt-pocock-skills.md:29); repository git remote (`git remote`) indicating GitHub or GitLab hosting (external/setup-matt-pocock-skills.md:27, 37); existing agent instruction files (`CLAUDE.md` or `AGENTS.md`) (external/setup-matt-pocock-skills.md:27, 33); existing domain documentation (`CONTEXT.md` or monorepo workspace indicators) (external/setup-matt-pocock-skills.md:27, 37); user confirmation or custom configuration paragraph for non-standard issue tracking (external/setup-matt-pocock-skills.md:27, 41).

## Outputs — required
`docs/agents/issue-tracker.md` specifying issue tracking platform, operations, and wayfinding map conventions (external/setup-matt-pocock-skills.md:25, 33, 70); `docs/agents/domain.md` defining domain documentation structure (single `CONTEXT.md` or monorepo `CONTEXT-MAP.md`) (external/setup-matt-pocock-skills.md:25, 33, 37); `docs/agents/triage-labels.md` defining role-to-label translation mappings when triage is installed (external/setup-matt-pocock-skills.md:33, 50); an `## Agent skills` block appended to `CLAUDE.md` or `AGENTS.md` referencing config files (external/setup-matt-pocock-skills.md:33, 64).

## Invokes — required
- skill triage — external/setup-matt-pocock-skills.md:30
- skill to-spec — external/setup-matt-pocock-skills.md:30
- skill to-tickets — external/setup-matt-pocock-skills.md:30
- skill wayfinder — external/setup-matt-pocock-skills.md:30
- skill domain-modeling — external/setup-matt-pocock-skills.md:70
- skill ask-matt — external/setup-matt-pocock-skills.md:70

## Invoked by — required
none

## Concepts named — required, verbatim
- `prompt-driven skill` — external/setup-matt-pocock-skills.md:27 — defined here
- `non-invokable` — external/setup-matt-pocock-skills.md:29 — defined here
- `CLAUDE.md` — external/setup-matt-pocock-skills.md:33 — used here
- `AGENTS.md` — external/setup-matt-pocock-skills.md:33 — used here
- `CONTEXT.md` — external/setup-matt-pocock-skills.md:37 — used here
- `CONTEXT-MAP.md` — external/setup-matt-pocock-skills.md:37 — used here
- `Local markdown` — external/setup-matt-pocock-skills.md:40 — defined here
- `mapping` — external/setup-matt-pocock-skills.md:50 — defined here
- `run-once setup` — external/setup-matt-pocock-skills.md:70 — defined here

## Structure
- # The /setup-matt-pocock-skills Skill — external/setup-matt-pocock-skills.md:24
- ## What it does — external/setup-matt-pocock-skills.md:24
- ## When to reach for it — external/setup-matt-pocock-skills.md:28
- ## Prerequisites — external/setup-matt-pocock-skills.md:31
- ## The three decisions — external/setup-matt-pocock-skills.md:35
- ## Common questions — external/setup-matt-pocock-skills.md:42
- ## It's working if — external/setup-matt-pocock-skills.md:61
- ## Where it fits — external/setup-matt-pocock-skills.md:69
- ## Install the skills — external/setup-matt-pocock-skills.md:70

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/setup-matt-pocock-skills.md:48: File detection prioritizes `CLAUDE.md` existence over active runtime harness, leaving Codex users with unread configuration unless the block is moved manually to `AGENTS.md`.
- `doc-drift` · external/setup-matt-pocock-skills.md:50: Creates triage label mappings without provisioning labels via CLI (`gh label create`), causing subsequent ticket creation commands for missing labels to fail.
- `doc-drift` · external/setup-matt-pocock-skills.md:46: Contradictory update advice: post-v1.1 guidance states setup must be re-run after updating skills to prevent seed template obsolescence, while closing text suggests re-runs are only required when changing trackers.

## Observations
Represents the web documentation snapshot of `/setup-matt-pocock-skills` from `aihero.dev/skills-setup-matt-pocock-skills`. Focuses on externalizing repository environment settings into committed Markdown configuration files under `docs/agents/` rather than modifying installed skills or depending on machine-local configuration. Explicitly marked `disable-model-invocation: true` to require direct human invocation, and strictly limits configuration scope ('Config is death') to issue tracking, label mapping, and domain docs.

## Context cost
356510 bytes, ~72000 tokens (HTML snapshot including full inline hydration payload).
