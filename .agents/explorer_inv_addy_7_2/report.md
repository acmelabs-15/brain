# Exploration Report — inv-addy-7 (Explorer 2)

**Explorer**: Explorer 2 (`teamwork_preview_explorer`)  
**Work Unit**: `inv-addy-7`  
**Target Files**:
1. `sources/addy/docs/antigravity-setup.md` (5,041 bytes)
2. `sources/addy/docs/gemini-cli-setup.md` (5,640 bytes)

---

## 1. Executive Summary

This report delivers the exhaustive Phase 1 inventory analysis for the two Gemini/Antigravity integration setup documents in `sources/addy/`:
- `docs/antigravity-setup.md`: Guides native plugin installation and workflow configuration for Google's Antigravity CLI (`agy`), detailing plugin commands, on-demand skill discovery, subagent personas, workspace enforcement via `AGENTS.md`, and 8 slash commands.
- `docs/gemini-cli-setup.md`: Guides skill installation and context configuration for the Gemini CLI, comparing on-demand skill discovery (`.gemini/skills/`, `.agents/skills/`) with persistent context loading via `GEMINI.md`, MCP integration, session hooks (`SessionStart`), and `.gemini/commands/` slash commands.

Both files were read completely from first line to last line. All referenced filesystem paths were verified against disk. Package validation scripts (`validate-skills.js`, `validate-commands.js`, `validate-reference-links.js`, `validate-artifact-paths.js`, `validate-versions.js`) were executed using `bun` from `sources/addy/` and passed clean.

Key findings across the two files:
1. **Slash Command Drift (both files)**: Both documents state that the repository registers "8 custom slash commands: 7 lifecycle commands plus the `/webperf` specialist audit" and present an 8-row table. However, the repository ships 9 commands (`build`, `code-simplify`, `constraints`, `planning`, `review`, `ship`, `spec`, `test`, `webperf`). Both documents omit `/constraints` (`constraints.toml`).
2. **Skill vs. Agent Confusion in `antigravity-setup.md`**: The slash command table in `antigravity-setup.md:59` includes an "Activated Skill" column that lists `web-performance-auditor`. However, `skills/web-performance-auditor` does not exist on disk. `web-performance-auditor` is an agent persona defined in `agents/web-performance-auditor.md`. Furthermore, `web-performance-auditor.md` is omitted from the "Specialized Agent Personas" section in lines 96–98.
3. **Internal Collision Handling (both files)**: Both documents document the deliberate choice of `/planning` instead of `/plan` to avoid collisions with built-in planning commands in Antigravity and Gemini CLI.

---

## 2. Methodology & §4 Checklist Audit

### 2.1 Existence Checklist
| Path Referenced | Origin Line(s) | Exists on Disk? | Status / Target |
|---|---|---|---|
| `sources/addy/skills/` | antigravity:69, 86; gemini:12, 19, 25 | Yes | Directory with 25 skills |
| `sources/addy/agents/` | antigravity:95; gemini:131 | Yes | Directory with 4 agent markdown files |
| `sources/addy/agents/code-reviewer.md` | antigravity:96; gemini:131 | Yes | File exists (3,995 bytes) |
| `sources/addy/agents/security-auditor.md` | antigravity:97 | Yes | File exists (4,992 bytes) |
| `sources/addy/agents/test-engineer.md` | antigravity:98 | Yes | File exists (3,275 bytes) |
| `sources/addy/agents/web-performance-auditor.md` | (omitted in persona list, implied at antigravity:59) | Yes | File exists (12,278 bytes) |
| `sources/addy/skills/web-performance-auditor` | antigravity:59 ("Activated Skill") | **NO** | Defect: Missing path / type confusion |
| `sources/addy/skills/spec-driven-development` | antigravity:52, 90; gemini:76 | Yes | File exists (`SKILL.md` 12,163 bytes) |
| `sources/addy/skills/planning-and-task-breakdown` | antigravity:53 | Yes | File exists (`SKILL.md` 10,564 bytes) |
| `sources/addy/skills/incremental-implementation` | antigravity:54, 91; gemini:44, 55, 68 | Yes | File exists (`SKILL.md` 9,507 bytes) |
| `sources/addy/skills/test-driven-development` | antigravity:55, 91; gemini:54, 75, 103 | Yes | File exists (`SKILL.md` 16,483 bytes) |
| `sources/addy/skills/code-review-and-quality` | antigravity:56; gemini:46, 69 | Yes | File exists (`SKILL.md` 20,555 bytes) |
| `sources/addy/skills/code-simplification` | antigravity:57 | Yes | File exists (`SKILL.md` 13,545 bytes) |
| `sources/addy/skills/shipping-and-launch` | antigravity:58 | Yes | File exists (`SKILL.md` 10,137 bytes) |
| `sources/addy/skills/debugging-and-error-recovery` | antigravity:92 | Yes | File exists (`SKILL.md` 10,837 bytes) |
| `sources/addy/skills/frontend-ui-engineering` | gemini:77 | Yes | File exists (`SKILL.md` 10,711 bytes) |
| `sources/addy/skills/security-and-hardening` | gemini:78 | Yes | File exists (`SKILL.md` 24,192 bytes) |
| `sources/addy/skills/performance-optimization` | gemini:79, 88 | Yes | File exists (`SKILL.md` 21,717 bytes) |
| `sources/addy/skills/browser-testing-with-devtools` | gemini:87 | Yes | File exists (`SKILL.md` 14,539 bytes) |
| `sources/addy/references/` | gemini:132 | Yes | Directory with 7 reference guides |
| `sources/addy/AGENTS.md` | antigravity:106, 107 | Yes | File exists (5,386 bytes) |
| `sources/addy/plugin.json` | (plugin package root) | Yes | File exists (129 bytes) |
| `sources/addy/.gemini/commands/` | gemini:110 | Yes | Directory with 9 TOML command files |
| `sources/addy/commands/` | (fallback command path) | Yes | Directory with 9 TOML command files |
| `sources/addy/.claude/commands/` | (Claude command path) | Yes | Directory with 9 MD command files |
| `~/.gemini/config/plugins/agent-skills/` | antigravity:28, 30 | External | Target install path for agy plugins |
| `~/.gemini/config.json` | gemini:90 | External | Target user config for Gemini CLI MCP |
| `GEMINI.md` | gemini:38-47, 60, 64 | Workspace | User-generated file instructed by guide |

