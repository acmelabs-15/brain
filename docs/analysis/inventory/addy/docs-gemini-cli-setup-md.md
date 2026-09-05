---
package: addy
path: docs/gemini-cli-setup.md
type: doc
bytes: 5640
unit: inv-addy-5
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: docs/gemini-cli-setup.md, sha256: 982d9cdc469fb26cbd4dd6a2d26d1894f2b93e2f821dd8646c188dacb8150803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/gemini-cli-setup.md

## Purpose — required, verbatim
> "Gemini CLI has a native skills system that auto-discovers `SKILL.md` files in `.gemini/skills/` or `.agents/skills/` directories." — docs/gemini-cli-setup.md:7
(no explicit purpose statement)

## Design intent — required
Documents setup and configuration of agent-skills for Gemini CLI. It contrasts on-demand skill discovery via `.gemini/skills/` (or `.agents/skills/`) against persistent context loaded through `GEMINI.md`, explains MCP tool integration and session lifecycle hooks, and details the eight Gemini CLI slash commands in `.gemini/commands/` (noting the `/planning` naming accommodation).

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill incremental-implementation — docs/gemini-cli-setup.md:44
- skill code-review-and-quality — docs/gemini-cli-setup.md:46
- skill test-driven-development — docs/gemini-cli-setup.md:54
- skill spec-driven-development — docs/gemini-cli-setup.md:76
- skill frontend-ui-engineering — docs/gemini-cli-setup.md:77
- skill security-and-hardening — docs/gemini-cli-setup.md:78
- skill performance-optimization — docs/gemini-cli-setup.md:79
- skill browser-testing-with-devtools — docs/gemini-cli-setup.md:87
- command /spec — docs/gemini-cli-setup.md:114
- command /planning — docs/gemini-cli-setup.md:115
- command /build — docs/gemini-cli-setup.md:116
- command /test — docs/gemini-cli-setup.md:117
- command /review — docs/gemini-cli-setup.md:118
- command /code-simplify — docs/gemini-cli-setup.md:119
- command /ship — docs/gemini-cli-setup.md:120
- command /webperf — docs/gemini-cli-setup.md:121
- agent code-reviewer — docs/gemini-cli-setup.md:131

## Invoked by — required
- doc README.md — README.md:130

## Concepts named — required, verbatim
- `.gemini/skills/` — docs/gemini-cli-setup.md:7 — used here
- `.agents/skills/` — docs/gemini-cli-setup.md:7 — used here
- `workspace scope` — docs/gemini-cli-setup.md:28 — used here
- `~/.gemini/skills/` — docs/gemini-cli-setup.md:28 — used here
- `GEMINI.md` — docs/gemini-cli-setup.md:38 — used here
- `Persistent Context` — docs/gemini-cli-setup.md:38 — used here
- `incremental-implementation` — docs/gemini-cli-setup.md:68 — used here
- `code-review-and-quality` — docs/gemini-cli-setup.md:69 — used here
- `test-driven-development` — docs/gemini-cli-setup.md:75 — used here
- `spec-driven-development` — docs/gemini-cli-setup.md:76 — used here
- `frontend-ui-engineering` — docs/gemini-cli-setup.md:77 — used here
- `security-and-hardening` — docs/gemini-cli-setup.md:78 — used here
- `performance-optimization` — docs/gemini-cli-setup.md:79 — used here
- `MCP Integration` — docs/gemini-cli-setup.md:83 — defined here
- `browser-testing-with-devtools` — docs/gemini-cli-setup.md:87 — used here
- `chrome-devtools` — docs/gemini-cli-setup.md:87 — used here
- `Session Hooks` — docs/gemini-cli-setup.md:92 — defined here
- `SessionStart` — docs/gemini-cli-setup.md:96 — used here
- `Explicit Context Loading` — docs/gemini-cli-setup.md:98 — defined here
- `Slash Commands` — docs/gemini-cli-setup.md:108 — defined here
- `/spec` — docs/gemini-cli-setup.md:114 — used here
- `/planning` — docs/gemini-cli-setup.md:115 — used here
- `/build` — docs/gemini-cli-setup.md:116 — used here
- `/test` — docs/gemini-cli-setup.md:117 — used here
- `/review` — docs/gemini-cli-setup.md:118 — used here
- `/code-simplify` — docs/gemini-cli-setup.md:119 — used here
- `/ship` — docs/gemini-cli-setup.md:120 — used here
- `/webperf` — docs/gemini-cli-setup.md:121 — used here
- `code-reviewer` — docs/gemini-cli-setup.md:131 — used here

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
none

## Observations
Documents harness adaptation for Gemini CLI: command conflict resolution where `/plan` is renamed to `/planning` due to collisions with Gemini CLI's internal `/plan` command (line 125). Explains the trade-off between on-demand auto-discovery (`.gemini/skills/`) and persistent context loading (`GEMINI.md`).

## Context cost
5640 bytes, ~1410 tokens.
