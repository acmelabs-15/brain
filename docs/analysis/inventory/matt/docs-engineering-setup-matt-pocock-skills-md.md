---
package: matt
path: docs/engineering/setup-matt-pocock-skills.md
type: doc
bytes: 9359
unit: inv-matt-6
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/setup-matt-pocock-skills.md

## Purpose — required, verbatim
> "answers three questions about one repo: where issues live, what the triage labels are called, and where the domain docs sit. It records the answers as markdown files under `docs/agents/`." — docs/engineering/setup-matt-pocock-skills.md:3

## Design intent — required
Documentation detailing the configuration mechanism that anchors the entire `matt` engineering skill suite to a repository. Rather than hard-coding GitHub-specific or monorepo-specific assumptions into individual skills, the prompt-driven setup skill writes declarative markdown files to `docs/agents/` (`issue-tracker.md`, `domain.md`, `triage-labels.md`) and configures `CLAUDE.md` / `AGENTS.md`. This decouples skills from tracker implementations and enables support for GitLab, local markdown, Jira, Linear, and custom MCP integrations without modifying skill files.

## Phase — required
none

## Inputs — required
Repository environment signals (`git remote`, existing `CLAUDE.md` or `AGENTS.md`, existing `CONTEXT.md`), installed skills list (specifically checking if `triage` is installed), user confirmations.

## Outputs — required
Markdown files committed to the target repository: `docs/agents/issue-tracker.md`, `docs/agents/domain.md`, `docs/agents/triage-labels.md` (if triage installed), and an `## Agent skills` pointer block appended to `CLAUDE.md` or `AGENTS.md`.

## Invokes — required
- skill triage — docs/engineering/setup-matt-pocock-skills.md:13
- skill to-spec — docs/engineering/setup-matt-pocock-skills.md:13
- skill to-tickets — docs/engineering/setup-matt-pocock-skills.md:13
- skill wayfinder — docs/engineering/setup-matt-pocock-skills.md:13
- skill domain-modeling — docs/engineering/setup-matt-pocock-skills.md:94
- skill ask-matt — docs/engineering/setup-matt-pocock-skills.md:94

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `setup-matt-pocock-skills` — docs/engineering/setup-matt-pocock-skills.md:3 — defined here
- `agent` — docs/engineering/setup-matt-pocock-skills.md:11 — used here
- `Issue tracker` — docs/engineering/setup-matt-pocock-skills.md:34 — defined here
- `Triage labels` — docs/engineering/setup-matt-pocock-skills.md:35 — defined here
- `Domain docs` — docs/engineering/setup-matt-pocock-skills.md:36 — defined here
- `GitHub` — docs/engineering/setup-matt-pocock-skills.md:42 — used here
- `GitLab` — docs/engineering/setup-matt-pocock-skills.md:43 — used here
- `Local markdown` — docs/engineering/setup-matt-pocock-skills.md:44 — defined here
- `Other` — docs/engineering/setup-matt-pocock-skills.md:45 — defined here
- `MCP` — docs/engineering/setup-matt-pocock-skills.md:49 — used here
- `harness` — docs/engineering/setup-matt-pocock-skills.md:63 — used here
- `grilling` — docs/engineering/setup-matt-pocock-skills.md:72 — used here
- `tickets` — docs/engineering/setup-matt-pocock-skills.md:94 — used here
- `ADRs` — docs/engineering/setup-matt-pocock-skills.md:94 — used here

## Structure
- What it does
- When to reach for it
- Prerequisites
- The three decisions
- Common questions
- It's working if
- Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · docs/engineering/setup-matt-pocock-skills.md:63 · Checks whether `CLAUDE.md` exists rather than detecting active harness, resulting in editing `CLAUDE.md` on Codex harnesses when a legacy Claude file exists.
- doc-drift · docs/engineering/setup-matt-pocock-skills.md:67 · Generates mapping table in `triage-labels.md` without creating corresponding label entities in GitHub/GitLab, causing initial wayfinder issue creations to fail if labels are missing.

## Observations
Reflects Matt Pocock's design philosophy that "Config is death": per-user preferences are avoided in favor of opinionated skills, while repo-level variances are stored strictly in human-readable and git-committed Markdown files under `docs/agents/` rather than in global harness configs like `~/.claude`.

## Context cost
9359 bytes, ~2200 tokens. Loads no external files.