### 2.2 Execution Checklist
Both files are documentation files (`type: doc`). Neither file ships executable script code. However, package validation was executed to verify cross-system integrity:
- `bun scripts/validate-skills.js`: 25 skills checked — 0 error(s), 0 warning(s) — PASSED.
- `bun scripts/validate-commands.js`: 9 commands checked (`build`, `code-simplify`, `constraints`, `plan`/`planning`, `review`, `ship`, `spec`, `test`, `webperf`) — 0 error(s) — PASSED.
- `bun scripts/validate-reference-links.js`: 25 skills checked — 0 error(s) — PASSED.
- `bun scripts/validate-artifact-paths.js`: 7 files checked — 0 error(s) — PASSED.
- `bun scripts/validate-versions.js`: All manifests use version 0.6.8 — PASSED.

### 2.3 Documentation Drift
- **9 vs 8 Slash Commands**: Both `antigravity-setup.md:48` and `gemini-cli-setup.md:110` state that the repository provides 8 slash commands (7 lifecycle + `/webperf`). Both omit `/constraints` (`constraints.toml`), which exists in `.gemini/commands/constraints.toml` and `commands/constraints.toml` and is validated by `validate-commands.js`.
- **Omission of Persona in `antigravity-setup.md`**: Section `Specialized Agent Personas` (lines 94–98) lists three personas (`code-reviewer.md`, `security-auditor.md`, `test-engineer.md`), omitting `web-performance-auditor.md` despite its presence in `agents/`.
- **Persona Reference in `gemini-cli-setup.md`**: Usage Tip 3 (line 131) mentions copying `agents/code-reviewer.md` for reviews, but omits mention of the other three personas in `agents/`.

### 2.4 Internal Consistency
- In `antigravity-setup.md:50, 59`, the table column is titled "Activated Skill", and row 8 lists `web-performance-auditor`. However, `web-performance-auditor` is an agent persona in `agents/web-performance-auditor.md`, not a skill in `skills/`.

### 2.5 Cross-File Consistency
- Both setup guides resolve the command collision between `/plan` and harness-internal planning commands by renaming the command to `/planning`.
- `antigravity-setup.md` relies on the plugin architecture (`plugin.json`, `agy plugin install`), whereas `gemini-cli-setup.md` relies on folder discovery (`.gemini/skills/`, `.agents/skills/`) and `GEMINI.md`.

### 2.6 Composition
- **Inputs**: Remote git repo URL, local clone paths, user session intents, skill descriptions in frontmatter, `AGENTS.md` rules, MCP extensions (`chrome-devtools`).
- **Outputs**: Global plugin installs under `~/.gemini/config/plugins/agent-skills/`, workspace skills in `.gemini/skills/` or `.agents/skills/`, workspace `GEMINI.md`, registered slash commands, subagent persona invocations, and interactive artifact review diffs.

