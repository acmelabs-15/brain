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
- `agent-skills` — docs/gemini-cli-setup.md:1 — used here
- `Gemini CLI` — docs/gemini-cli-setup.md:1 — used here
- `skills` — docs/gemini-cli-setup.md:5 — used here
- `SKILL.md` — docs/gemini-cli-setup.md:7 — used here
- `gemini skills install` — docs/gemini-cli-setup.md:12 — defined here
- `workspace scope` — docs/gemini-cli-setup.md:22 — defined here
- `User-level skills` — docs/gemini-cli-setup.md:28 — defined here
- `/skills list` — docs/gemini-cli-setup.md:33 — defined here
- `prompt injection` — docs/gemini-cli-setup.md:36 — used here
- `GEMINI.md` — docs/gemini-cli-setup.md:38 — defined here | used here
- `Persistent Context` — docs/gemini-cli-setup.md:38 — defined here
- `on-demand activation` — docs/gemini-cli-setup.md:40 — defined here | used here
- `incremental-implementation` — docs/gemini-cli-setup.md:44 — used here
- `code-review-and-quality` — docs/gemini-cli-setup.md:46 — used here
- `@file import` — docs/gemini-cli-setup.md:54 — defined here | used here
- `test-driven-development` — docs/gemini-cli-setup.md:54 — used here
- `/memory show` — docs/gemini-cli-setup.md:58 — defined here
- `/memory reload` — docs/gemini-cli-setup.md:58 — defined here
- `project conventions` — docs/gemini-cli-setup.md:60 — used here
- `Always-On` — docs/gemini-cli-setup.md:64 — defined here
- `Five-axis review` — docs/gemini-cli-setup.md:69 — used here
- `On-Demand` — docs/gemini-cli-setup.md:71 — defined here
- `spec-driven-development` — docs/gemini-cli-setup.md:76 — used here
- `frontend-ui-engineering` — docs/gemini-cli-setup.md:77 — used here
- `security-and-hardening` — docs/gemini-cli-setup.md:78 — used here
- `performance-optimization` — docs/gemini-cli-setup.md:79 — used here
- `Model Context Protocol (MCP)` — docs/gemini-cli-setup.md:85 — used here
- `browser-testing-with-devtools` — docs/gemini-cli-setup.md:87 — used here
- `chrome-devtools` — docs/gemini-cli-setup.md:87 — used here
- `Session Hooks` — docs/gemini-cli-setup.md:92 — defined here
- `session lifecycle hooks` — docs/gemini-cli-setup.md:93 — defined here | used here
- `SessionStart` — docs/gemini-cli-setup.md:96 — defined here | used here
- `meta-skill` — docs/gemini-cli-setup.md:96 — defined here
- `Explicit Context Loading` — docs/gemini-cli-setup.md:98 — defined here
- `slash commands` — docs/gemini-cli-setup.md:108 — used here
- `lifecycle commands` — docs/gemini-cli-setup.md:110 — used here
- `/webperf` — docs/gemini-cli-setup.md:110 — defined here | used here
- `specialist audit` — docs/gemini-cli-setup.md:110 — defined here
- `/spec` — docs/gemini-cli-setup.md:114 — defined here | used here
- `/planning` — docs/gemini-cli-setup.md:115 — defined here | used here
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
- `doc-drift` · docs/gemini-cli-setup.md:110 · Claims "The repo ships 8 slash commands under `.gemini/commands/`: 7 lifecycle commands plus the `/webperf` specialist audit", omitting the 9th command file `.gemini/commands/constraints.toml`, which exists in the repo and is verified by `validate-commands.js`.

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
