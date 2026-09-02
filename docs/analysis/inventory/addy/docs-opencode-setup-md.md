---
package: addy
path: docs/opencode-setup.md
type: doc
bytes: 9547
unit: inv-addy-5
---

# docs/opencode-setup.md

## Purpose — required, verbatim
> "This guide explains how to use Agent Skills with OpenCode. The reusable assets are the markdown skills in the `skills/` directory; the root `AGENTS.md` file in this repository is repo-scoped and should not be copied into other projects." — docs/opencode-setup.md:3

## Design intent — required
Comprehensive setup and architectural integration guide for OpenCode, establishing two distinct operational models: an agent-driven workflow (automatic skill routing via project-local `AGENTS.md` and the native `skill` tool) and an optional command-driven workflow (`.opencode/commands/*.md`). Clarifies the architectural distinction between repo-scoped configuration (`addyosmani/agent-skills/AGENTS.md`) and reusable skills assets, defines discovery paths across `.opencode`, `.claude`, and `.agents`, provides an end-to-end `AGENTS.md` template with intent-to-skill and lifecycle mapping, and addresses transitive dependency handling for shared `references/`.

## Phase — required
`none`

## Inputs — required
- `skills/` directory / individual skill directories — docs/opencode-setup.md:3, 61, 91
- `skills/spec-driven-development` — docs/opencode-setup.md:33, 68, 116, 160, 168, 209
- `skills/incremental-implementation` — docs/opencode-setup.md:69, 116, 159, 170
- `skills/test-driven-development` — docs/opencode-setup.md:116, 159, 170
- `skills/planning-and-task-breakdown` — docs/opencode-setup.md:117, 169, 193
- `skills/debugging-and-error-recovery` — docs/opencode-setup.md:118, 161, 171, 221
- `skills/code-review-and-quality` — docs/opencode-setup.md:119, 162, 172, 232
- `skills/code-simplification` — docs/opencode-setup.md:120
- `skills/api-and-interface-design` — docs/opencode-setup.md:121
- `skills/frontend-ui-engineering` — docs/opencode-setup.md:122
- `skills/shipping-and-launch` — docs/opencode-setup.md:173
- `references/` directory — docs/opencode-setup.md:45, 250
- `CONTRIBUTING.md#repo-scoped-files` — docs/opencode-setup.md:136
- `AGENTS.md` (root, repo-scoped) — docs/opencode-setup.md:3, 19, 92, 96, 136, 259
- `CLAUDE.md` (root, repo-scoped) — docs/opencode-setup.md:92

## Outputs — required
- Project-local `.opencode/skills/<name>/SKILL.md` — docs/opencode-setup.md:41, 60, 108, 144, 254
- User/global `~/.config/opencode/skills/<name>/SKILL.md` — docs/opencode-setup.md:75, 145, 254
- Cross-compatible paths `.claude/skills/<name>/SKILL.md`, `~/.claude/skills/`, `.agents/skills/`, `~/.agents/skills/` — docs/opencode-setup.md:83-86, 146-149
- Project-local `AGENTS.md` (system prompt template) — docs/opencode-setup.md:94-134, 255
- Optional command definitions `.opencode/commands/*.md` (e.g. `.opencode/commands/plan.md`) — docs/opencode-setup.md:175-197, 257

## Invokes — required
- tool skill / `skill({ name: "<skill-name>" })` — docs/opencode-setup.md:9, 107, 129, 240
- skill spec-driven-development — docs/opencode-setup.md:33, 68, 116, 160, 168, 209
- skill incremental-implementation — docs/opencode-setup.md:69, 116, 159, 170
- skill test-driven-development — docs/opencode-setup.md:116, 159, 170
- skill planning-and-task-breakdown — docs/opencode-setup.md:117, 169, 193
- skill debugging-and-error-recovery — docs/opencode-setup.md:118, 161, 171, 221
- skill code-review-and-quality — docs/opencode-setup.md:119, 162, 172, 232
- skill code-simplification — docs/opencode-setup.md:120
- skill api-and-interface-design — docs/opencode-setup.md:121
- skill frontend-ui-engineering — docs/opencode-setup.md:122
- skill shipping-and-launch — docs/opencode-setup.md:173
- doc CONTRIBUTING.md#repo-scoped-files — docs/opencode-setup.md:136

## Invoked by — required
- README.md:158