### 2.7 Context Cost
- `docs/antigravity-setup.md`: 5,041 bytes (~1,260 tokens). Pure documentation; 0 static token overhead in runtime sessions.
- `docs/gemini-cli-setup.md`: 5,640 bytes (~1,410 tokens). Pure documentation. However, if the recommended persistent context (`GEMINI.md`) is used, it injects `incremental-implementation` (9,507 bytes) and `code-review-and-quality` (20,555 bytes), creating a static context cost of 30,062 bytes (~7,515 tokens) per turn.

### 2.8 Design Intent
- `docs/antigravity-setup.md`: Solves the distribution, activation, and safety problem for Antigravity CLI by leveraging its native plugin packaging, automated intent-based skill triggering, subagent personas, sandbox execution, and UI artifact review.
- `docs/gemini-cli-setup.md`: Solves the context economy and integration problem for Gemini CLI by providing clear architectural guidance on when to use on-demand skills vs. always-on persistent `GEMINI.md` context, as well as enabling MCP tools and session hooks.

---

## 3. Inventory Entry: `docs/antigravity-setup.md`

```markdown
---
package: addy
path: docs/antigravity-setup.md
type: doc
bytes: 5041
unit: inv-addy-7
---

# docs/antigravity-setup.md

## Purpose — required, verbatim
> "The `agent-skills` package can be installed as a native plugin in the Antigravity CLI (`agy`), giving the agent access to structured workflows, personas, and custom slash commands." — docs/antigravity-setup.md:3

## Design intent — required
Integration guide explaining how to install and configure `agent-skills` as a native plugin in Google's Antigravity CLI (`agy`), either remotely via Git or locally via file path, or by importing from Gemini CLI. It documents how Antigravity automatically discovers skills and personas on-demand based on developer intent, defines 8 custom slash commands (renaming `/plan` to `/planning` to avoid internal collisions), establishes workspace-level convention enforcement via `AGENTS.md`, and enables safety controls via sandbox execution and interactive artifact review. Without this guide, Antigravity users would lack instructions for packaging the repository as a native plugin or utilizing its slash commands and subagents.

## Phase — required
none

## Inputs — required
- Remote git repository `https://github.com/addyosmani/agent-skills.git` — docs/antigravity-setup.md:14, 21
- Local repository path `/path/to/agent-skills` — docs/antigravity-setup.md:25, 79
- Legacy Gemini CLI installation for plugin import — docs/antigravity-setup.md:34, 36
- Skill frontmatter trigger descriptions in `skills/*/SKILL.md` — docs/antigravity-setup.md:69, 86-88
- Subagent persona definitions in `agents/` — docs/antigravity-setup.md:95-98
- Workspace convention rules in `AGENTS.md` — docs/antigravity-setup.md:106-107
- User prompts and tasks during CLI execution — docs/antigravity-setup.md:70-71, 87-92

## Outputs — required
- Global Antigravity plugin installation directory `~/.gemini/config/plugins/agent-skills/` — docs/antigravity-setup.md:28, 30
- Registered custom slash commands (`/spec`, `/planning`, `/build`, `/test`, `/review`, `/code-simplify`, `/ship`, `/webperf`) — docs/antigravity-setup.md:48-60
- Registered reusable subagents (`code-reviewer`, `security-auditor`, `test-engineer`) — docs/antigravity-setup.md:95-100
- Workspace enforcement link or copy of `AGENTS.md` — docs/antigravity-setup.md:107
- Artifact Review screens (`Ctrl+r`) for reviewing/approving code diffs before commit — docs/antigravity-setup.md:124

## Invokes — required
- skill spec-driven-development — docs/antigravity-setup.md:52, 90
- skill planning-and-task-breakdown — docs/antigravity-setup.md:53
- skill incremental-implementation — docs/antigravity-setup.md:54, 91
- skill test-driven-development — docs/antigravity-setup.md:55, 91
- skill code-review-and-quality — docs/antigravity-setup.md:56
- skill code-simplification — docs/antigravity-setup.md:57
- skill shipping-and-launch — docs/antigravity-setup.md:58
- skill debugging-and-error-recovery — docs/antigravity-setup.md:92
- agent web-performance-auditor (misidentified as Activated Skill) — docs/antigravity-setup.md:59
- agent code-reviewer.md — docs/antigravity-setup.md:96
- agent security-auditor.md — docs/antigravity-setup.md:97
- agent test-engineer.md — docs/antigravity-setup.md:98
- config AGENTS.md — docs/antigravity-setup.md:106, 107

