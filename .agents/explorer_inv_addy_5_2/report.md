# Work Unit Report: inv-addy-5 (Explorer 2 Partition)

**Files Assigned**:
1. `sources/addy/docs/windsurf-setup.md` (1,471 bytes, 49 lines)
2. `sources/addy/docs/commandcode-setup.md` (2,437 bytes, 70 lines)
3. `sources/addy/docs/opencode-setup.md` (9,547 bytes, 260 lines)

---

# Inventory Entries

## Entry 1: docs/windsurf-setup.md

---
package: addy
path: docs/windsurf-setup.md
type: doc
bytes: 1471
unit: inv-addy-5
---

# docs/windsurf-setup.md

## Purpose — required, verbatim
> "Windsurf uses `.windsurfrules` for project-specific agent instructions:" — docs/windsurf-setup.md:7 (no explicit purpose statement)

## Design intent — required
Integration guide showing developers how to configure the Windsurf IDE (Codeium) to consume `agent-skills` by concatenating or copying `SKILL.md` markdown files into project-level `.windsurfrules` or global AI rules settings. Solves the problem of adapting a repository-agnostic skill library to Windsurf's rule-based context model while managing limited context windows through selective curation of 2-3 essential skills and on-demand reference pasting.

## Phase — required
`none`

## Inputs — required
- `skills/test-driven-development/SKILL.md` — docs/windsurf-setup.md:11, 33
- `skills/incremental-implementation/SKILL.md` — docs/windsurf-setup.md:13, 37
- `skills/code-review-and-quality/SKILL.md` — docs/windsurf-setup.md:15, 41
- `skills/security-and-hardening` — docs/windsurf-setup.md:47
- `references/security-checklist.md` — docs/windsurf-setup.md:48

## Outputs — required
- Project rules configuration file `.windsurfrules` (concatenated markdown instructions) — docs/windsurf-setup.md:7-16, 27-42
- Windsurf Global Rules configuration (Settings → AI → Global Rules) — docs/windsurf-setup.md:20-23

## Invokes — required
- skill test-driven-development — docs/windsurf-setup.md:11, 33
- skill incremental-implementation — docs/windsurf-setup.md:13, 37
- skill code-review-and-quality — docs/windsurf-setup.md:15, 41
- skill security-and-hardening — docs/windsurf-setup.md:47
- reference references/security-checklist.md — docs/windsurf-setup.md:48

## Invoked by — required
- README.md:149

## Concepts named — required, verbatim
- `Windsurf` — docs/windsurf-setup.md:1, 7, 20, 22, 27, 46, 48 — used here
- `.windsurfrules` — docs/windsurf-setup.md:7, 11, 12, 13, 14, 15, 27, 30 — defined here | used here
- `Project Rules` — docs/windsurf-setup.md:5 — defined here
- `Global Rules` — docs/windsurf-setup.md:18, 20, 22 — defined here
- `test-driven-development` — docs/windsurf-setup.md:11, 33 — used here
- `incremental-implementation` — docs/windsurf-setup.md:13, 37 — used here
- `code-review-and-quality` — docs/windsurf-setup.md:15, 41 — used here
- `security-and-hardening` — docs/windsurf-setup.md:47 — used here
- `security-checklist.md` — docs/windsurf-setup.md:48 — used here

## Structure
- `# Using agent-skills with Windsurf` — docs/windsurf-setup.md:1
- `## Setup` — docs/windsurf-setup.md:3
- `### Project Rules` — docs/windsurf-setup.md:5
- `### Global Rules` — docs/windsurf-setup.md:18
- `## Recommended Configuration` — docs/windsurf-setup.md:25
- `## Usage Tips` — docs/windsurf-setup.md:44

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Demonstrates purely static rule aggregation: unlike tools with dynamic loaders, Windsurf relies on static concatenation into `.windsurfrules`.
- Recommends limiting `.windsurfrules` to 2-3 essential skills (`test-driven-development`, `incremental-implementation`, `code-review-and-quality`) to prevent context window saturation (docs/windsurf-setup.md:27, 46).
- Recommends pasting situational skills (e.g. `security-and-hardening`) and checklists (`references/security-checklist.md`) directly into chat when relevant tasks arise (docs/windsurf-setup.md:47-48).

## Context cost
- File size: 1,471 bytes (~370 tokens).
- Transitive context cost: If the 3 recommended skills are concatenated into `.windsurfrules`, the static context overhead is ~46.5 KB (~11,600 tokens) loaded into every agent turn.

---

## Entry 2: docs/commandcode-setup.md

---
package: addy
path: docs/commandcode-setup.md
type: doc
bytes: 2437
unit: inv-addy-5
---

# docs/commandcode-setup.md

## Purpose — required, verbatim
> "[Command Code](https://commandcode.ai) has a native skills system. The built-in `cmd skills` command clones a GitHub repo, recursively discovers every `SKILL.md`, and installs the ones you pick." — docs/commandcode-setup.md:3

## Design intent — required
Integration guide documenting how Command Code's native skill management CLI (`cmd skills`) discovers, installs, updates, and executes skills from `addyosmani/agent-skills` across project (`.commandcode/skills/`) and user/global (`~/.commandcode/skills/`) scopes, as well as cross-compatibility with `.agents/skills/`. Solves the distribution and discovery problem by mapping installed skills directly to TUI slash menu items (`/[skill]`).

## Phase — required
`none`

