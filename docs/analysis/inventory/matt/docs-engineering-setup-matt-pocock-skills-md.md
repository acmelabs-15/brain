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
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/setup-matt-pocock-skills.md

## Purpose — required, verbatim
> "`setup-matt-pocock-skills` answers three questions about one repo: where issues live, what the triage labels are called, and where the domain docs sit. It records the answers as markdown files under `docs/agents/`." — docs/engineering/setup-matt-pocock-skills.md:3

## Design intent — required
Isolates repository-specific operational configuration from skill logic by externalizing issue tracker location, triage label mappings, and domain documentation paths into committed markdown files under `docs/agents/`. Allows skills to remain completely identical across repositories, adapting to GitHub, GitLab, local markdown (`.scratch/`), or arbitrary tracker systems (Jira, Linear, Azure DevOps via prose description) purely through run-time reads of `docs/agents/issue-tracker.md` without modifying any skill files.

## Phase — required
matt:engineering

## Inputs — required
Repository git remote URL (`git remote`), existing instruction files (`CLAUDE.md`, `AGENTS.md`), existing `CONTEXT.md` / ADRs, user interactive confirmations, and external issue tracker workflows.

## Outputs — required
Committed markdown files: `docs/agents/issue-tracker.md`, `docs/agents/domain.md`, `docs/agents/triage-labels.md` (when triage skill is installed), and an `## Agent skills` block appended to `CLAUDE.md` or `AGENTS.md`.

## Invokes — required
- doc triage — docs/engineering/setup-matt-pocock-skills.md:13
- doc to-spec — docs/engineering/setup-matt-pocock-skills.md:13
- doc to-tickets — docs/engineering/setup-matt-pocock-skills.md:13
- doc wayfinder — docs/engineering/setup-matt-pocock-skills.md:13
- doc domain-modeling — docs/engineering/setup-matt-pocock-skills.md:94
- doc ask-matt — docs/engineering/setup-matt-pocock-skills.md:94

## Invoked by — required
none

## Concepts named — required, verbatim
- `setup-matt-pocock-skills` — docs/engineering/setup-matt-pocock-skills.md:3 — defined here
- `agent` — docs/engineering/setup-matt-pocock-skills.md:11 — used here
- `MCP` — docs/engineering/setup-matt-pocock-skills.md:49 — used here
- `grilling` — docs/engineering/setup-matt-pocock-skills.md:72 — used here
- `run-once setup` — docs/engineering/setup-matt-pocock-skills.md:94 — defined here
- `tickets` — docs/engineering/setup-matt-pocock-skills.md:94 — used here

## Structure
- ## What it does — docs/engineering/setup-matt-pocock-skills.md:1
- ## When to reach for it — docs/engineering/setup-matt-pocock-skills.md:9
- ## Prerequisites — docs/engineering/setup-matt-pocock-skills.md:15
- ## The three decisions — docs/engineering/setup-matt-pocock-skills.md:28
- ## Common questions — docs/engineering/setup-matt-pocock-skills.md:51
- ## It's working if — docs/engineering/setup-matt-pocock-skills.md:84
- ## Where it fits — docs/engineering/setup-matt-pocock-skills.md:92

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · docs/engineering/setup-matt-pocock-skills.md:61-63 documents harness detection defect where `CLAUDE.md` existence causes agent instructions to be written to `CLAUDE.md` even when running under Codex.
- `missing-path` · docs/engineering/setup-matt-pocock-skills.md:65-70 documents label omission defect where `docs/agents/triage-labels.md` maps labels but does not execute `gh label create` to create them in GitHub, causing subsequent `gh` issue creation commands to fail.

## Observations
Represents Matt's anti-configuration philosophy ("Config is death"), keeping configuration minimal, repository-local, and inspectable in human-readable Markdown rather than structured dotfiles or global configurations. Supports solo and offline projects by treating local markdown issues under `.scratch/` as a first-class issue tracker.

## Context cost
9359 bytes (~2340 tokens).