## Invoked by — required
- README.md:110

## Concepts named — required, verbatim
- `agent-skills` — docs/antigravity-setup.md:1, 3, 14, 21, 25, 28, 30, 34, 79 — used here
- `Antigravity CLI` — docs/antigravity-setup.md:1, 3, 9, 28, 86, 107 — used here
- `agy` — docs/antigravity-setup.md:1, 3, 14, 24, 25, 30, 36, 41, 79, 113, 122 — defined here | used here
- `workflows` — docs/antigravity-setup.md:3, 87 — used here
- `personas` — docs/antigravity-setup.md:3, 58, 94, 100 — used here
- `slash commands` — docs/antigravity-setup.md:3, 46, 48 — used here
- `Native Plugin Installation` — docs/antigravity-setup.md:7 — defined here
- `plugin system` — docs/antigravity-setup.md:9 — used here
- `skills` — docs/antigravity-setup.md:9, 48, 61, 67, 69, 70, 77, 86, 110, 124 — used here
- `agents` — docs/antigravity-setup.md:9, 95 — used here
- `custom commands` — docs/antigravity-setup.md:9, 48 — used here
- `agy plugin install` — docs/antigravity-setup.md:14, 25 — defined here
- `global Antigravity configuration directory` — docs/antigravity-setup.md:28 — defined here
- `Import from Gemini CLI` — docs/antigravity-setup.md:32 — defined here
- `Gemini CLI` — docs/antigravity-setup.md:32, 34 — used here
- `agy plugin import gemini` — docs/antigravity-setup.md:36 — defined here
- `agy plugin list` — docs/antigravity-setup.md:41 — defined here
- `lifecycle commands` — docs/antigravity-setup.md:48 — defined here | used here
- `/webperf` — docs/antigravity-setup.md:48, 59 — defined here | used here
- `specialist audit` — docs/antigravity-setup.md:48 — defined here
- `/spec` — docs/antigravity-setup.md:52 — defined here | used here
- `spec-driven-development` — docs/antigravity-setup.md:52, 90 — used here
- `/planning` — docs/antigravity-setup.md:53, 63 — defined here | used here
- `planning-and-task-breakdown` — docs/antigravity-setup.md:53 — used here
- `/build` — docs/antigravity-setup.md:54 — defined here | used here
- `incremental-implementation` — docs/antigravity-setup.md:54, 91 — used here
- `/test` — docs/antigravity-setup.md:55 — defined here | used here
- `TDD workflow` — docs/antigravity-setup.md:55 — used here
- `red, green, refactor` — docs/antigravity-setup.md:55 — used here
- `test-driven-development` — docs/antigravity-setup.md:55, 91 — used here
- `/review` — docs/antigravity-setup.md:56 — defined here | used here
- `Five-axis code review` — docs/antigravity-setup.md:56 — used here
- `code-review-and-quality` — docs/antigravity-setup.md:56 — used here
- `/code-simplify` — docs/antigravity-setup.md:57 — defined here | used here
- `code-simplification` — docs/antigravity-setup.md:57 — used here
- `/ship` — docs/antigravity-setup.md:58 — defined here | used here
- `Pre-launch checklist` — docs/antigravity-setup.md:58 — used here
- `parallel persona fan-out` — docs/antigravity-setup.md:58 — used here
- `shipping-and-launch` — docs/antigravity-setup.md:58 — used here
- `Core Web Vitals` — docs/antigravity-setup.md:59 — used here
- `performance issues` — docs/antigravity-setup.md:59 — used here
- `web-performance-auditor` — docs/antigravity-setup.md:59 — used here
- `/plan` — docs/antigravity-setup.md:63 — used here
- `Skills & Discovery` — docs/antigravity-setup.md:67 — defined here
- `Verification & Validation` — docs/antigravity-setup.md:75 — defined here
- `agy plugin validate` — docs/antigravity-setup.md:79 — defined here
- `On-Demand Skill Activation` — docs/antigravity-setup.md:86 — defined here
- `trigger descriptions` — docs/antigravity-setup.md:87 — used here
- `developer intent` — docs/antigravity-setup.md:87 — used here
- `debugging-and-error-recovery` — docs/antigravity-setup.md:92 — used here
- `Specialized Agent Personas` — docs/antigravity-setup.md:94 — defined here
- `subagent definitions` — docs/antigravity-setup.md:95 — used here
- `code-reviewer.md` — docs/antigravity-setup.md:96 — used here
- `security-auditor.md` — docs/antigravity-setup.md:97 — used here
- `test-engineer.md` — docs/antigravity-setup.md:98 — used here
- `subagents` — docs/antigravity-setup.md:100 — used here
- `AGENTS.md` — docs/antigravity-setup.md:106, 107 — used here
- `Project-Specific Enforcements` — docs/antigravity-setup.md:106 — defined here
- `planning phase` — docs/antigravity-setup.md:107 — used here
- `Sandbox Mode` — docs/antigravity-setup.md:109 — defined here
- `--sandbox` — docs/antigravity-setup.md:113 — defined here
- `agy update` — docs/antigravity-setup.md:122 — defined here
- `Ctrl+r` — docs/antigravity-setup.md:124 — defined here
- `Artifact Review` — docs/antigravity-setup.md:124 — defined here | used here
- `--dangerously-skip-permissions` — docs/antigravity-setup.md:125 — defined here