## Inputs — required
- GitHub repository `addyosmani/agent-skills` — docs/commandcode-setup.md:12, 20, 26, 32, 33, 34
- `skills/spec-driven-development` — docs/commandcode-setup.md:20, 41, 42, 52
- `skills/interview-me` — docs/commandcode-setup.md:33

## Outputs — required
- Project skills directory `.commandcode/skills/<name>/SKILL.md` — docs/commandcode-setup.md:9, 63, 68
- User/global skills directory `~/.commandcode/skills/<name>/SKILL.md` — docs/commandcode-setup.md:23, 65, 68
- TUI slash commands (e.g. `/spec-driven-development`, `/skills`) — docs/commandcode-setup.md:49-55

## Invokes — required
- skill spec-driven-development — docs/commandcode-setup.md:20, 41, 42, 52
- skill interview-me — docs/commandcode-setup.md:33

## Invoked by — required
- README.md:199

## Concepts named — required, verbatim
- `Command Code` — docs/commandcode-setup.md:1, 3, 5, 59 — used here
- `cmd skills` — docs/commandcode-setup.md:3, 12, 20, 26, 32, 33, 34, 40, 41, 42, 68 — defined here | used here
- `cmd` — docs/commandcode-setup.md:5 — defined here
- `cmdc` — docs/commandcode-setup.md:5 — defined here
- `command-code` — docs/commandcode-setup.md:5 — defined here
- `Project scope` — docs/commandcode-setup.md:9 — defined here
- `User scope` — docs/commandcode-setup.md:23 — defined here
- `spec-driven-development` — docs/commandcode-setup.md:20, 41, 42, 52 — used here
- `interview-me` — docs/commandcode-setup.md:33 — used here
- `TUI slash menu` — docs/commandcode-setup.md:49 — defined here
- `[skill]` — docs/commandcode-setup.md:49, 52 — defined here
- `/skills` — docs/commandcode-setup.md:55 — defined here
- `agents-compat` — docs/commandcode-setup.md:64, 66 — defined here

## Structure
- `# Using agent-skills with Command Code` — docs/commandcode-setup.md:1
- `## Install` — docs/commandcode-setup.md:7
- `## Manage` — docs/commandcode-setup.md:37
- `## Usage` — docs/commandcode-setup.md:47
- `## Where skills live` — docs/commandcode-setup.md:57

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Accurately references the 25 skills in `addyosmani/agent-skills` available for multi-select installation (docs/commandcode-setup.md:15).
- Documents explicit support for cross-harness discovery paths (`.agents/skills/<name>/SKILL.md` and `~/.agents/skills/<name>/SKILL.md`) (docs/commandcode-setup.md:64, 66).
- Supports path-based targeting (`addyosmani/agent-skills/skills/interview-me`), branch pins (`@main`), and update semantics via `--force` (docs/commandcode-setup.md:32-34, 45).
- Every installed skill is mapped automatically to an interactive TUI slash command tagged `[skill]` (docs/commandcode-setup.md:49-53).

## Context cost
- File size: 2,437 bytes (~610 tokens).
- Transitive context cost: On-demand per-command execution model ensures zero static prompt overhead; skills are loaded only when invoked via `/skill-name`.

---

## Entry 3: docs/opencode-setup.md

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
- `missing-path` / `broken-command` — At lines 180-181, the guide instructs:
  ```bash
  mkdir -p .opencode/commands
  cp /path/to/agent-skills/.opencode/commands/*.md .opencode/commands/
  ```
  However, `.opencode/commands/` does not exist in `addyosmani/agent-skills` on `main` (only `.opencode/skills -> ../skills/` exists). Although line 184 notes that the repository does not include `.opencode/commands/*.md` on `main` and points to pending PR #200, the provided shell snippet fails immediately when executed.
- `cross-file-contradiction` — `AGENTS.md:36` states "OpenCode does not support slash commands like `/spec` or `/plan`", whereas `opencode-setup.md:10, 166, 175-197` documents OpenCode slash command support via `.opencode/commands/*.md` (e.g. `/plan`).
- `external-dependency-risk` — Per-skill installs (`npx skills add` or copying single `skills/<name>/` directories) do not copy shared files under `references/` (e.g., `references/security-checklist.md`, `references/performance-checklist.md`), which breaks skills that reference `references/` unless manually resolved (noted in docs/opencode-setup.md:45, 250 and issue #361).

## Observations
- Systematically articulates the fundamental architectural boundary between repo-scoped agent configuration (`addyosmani/agent-skills/AGENTS.md` and `CLAUDE.md`) and portable, reusable skills (`skills/*/SKILL.md`).
- Demonstrates how to map an implicit 6-stage lifecycle (`DEFINE` → `PLAN` → `BUILD` → `VERIFY` → `REVIEW` → `SHIP`) in harnesses without native slash commands using `AGENTS.md` system prompt steering and the `skill({ name })` tool.
- Details the multi-directory discovery hierarchy (`.opencode/skills/`, `~/.config/opencode/skills/`, `.claude/skills/`, `~/.claude/skills/`, `.agents/skills/`, `~/.agents/skills/`).

## Context cost
- File size: 9,547 bytes (~2,400 tokens).
- Transitive context cost: OpenCode uses dynamic on-demand loading via `skill({ name: "<skill-name>" })` guided by a lightweight project `AGENTS.md` (~1,000 tokens), avoiding upfront context bloat.