## Concepts named — required, verbatim
- `OpenCode` — docs/opencode-setup.md:1, 3, 7, 36, 38, 55, 81, 88, 96, 101, 134, 142, 166, 196, 237, 249, 256 — used here
- `Agent Skills` — docs/opencode-setup.md:3, 7, 101 — used here
- `Agent-driven workflow` — docs/opencode-setup.md:9 — defined here
- `Command-driven workflow` — docs/opencode-setup.md:10 — defined here
- `skill` — docs/opencode-setup.md:9, 107, 129, 240 — defined here | used here
- `skills CLI` — docs/opencode-setup.md:16 — used here
- `npx skills` — docs/opencode-setup.md:21, 23, 26, 27, 33, 36, 254 — used here
- `Project-local installation` — docs/opencode-setup.md:57 — defined here
- `Global installation` — docs/opencode-setup.md:73 — defined here
- `Cross-compatible paths` — docs/opencode-setup.md:79 — defined here
- `Repo-scoped files` — docs/opencode-setup.md:136, 137, 259 — defined here
- `Core Rules` — docs/opencode-setup.md:105 — defined here
- `Intent → Skill Mapping` — docs/opencode-setup.md:112 — defined here
- `Execution Model` — docs/opencode-setup.md:124 — defined here
- `Skill Discovery` — docs/opencode-setup.md:140 — defined here
- `Automatic Skill Invocation` — docs/opencode-setup.md:153 — defined here
- `Lifecycle Mapping (Implicit Commands)` — docs/opencode-setup.md:164 — defined here
- `DEFINE` — docs/opencode-setup.md:168 — defined here
- `PLAN` — docs/opencode-setup.md:169 — defined here
- `BUILD` — docs/opencode-setup.md:170 — defined here
- `VERIFY` — docs/opencode-setup.md:171 — defined here
- `REVIEW` — docs/opencode-setup.md:172 — defined here
- `SHIP` — docs/opencode-setup.md:173 — defined here
- `Agent Expectations` — docs/opencode-setup.md:236 — defined here
- `spec-driven-development` — docs/opencode-setup.md:33, 68, 116, 160, 168, 209 — used here
- `incremental-implementation` — docs/opencode-setup.md:69, 116, 159, 170 — used here
- `test-driven-development` — docs/opencode-setup.md:116, 159, 170 — used here
- `planning-and-task-breakdown` — docs/opencode-setup.md:117, 169, 193 — used here
- `debugging-and-error-recovery` — docs/opencode-setup.md:118, 161, 171, 221 — used here
- `code-review-and-quality` — docs/opencode-setup.md:119, 162, 172, 232 — used here
- `code-simplification` — docs/opencode-setup.md:120 — used here
- `api-and-interface-design` — docs/opencode-setup.md:121 — used here
- `frontend-ui-engineering` — docs/opencode-setup.md:122 — used here
- `shipping-and-launch` — docs/opencode-setup.md:173 — used here
- `references/` — docs/opencode-setup.md:45, 250 — used here

## Structure
- `# OpenCode Setup` — docs/opencode-setup.md:1
- `## Overview` — docs/opencode-setup.md:5
- `## Installation` — docs/opencode-setup.md:12
- `### Option 1: Install with \`npx skills\`` — docs/opencode-setup.md:21
- `### Option 2: Clone this repository` — docs/opencode-setup.md:47
- `#### Project-local installation` — docs/opencode-setup.md:57
- `#### Global installation` — docs/opencode-setup.md:73
- `#### Cross-compatible paths` — docs/opencode-setup.md:79
- `### What to copy` — docs/opencode-setup.md:90
- `## Project \`AGENTS.md\`` — docs/opencode-setup.md:94
- `## How It Works` — docs/opencode-setup.md:138
- `### 1. Skill Discovery` — docs/opencode-setup.md:140
- `### 2. Automatic Skill Invocation` — docs/opencode-setup.md:153
- `### 3. Lifecycle Mapping (Implicit Commands)` — docs/opencode-setup.md:164
- `### Copy the optional slash commands` — docs/opencode-setup.md:175
- `## Usage Examples` — docs/opencode-setup.md:198
- `### Example 1: Feature Development` — docs/opencode-setup.md:200
- `### Example 2: Bug Fix` — docs/opencode-setup.md:213
- `### Example 3: Code Review` — docs/opencode-setup.md:225
- `## Agent Expectations` — docs/opencode-setup.md:236
- `## Limitations` — docs/opencode-setup.md:246
- `## Summary` — docs/opencode-setup.md:252

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` / `broken-command`: Lines 180-181 instruct copying from `.opencode/commands/*.md`, but no `.opencode/commands/` directory exists on `main` (noted in line 184 as pending PR #200).
- `cross-file-contradiction`: `AGENTS.md:36` claims "OpenCode does not support slash commands like `/spec` or `/plan`", whereas `opencode-setup.md:10, 166, 175-197` documents OpenCode slash command support via `.opencode/commands/*.md`.
- `other` / `packaging-limitation`: Per-skill installs (`npx skills add` or copying single `skills/<name>/` directories) do not copy shared files under `references/`, which breaks skills that reference `references/` unless manually resolved (docs/opencode-setup.md:45, 250).

## Observations
- Systematically articulates the fundamental architectural boundary between repo-scoped agent configuration (`addyosmani/agent-skills/AGENTS.md` and `CLAUDE.md`) and portable, reusable skills (`skills/*/SKILL.md`).
- Demonstrates how to map an implicit 6-stage lifecycle (`DEFINE` → `PLAN` → `BUILD` → `VERIFY` → `REVIEW` → `SHIP`) in harnesses without native slash commands using `AGENTS.md` system prompt steering and the `skill({ name })` tool.
- Details the multi-directory discovery hierarchy (`.opencode/skills/`, `~/.config/opencode/skills/`, `.claude/skills/`, `~/.claude/skills/`, `.agents/skills/`, `~/.agents/skills/`).

## Context cost
- File size: 9,547 bytes (~2,400 tokens).
- Transitive context cost: OpenCode uses dynamic on-demand loading via `skill({ name: "<skill-name>" })` guided by a lightweight project `AGENTS.md` (~1,000 tokens), avoiding upfront context bloat.