## Structure
- `# Using agent-skills with Antigravity CLI (agy)` — docs/antigravity-setup.md:1
- `## Setup` — docs/antigravity-setup.md:5
- `### Option 1: Native Plugin Installation (Recommended)` — docs/antigravity-setup.md:7
- `### Option 2: Import from Gemini CLI` — docs/antigravity-setup.md:32
- `## Slash Commands` — docs/antigravity-setup.md:46
- `## Skills & Discovery` — docs/antigravity-setup.md:67
- `## Verification & Validation` — docs/antigravity-setup.md:75
- `## How It Works` — docs/antigravity-setup.md:84
- `### 1. On-Demand Skill Activation` — docs/antigravity-setup.md:86
- `### 2. Specialized Agent Personas` — docs/antigravity-setup.md:94
- `## Configuration & Customization` — docs/antigravity-setup.md:104
- `### Project-Specific Enforcements (AGENTS.md)` — docs/antigravity-setup.md:106
- `### Sandbox Mode` — docs/antigravity-setup.md:109
- `## Usage Tips` — docs/antigravity-setup.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — docs/antigravity-setup.md:48: Asserts "The plugin registers 8 custom slash commands: 7 lifecycle commands plus the `/webperf` specialist audit", omitting the 9th command (`/constraints`, defined in `commands/constraints.toml` and `.gemini/commands/constraints.toml`), which exists in the repo and passes `validate-commands.js`.
- `internal-contradiction` — docs/antigravity-setup.md:50, 59: Table column header is "Activated Skill" and lists `web-performance-auditor` as a skill, but `web-performance-auditor` is an agent persona located in `agents/web-performance-auditor.md`, not a skill in `skills/`.
- `doc-drift` — docs/antigravity-setup.md:94-98: The "Specialized Agent Personas" section enumerates only three persona files (`code-reviewer.md`, `security-auditor.md`, `test-engineer.md`), omitting `web-performance-auditor.md` despite its presence in `agents/`.
- `missing-path` — docs/antigravity-setup.md:59: Target `skills/web-performance-auditor` implied by the "Activated Skill" column does not exist on disk.

## Observations
- Documents the transition in Antigravity plugin installation paths from legacy `~/.gemini/antigravity-cli/plugins/` to modern `~/.gemini/config/plugins/` (docs/antigravity-setup.md:30).
- Explains deliberate command renaming: `/planning` is used instead of `/plan` to avoid conflicts with Antigravity's internal plan generator (docs/antigravity-setup.md:63).
- Outlines runtime permission architecture: skills prompt the user before execution (line 71), dangerous permissions can be skipped via `--dangerously-skip-permissions` (line 125), and terminal execution can be restricted using `--sandbox` (line 113).
- Documents the `Ctrl+r` interactive Artifact Review UI for inspecting code diffs before committing (line 124).
- References `AGENTS.md` at workspace root as the enforcement contract for steering agent behavior and requiring spec/planning gates (lines 106-107).

## Context cost
- File size: 5,041 bytes (~1,260 tokens).
- Transitive context cost: 0 static prompt token overhead during standard agent runs; skills and agents are discovered and loaded dynamically on-demand.
```

---

## 4. Inventory Entry: `docs/gemini-cli-setup.md`

```markdown
---
package: addy
path: docs/gemini-cli-setup.md
type: doc
bytes: 5640
unit: inv-addy-7
---

# docs/gemini-cli-setup.md

