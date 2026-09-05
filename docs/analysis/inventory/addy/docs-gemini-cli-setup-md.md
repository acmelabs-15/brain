---
package: addy
path: docs/gemini-cli-setup.md
type: doc
bytes: 5640
unit: inv-addy-5
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/gemini-cli-setup.md, sha256: 982d9cdc469fb26cbd4dd6a2d26d1894f2b93e2f821dd8646c188dacb8150803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/gemini-cli-setup.md

## Purpose — required, verbatim
> "Gemini CLI has a native skills system that auto-discovers `SKILL.md` files in `.gemini/skills/` or `.agents/skills/` directories. Each skill activates on demand when it matches your task." — docs/gemini-cli-setup.md:7 (no explicit purpose statement)

## Design intent — required
Explains setup, configuration, and execution patterns for agent-skills in Gemini CLI. It contrasts on-demand skill discovery (`.gemini/skills/` or `.agents/skills/`) with always-on persistent project context (`GEMINI.md`). It covers MCP tool integration, session lifecycle hooks, explicit `@` loading, and the 8 slash commands provided under `.gemini/commands/`, including the necessary name adaptation of `/planning` instead of `/plan` to avoid collision with Gemini CLI's internal command. Without this guide, Gemini CLI users would face context bloat by loading all skills into `GEMINI.md` or experience failures from command name conflicts.

## Phase — required
none

## Inputs — required
Gemini CLI configuration model (`~/.gemini/config.json`, `.gemini/skills/`, `.agents/skills/`, `GEMINI.md`), MCP specification, and agent-skills catalog assets.

## Outputs — required
- `.gemini/skills/` — docs/gemini-cli-setup.md:28
- `.agents/skills/` — docs/gemini-cli-setup.md:28
- `GEMINI.md` — docs/gemini-cli-setup.md:44

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
- `native skills system` — docs/gemini-cli-setup.md:7 — used here
- `Persistent Context` — docs/gemini-cli-setup.md:38 — used here
- `MCP Integration` — docs/gemini-cli-setup.md:83 — used here
- `Session Hooks` — docs/gemini-cli-setup.md:92 — used here
- `Explicit Context Loading` — docs/gemini-cli-setup.md:98 — used here
- `Slash Commands` — docs/gemini-cli-setup.md:108 — used here
- `TDD workflow` — docs/gemini-cli-setup.md:117 — used here
- `Five-axis code review` — docs/gemini-cli-setup.md:118 — used here
- `persona fan-out` — docs/gemini-cli-setup.md:120 — used here
- `Core Web Vitals` — docs/gemini-cli-setup.md:121 — used here

## Structure
- # Using agent-skills with Gemini CLI
- ## Setup
- ### Option 1: Install as Skills (Recommended)
- ### Option 2: GEMINI.md (Persistent Context)
- ## Recommended Configuration
- ### Always-On (GEMINI.md)
- ### On-Demand (Skills)
- ## Advanced Configuration
- ### MCP Integration
- ### Session Hooks
- ### Explicit Context Loading
- ## Slash Commands
- ## Usage Tips

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Lines 60-61 explicitly articulate the context boundary trade-off: "Skills are on-demand expertise that activate only when relevant, keeping your context window clean. GEMINI.md provides persistent context loaded for every prompt." Line 125 notes that `/planning` is used instead of `/plan` because `/plan` conflicts with an internal Gemini CLI command name.

## Context cost
5640 bytes (~1410 tokens), 0 dependencies loaded into active working context. Static setup guide kept out of agent working set.
