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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/SKILL.md

## Purpose — required, verbatim
> "Configure this repo for the engineering skills: set up its issue tracker, triage label vocabulary, and domain doc layout. Run once before first use of the other engineering skills." — skills/engineering/setup-matt-pocock-skills/SKILL.md:3

## Design intent — required
Provides an interactive, prompt-driven onboarding flow to inspect a repository's existing configuration and establish the baseline artifacts assumed by Matt Pocock's engineering skills. Discovers remotes, monorepo indicators, existing instruction files (`CLAUDE.md` / `AGENTS.md`), and installed skills (`triage`). Guides the user through selecting an issue tracker (GitHub, GitLab, Local markdown, or Other), configuring triage labels, and setting up domain documentation layouts (single-context vs multi-context), then writes an `## Agent skills` block into `CLAUDE.md`/`AGENTS.md` and seeds `docs/agents/*.md`.

## Phase — required
matt:Setup

## Inputs — required
Repository starting state: `git remote -v`, `.git/config`, `AGENTS.md`, `CLAUDE.md`, `CONTEXT.md`, `CONTEXT-MAP.md`, `docs/adr/`, `docs/agents/`, `.scratch/`, installed skills directory, and monorepo files (`pnpm-workspace.yaml`, `package.json`); interactive user responses.

## Outputs — required
Updated `## Agent skills` section in `CLAUDE.md` or `AGENTS.md`, plus configuration files in `docs/agents/`: `docs/agents/issue-tracker.md`, `docs/agents/domain.md`, and optional `docs/agents/triage-labels.md`.

## Invokes — required
- template issue-tracker-github.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:106
- template issue-tracker-gitlab.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:107
- template issue-tracker-local.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:108
- template triage-labels.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:109
- template domain.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:110

## Invoked by — required
- skill to-spec — skills/engineering/to-spec/SKILL.md:9
- skill to-tickets — skills/engineering/to-tickets/SKILL.md:11
- skill triage — skills/engineering/triage/SKILL.md:43
- skill wayfinder — skills/engineering/wayfinder/SKILL.md:25
- skill code-review — skills/engineering/code-review/SKILL.md:13
- doc README.md — README.md:198

## Concepts named — required, verbatim
- `setup-matt-pocock-skills` — skills/engineering/setup-matt-pocock-skills/SKILL.md:2 — defined here
- `Issue tracker` — skills/engineering/setup-matt-pocock-skills/SKILL.md:11 — used here
- `Triage labels` — skills/engineering/setup-matt-pocock-skills/SKILL.md:12 — used here
- `Domain docs` — skills/engineering/setup-matt-pocock-skills/SKILL.md:13 — used here
- `git remote -v` — skills/engineering/setup-matt-pocock-skills/SKILL.md:23 — used here
- `AGENTS.md` — skills/engineering/setup-matt-pocock-skills/SKILL.md:24 — used here
- `CLAUDE.md` — skills/engineering/setup-matt-pocock-skills/SKILL.md:24 — used here
- `CONTEXT.md` — skills/engineering/setup-matt-pocock-skills/SKILL.md:25 — used here
- `CONTEXT-MAP.md` — skills/engineering/setup-matt-pocock-skills/SKILL.md:25 — used here
- `docs/adr/` — skills/engineering/setup-matt-pocock-skills/SKILL.md:26 — used here
- `docs/agents/` — skills/engineering/setup-matt-pocock-skills/SKILL.md:27 — used here
- `.scratch/` — skills/engineering/setup-matt-pocock-skills/SKILL.md:28 — used here
- `triage` — skills/engineering/setup-matt-pocock-skills/SKILL.md:29 — used here
- `GitHub` — skills/engineering/setup-matt-pocock-skills/SKILL.md:44 — used here
- `GitLab` — skills/engineering/setup-matt-pocock-skills/SKILL.md:45 — used here
- `Local markdown` — skills/engineering/setup-matt-pocock-skills/SKILL.md:46 — used here
- `single-context` — skills/engineering/setup-matt-pocock-skills/SKILL.md:59 — used here
- `multi-context` — skills/engineering/setup-matt-pocock-skills/SKILL.md:61 — used here
- `## Agent skills` — skills/engineering/setup-matt-pocock-skills/SKILL.md:87 — used here

## Structure
- `# Setup Matt Pocock's Skills` — skills/engineering/setup-matt-pocock-skills/SKILL.md:7
- `## Process` — skills/engineering/setup-matt-pocock-skills/SKILL.md:17
- `### 1. Explore` — skills/engineering/setup-matt-pocock-skills/SKILL.md:19
- `### 2. Present findings and ask` — skills/engineering/setup-matt-pocock-skills/SKILL.md:32
- `### 3. Confirm and edit` — skills/engineering/setup-matt-pocock-skills/SKILL.md:63
- `### 4. Write` — skills/engineering/setup-matt-pocock-skills/SKILL.md:72
- `### 5. Done` — skills/engineering/setup-matt-pocock-skills/SKILL.md:114

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · skills/engineering/setup-matt-pocock-skills/SKILL.md:27 · Checks for existing configuration in `docs/agents/`, but the source repository itself does not ship pre-populated `docs/agents/` files.
- other · skills/engineering/setup-matt-pocock-skills/SKILL.md:57 · Writes label vocabulary to `docs/agents/triage-labels.md` but does not programmatically create the configured labels in the remote tracker (GitHub/GitLab), requiring manual label creation to prevent failures in downstream `triage` execution (documented in docs/engineering/triage.md:74, issue #616).

## Observations
Explicitly marked `disable-model-invocation: true` to prevent automatic model triggering. Acts as the foundational prerequisite configuration for all other engineering skills.

## Context cost
6841 bytes, 117 lines, approximately 1650 tokens.