## Purpose — required, verbatim
> "Gemini CLI has a native skills system that auto-discovers `SKILL.md` files in `.gemini/skills/` or `.agents/skills/` directories. Each skill activates on demand when it matches your task." — docs/gemini-cli-setup.md:7 (no explicit purpose statement)

## Design intent — required
Setup and configuration guide documenting how to integrate `agent-skills` into the Gemini CLI environment. It addresses context window management by distinguishing between on-demand dynamic activation (via `.gemini/skills/`, `.agents/skills/`, or user-level `~/.gemini/skills/`) and persistent always-on context (via `GEMINI.md` concatenation or `@` file imports for universal conventions). Furthermore, it provides instructions for Model Context Protocol (MCP) tool integration, session lifecycle hooks (`SessionStart`), explicit `@` context loading, and 8 auto-discovered slash commands in `.gemini/commands/`. Without this guide, Gemini CLI developers would lack instructions for installing skills, configuring persistent context, connecting MCP extensions, or using slash commands.

## Phase — required
none

## Inputs — required
- Remote repository `https://github.com/addyosmani/agent-skills.git` (`--path skills`) — docs/gemini-cli-setup.md:12
- Local repository skills path `/path/to/agent-skills/skills/` — docs/gemini-cli-setup.md:19, 25
- Frontmatter descriptions in `skills/*/SKILL.md` — docs/gemini-cli-setup.md:36, 130
- `skills/incremental-implementation/SKILL.md` — docs/gemini-cli-setup.md:44, 55, 68
- `skills/code-review-and-quality/SKILL.md` — docs/gemini-cli-setup.md:46, 69
- `skills/test-driven-development/SKILL.md` — docs/gemini-cli-setup.md:54, 75, 103
- `skills/spec-driven-development` — docs/gemini-cli-setup.md:76
- `skills/frontend-ui-engineering` — docs/gemini-cli-setup.md:77
- `skills/security-and-hardening` — docs/gemini-cli-setup.md:78
- `skills/performance-optimization` — docs/gemini-cli-setup.md:79, 88
- `skills/browser-testing-with-devtools` — docs/gemini-cli-setup.md:87
- `chrome-devtools` MCP extension — docs/gemini-cli-setup.md:87
- MCP configuration `~/.gemini/config.json` — docs/gemini-cli-setup.md:90
- `.gemini/commands/` directory — docs/gemini-cli-setup.md:110
- `agents/code-reviewer.md` — docs/gemini-cli-setup.md:131
- `references/` directory checklists — docs/gemini-cli-setup.md:132

## Outputs — required
- Workspace skills directory `.gemini/skills/` or `.agents/skills/` — docs/gemini-cli-setup.md:7, 28
- User-level skills directory `~/.gemini/skills/` — docs/gemini-cli-setup.md:28
- Workspace persistent context file `GEMINI.md` — docs/gemini-cli-setup.md:38-47
- Discovered slash commands (`/spec`, `/planning`, `/build`, `/test`, `/review`, `/code-simplify`, `/ship`, `/webperf`) — docs/gemini-cli-setup.md:110-123
- Session hook configuration (e.g. `SessionStart`) — docs/gemini-cli-setup.md:92-97

## Invokes — required
- skill incremental-implementation — docs/gemini-cli-setup.md:44, 55, 68
- skill code-review-and-quality — docs/gemini-cli-setup.md:46, 69
- skill test-driven-development — docs/gemini-cli-setup.md:54, 75, 103
- skill spec-driven-development — docs/gemini-cli-setup.md:76
- skill frontend-ui-engineering — docs/gemini-cli-setup.md:77
- skill security-and-hardening — docs/gemini-cli-setup.md:78
- skill performance-optimization — docs/gemini-cli-setup.md:79, 88
- skill browser-testing-with-devtools — docs/gemini-cli-setup.md:87
- command .gemini/commands/spec.toml — docs/gemini-cli-setup.md:110, 114
- command .gemini/commands/planning.toml — docs/gemini-cli-setup.md:110, 115
- command .gemini/commands/build.toml — docs/gemini-cli-setup.md:110, 116
- command .gemini/commands/test.toml — docs/gemini-cli-setup.md:110, 117
- command .gemini/commands/review.toml — docs/gemini-cli-setup.md:110, 118
- command .gemini/commands/code-simplify.toml — docs/gemini-cli-setup.md:110, 119
- command .gemini/commands/ship.toml — docs/gemini-cli-setup.md:110, 120
- command .gemini/commands/webperf.toml — docs/gemini-cli-setup.md:110, 121
- agent agents/code-reviewer.md — docs/gemini-cli-setup.md:131
- reference references/ — docs/gemini-cli-setup.md:132

