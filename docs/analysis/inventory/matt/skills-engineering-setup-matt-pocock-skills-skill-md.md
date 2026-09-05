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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/SKILL.md

## Purpose — required, verbatim
> "description: \"Configure this repo for the engineering skills: set up its issue tracker, triage label vocabulary, and domain doc layout. Run once before first use of the other engineering skills.\"" — skills/engineering/setup-matt-pocock-skills/SKILL.md:3

## Design intent — required
Scaffolds the repository-level configuration prerequisites that the engineering skills suite relies upon. Executes as a human-invoked (`disable-model-invocation: true`), prompt-driven wizard that explores the current repo (git remotes, existing agent config, domain documentation, monorepo signals, and installed skills), presents findings, and guides the user through five structured steps. Writes configuration documentation files into `docs/agents/` (issue-tracker.md, domain.md, and optionally triage-labels.md) and inserts or updates an `## Agent skills` pointer block in `CLAUDE.md` or `AGENTS.md`.

## Phase — required
matt:engineering

## Inputs — required
Repository git remotes and `.git/config`, `CLAUDE.md` or `AGENTS.md`, `CONTEXT.md` or `CONTEXT-MAP.md`, `docs/adr/`, existing `docs/agents/`, `.scratch/`, monorepo workspace indicators (`pnpm-workspace.yaml`, `package.json`), and user answers during the interactive setup interview.

## Outputs — required
- `docs/agents/issue-tracker.md`
- `docs/agents/domain.md`
- `docs/agents/triage-labels.md` (if `triage` is installed)
- An `## Agent skills` block updated or created in `CLAUDE.md` or `AGENTS.md`

## Invokes — required
- reference issue-tracker-github.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:106
- reference issue-tracker-gitlab.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:107
- reference issue-tracker-local.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:108
- reference triage-labels.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:109
- reference domain.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:110

## Invoked by — required
- doc README.md — README.md:198
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:27
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:90
- doc skills/engineering/README.md — skills/engineering/README.md:13
- skill to-spec — skills/engineering/to-spec/SKILL.md:9
- skill to-tickets — skills/engineering/to-tickets/SKILL.md:11
- skill code-review — skills/engineering/code-review/SKILL.md:13
- skill wayfinder — skills/engineering/wayfinder/SKILL.md:25
- skill triage — skills/engineering/triage/SKILL.md:43
- doc CHANGELOG.md — CHANGELOG.md:115

## Concepts named — required, verbatim
- `setup-matt-pocock-skills` — skills/engineering/setup-matt-pocock-skills/SKILL.md:2 — defined here
- `disable-model-invocation` — skills/engineering/setup-matt-pocock-skills/SKILL.md:4 — defined here
- `Issue tracker` — skills/engineering/setup-matt-pocock-skills/SKILL.md:11 — defined here
- `Triage labels` — skills/engineering/setup-matt-pocock-skills/SKILL.md:12 — defined here
- `Domain docs` — skills/engineering/setup-matt-pocock-skills/SKILL.md:13 — defined here
- `prompt-driven skill` — skills/engineering/setup-matt-pocock-skills/SKILL.md:15 — defined here
- `Explore` — skills/engineering/setup-matt-pocock-skills/SKILL.md:19 — defined here
- `Agent skills` — skills/engineering/setup-matt-pocock-skills/SKILL.md:24 — defined here
- `monorepo` — skills/engineering/setup-matt-pocock-skills/SKILL.md:30 — used here
- `single-context` — skills/engineering/setup-matt-pocock-skills/SKILL.md:30 — defined here
- `multi-context` — skills/engineering/setup-matt-pocock-skills/SKILL.md:61 — defined here
- `Confirm and edit` — skills/engineering/setup-matt-pocock-skills/SKILL.md:63 — defined here
- `Write` — skills/engineering/setup-matt-pocock-skills/SKILL.md:72 — defined here
- `seed templates` — skills/engineering/setup-matt-pocock-skills/SKILL.md:104 — defined here

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
none

## Observations
- Enforces `disable-model-invocation: true`, guaranteeing that setup is invoked only by humans and never autonomously triggered by agent loops.
- Serves as the universal precondition for tracker-integrated engineering skills (`to-spec`, `to-tickets`, `triage`, `code-review`, `wayfinder`).
- Establishes a mutual exclusion rule for harness files: never create `AGENTS.md` when `CLAUDE.md` already exists, and vice versa.

## Context cost
6841 bytes (~1710 tokens). Core repository scaffolding skill specification.
