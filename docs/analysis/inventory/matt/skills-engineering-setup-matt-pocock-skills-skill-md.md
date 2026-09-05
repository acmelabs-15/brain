---
package: matt
path: skills/engineering/setup-matt-pocock-skills/SKILL.md
type: skill
bytes: 6841
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/SKILL.md

## Purpose — required, verbatim
> "Configure this repo for the engineering skills: set up its issue tracker, triage label vocabulary, and domain doc layout. Run once before first use of the other engineering skills." — skills/engineering/setup-matt-pocock-skills/SKILL.md:3

## Design intent — required
Foundational repository setup skill that configures the operational environment for the entire `matt` engineering skill suite. Rather than embedding hardcoded tracker endpoints or directory layouts into individual skills, this prompt-driven skill inspects repository signals (git remotes, monorepo markers, existing docs), prompts the user through three core configuration decisions (issue tracker, triage labels, domain docs), writes persistent declarative Markdown configuration files to `docs/agents/`, and inserts an `## Agent skills` pointer block into `CLAUDE.md` or `AGENTS.md`. Enforces `disable-model-invocation: true` to prevent unrequested autonomous reconfigurations.

## Phase — required
none

## Inputs — required
Repository signals: `git remote -v`, `.git/config`, `AGENTS.md`, `CLAUDE.md`, `CONTEXT.md`, `CONTEXT-MAP.md`, `docs/adr/`, `src/*/docs/adr/`, `docs/agents/`, `.scratch/`, installed skills list (specifically checking if `triage` is installed), monorepo signals (`pnpm-workspace.yaml`, `workspaces` in `package.json`, `packages/*/src/`); user confirmations.

## Outputs — required
Committed configuration files: `docs/agents/issue-tracker.md`, `docs/agents/domain.md`, `docs/agents/triage-labels.md` (if `triage` is installed), and an `## Agent skills` block updated or appended in `CLAUDE.md` or `AGENTS.md`.

## Invokes — required
- skill triage — skills/engineering/setup-matt-pocock-skills/SKILL.md:29
- skill to-tickets — skills/engineering/setup-matt-pocock-skills/SKILL.md:40
- skill to-spec — skills/engineering/setup-matt-pocock-skills/SKILL.md:40
- doc issue-tracker-github.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:106
- doc issue-tracker-gitlab.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:107
- doc issue-tracker-local.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:108
- doc triage-labels.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:109
- doc domain.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:110

## Invoked by — required
- doc README.md — README.md:198
- doc skills/engineering/README.md — skills/engineering/README.md:13
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:90
- skill to-spec — skills/engineering/to-spec/SKILL.md:9
- skill to-tickets — skills/engineering/to-tickets/SKILL.md:11
- skill triage — skills/engineering/triage/SKILL.md:43
- skill wayfinder — skills/engineering/wayfinder/SKILL.md:25
- skill code-review — skills/engineering/code-review/SKILL.md:13

## Concepts named — required, verbatim
- `setup-matt-pocock-skills` — skills/engineering/setup-matt-pocock-skills/SKILL.md:2 — defined here
- `disable-model-invocation` — skills/engineering/setup-matt-pocock-skills/SKILL.md:4 — defined here
- `Issue tracker` — skills/engineering/setup-matt-pocock-skills/SKILL.md:11 — defined here
- `GitHub` — skills/engineering/setup-matt-pocock-skills/SKILL.md:11 — used here
- `local markdown` — skills/engineering/setup-matt-pocock-skills/SKILL.md:11 — defined here
- `Triage labels` — skills/engineering/setup-matt-pocock-skills/SKILL.md:12 — defined here
- `triage roles` — skills/engineering/setup-matt-pocock-skills/SKILL.md:12 — defined here
- `Domain docs` — skills/engineering/setup-matt-pocock-skills/SKILL.md:13 — defined here
- `CONTEXT.md` — skills/engineering/setup-matt-pocock-skills/SKILL.md:13 — used here
- `ADRs` — skills/engineering/setup-matt-pocock-skills/SKILL.md:13 — used here
- `triage` — skills/engineering/setup-matt-pocock-skills/SKILL.md:29 — used here
- `GitLab` — skills/engineering/setup-matt-pocock-skills/SKILL.md:45 — used here
- `Other` — skills/engineering/setup-matt-pocock-skills/SKILL.md:47 — defined here
- `needs-triage` — skills/engineering/setup-matt-pocock-skills/SKILL.md:57 — used here
- `needs-info` — skills/engineering/setup-matt-pocock-skills/SKILL.md:57 — used here
- `ready-for-agent` — skills/engineering/setup-matt-pocock-skills/SKILL.md:57 — used here
- `ready-for-human` — skills/engineering/setup-matt-pocock-skills/SKILL.md:57 — used here
- `wontfix` — skills/engineering/setup-matt-pocock-skills/SKILL.md:57 — used here
- `single-context` — skills/engineering/setup-matt-pocock-skills/SKILL.md:59 — defined here
- `multi-context` — skills/engineering/setup-matt-pocock-skills/SKILL.md:61 — defined here
- `CONTEXT-MAP.md` — skills/engineering/setup-matt-pocock-skills/SKILL.md:61 — used here
- `CLAUDE.md` — skills/engineering/setup-matt-pocock-skills/SKILL.md:76 — used here
- `AGENTS.md` — skills/engineering/setup-matt-pocock-skills/SKILL.md:77 — used here
- `Agent skills` — skills/engineering/setup-matt-pocock-skills/SKILL.md:87 — defined here

## Structure
- Process — skills/engineering/setup-matt-pocock-skills/SKILL.md:17
- 1. Explore — skills/engineering/setup-matt-pocock-skills/SKILL.md:19
- 2. Present findings and ask — skills/engineering/setup-matt-pocock-skills/SKILL.md:32
- 3. Confirm and edit — skills/engineering/setup-matt-pocock-skills/SKILL.md:63
- 4. Write — skills/engineering/setup-matt-pocock-skills/SKILL.md:72
- 5. Done — skills/engineering/setup-matt-pocock-skills/SKILL.md:114

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · docs/engineering/setup-matt-pocock-skills.md:63 · Checks whether `CLAUDE.md` exists rather than detecting active harness, resulting in editing `CLAUDE.md` on Codex harnesses when a legacy Claude file exists.
- doc-drift · docs/engineering/setup-matt-pocock-skills.md:67 · Generates mapping table in `triage-labels.md` without creating corresponding label entities in GitHub/GitLab, causing initial wayfinder issue creations to fail if labels are missing.

## Observations
Enforces human-in-the-loop setup via `disable-model-invocation: true`. Anchors all per-repo configuration into git-tracked Markdown files rather than user-level dotfiles or proprietary harness stores.

## Context cost
6841 bytes, 117 lines, ~1400 tokens. Loads no external files directly (references local templates).