## Invoked by — required
- README.md:130

## Concepts named — required, verbatim
- `agent-skills` — docs/gemini-cli-setup.md:1, 12, 18, 19, 25, 44, 46, 96 — used here
- `Gemini CLI` — docs/gemini-cli-setup.md:1, 7, 36, 88, 93, 110, 125, 130 — used here
- `skills` — docs/gemini-cli-setup.md:5, 7, 12, 19, 25, 28, 36, 40, 43, 60, 71, 73, 85, 96, 123, 129 — used here
- `SKILL.md` — docs/gemini-cli-setup.md:7, 44, 46, 54, 55, 103, 130 — used here
- `gemini skills install` — docs/gemini-cli-setup.md:12, 19, 25 — defined here
- `workspace scope` — docs/gemini-cli-setup.md:22, 25, 28 — defined here
- `User-level skills` — docs/gemini-cli-setup.md:28 — defined here
- `/skills list` — docs/gemini-cli-setup.md:33 — defined here
- `prompt injection` — docs/gemini-cli-setup.md:36 — used here
- `GEMINI.md` — docs/gemini-cli-setup.md:38, 40, 44, 45, 46, 60, 64, 129 — defined here | used here
- `Persistent Context` — docs/gemini-cli-setup.md:38, 40, 43, 60, 66 — defined here
- `on-demand activation` — docs/gemini-cli-setup.md:40, 60, 71, 129 — defined here | used here
- `incremental-implementation` — docs/gemini-cli-setup.md:44, 55, 68 — used here
- `code-review-and-quality` — docs/gemini-cli-setup.md:46, 69 — used here
- `@file import` — docs/gemini-cli-setup.md:54, 55, 100, 103 — defined here | used here
- `test-driven-development` — docs/gemini-cli-setup.md:54, 75, 103 — used here
- `/memory show` — docs/gemini-cli-setup.md:58 — defined here
- `/memory reload` — docs/gemini-cli-setup.md:58 — defined here
- `project conventions` — docs/gemini-cli-setup.md:60 — used here
- `Always-On` — docs/gemini-cli-setup.md:64 — defined here
- `Five-axis review` — docs/gemini-cli-setup.md:69 — used here
- `On-Demand` — docs/gemini-cli-setup.md:71 — defined here
- `spec-driven-development` — docs/gemini-cli-setup.md:76 — used here
- `frontend-ui-engineering` — docs/gemini-cli-setup.md:77 — used here
- `security-and-hardening` — docs/gemini-cli-setup.md:78 — used here
- `performance-optimization` — docs/gemini-cli-setup.md:79, 88 — used here
- `Model Context Protocol (MCP)` — docs/gemini-cli-setup.md:85 — used here
- `browser-testing-with-devtools` — docs/gemini-cli-setup.md:87 — used here
- `chrome-devtools` — docs/gemini-cli-setup.md:87 — used here
- `Session Hooks` — docs/gemini-cli-setup.md:92 — defined here
- `session lifecycle hooks` — docs/gemini-cli-setup.md:93 — defined here | used here
- `SessionStart` — docs/gemini-cli-setup.md:96 — defined here | used here
- `meta-skill` — docs/gemini-cli-setup.md:96 — defined here
- `Explicit Context Loading` — docs/gemini-cli-setup.md:98 — defined here
- `slash commands` — docs/gemini-cli-setup.md:108, 110 — used here
- `lifecycle commands` — docs/gemini-cli-setup.md:110 — used here
- `/webperf` — docs/gemini-cli-setup.md:110, 121 — defined here | used here
- `specialist audit` — docs/gemini-cli-setup.md:110 — defined here
- `/spec` — docs/gemini-cli-setup.md:114 — defined here | used here
- `/planning` — docs/gemini-cli-setup.md:115, 125 — defined here | used here
- `/build` — docs/gemini-cli-setup.md:116 — defined here | used here
- `/test` — docs/gemini-cli-setup.md:117 — defined here | used here
- `TDD workflow` — docs/gemini-cli-setup.md:117 — used here
- `red, green, refactor` — docs/gemini-cli-setup.md:117 — used here
- `/review` — docs/gemini-cli-setup.md:118 — defined here | used here
- `/code-simplify` — docs/gemini-cli-setup.md:119 — defined here | used here
- `/ship` — docs/gemini-cli-setup.md:120 — defined here | used here
- `Pre-launch checklist` — docs/gemini-cli-setup.md:120 — used here
- `parallel persona fan-out` — docs/gemini-cli-setup.md:120 — used here
- `Core Web Vitals` — docs/gemini-cli-setup.md:121 — used here
- `performance issues` — docs/gemini-cli-setup.md:121 — used here
- `/plan` — docs/gemini-cli-setup.md:125 — used here
- `Claude Code` — docs/gemini-cli-setup.md:130 — used here
- `code-reviewer.md` — docs/gemini-cli-setup.md:131 — used here
- `references/` — docs/gemini-cli-setup.md:132 — used here

## Structure
- `# Using agent-skills with Gemini CLI` — docs/gemini-cli-setup.md:1
- `## Setup` — docs/gemini-cli-setup.md:3
- `### Option 1: Install as Skills (Recommended)` — docs/gemini-cli-setup.md:5
- `### Option 2: GEMINI.md (Persistent Context)` — docs/gemini-cli-setup.md:38
- `## Recommended Configuration` — docs/gemini-cli-setup.md:62
- `### Always-On (GEMINI.md)` — docs/gemini-cli-setup.md:64
- `### On-Demand (Skills)` — docs/gemini-cli-setup.md:71
- `## Advanced Configuration` — docs/gemini-cli-setup.md:81
- `### MCP Integration` — docs/gemini-cli-setup.md:83
- `### Session Hooks` — docs/gemini-cli-setup.md:92
- `### Explicit Context Loading` — docs/gemini-cli-setup.md:98
- `## Slash Commands` — docs/gemini-cli-setup.md:108
- `## Usage Tips` — docs/gemini-cli-setup.md:127

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — docs/gemini-cli-setup.md:110: Claims "The repo ships 8 slash commands under `.gemini/commands/`: 7 lifecycle commands plus the `/webperf` specialist audit", omitting the 9th command file `.gemini/commands/constraints.toml`, which exists in the repo and is verified by `validate-commands.js`.

## Observations
- Provides clear architectural trade-offs between static prompt pollution and dynamic on-demand retrieval: recommends placing foundational principles (`incremental-implementation` and `code-review-and-quality`) in `GEMINI.md` and keeping situational workflows (TDD, spec, UI, security, perf) on-demand (docs/gemini-cli-setup.md:60-80).
- Documents Gemini CLI's explicit context import syntax (`@skills/.../SKILL.md`) in prompt bodies and `GEMINI.md` (lines 54-55, 103).
- Documents context inspection utilities (`/memory show`, `/memory reload`) (line 58).
- Documents session lifecycle hooks (`SessionStart`) for reminding the agent of available skills or injecting meta-skills (lines 92-97).
- Notes that skill descriptions in frontmatter are cross-harness optimized to activate accurately in Claude Code, Gemini CLI, and Antigravity (line 130).

## Context cost
- File size: 5,640 bytes (~1,410 tokens).
- Transitive context cost: If configured as recommended:
  - Persistent context (`GEMINI.md` containing `incremental-implementation` + `code-review-and-quality`): 9,507 + 20,555 = 30,062 bytes (~7,515 tokens) static prompt overhead per turn.
  - On-demand skills: 0 static prompt overhead until triggered.
```

---

## 5. Synthesis & Comparative Analysis

| Dimension | `docs/antigravity-setup.md` | `docs/gemini-cli-setup.md` |
|---|---|---|
| **Target Harness** | Antigravity CLI (`agy`) | Gemini CLI (`gemini`) |
| **Packaging Model** | Native plugin via `plugin.json` (`agy plugin install`) | Skill directories (`.gemini/skills/`, `.agents/skills/`) & `GEMINI.md` |
| **Global Install Path** | `~/.gemini/config/plugins/agent-skills/` | `~/.gemini/skills/` |
| **Command Renaming** | `/planning` (avoids Antigravity internal plan conflict) | `/planning` (avoids Gemini internal plan conflict) |
| **Slash Command Count** | 8 documented (omits `/constraints`) | 8 documented (omits `/constraints`) |
| **Persona Support** | Direct subagent persona registration (`agents/`) | Mentions copying `agents/code-reviewer.md` |
| **Workspace Enforcement** | `AGENTS.md` linked/copied to workspace root | `GEMINI.md` containing concatenated skills or `@` imports |
| **Safety / Guardrails** | `--sandbox`, `Ctrl+r` Artifact Review screen | MCP permission controls (`~/.gemini/config.json`) |
| **Context Strategy** | 100% on-demand activation | Hybrid: Always-on (`GEMINI.md`) + On-demand (`skills/`) |
| **Lifecycle Hooks** | None documented | `SessionStart` session lifecycle hook documented |
