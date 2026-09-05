---
package: addy
path: docs/opencode-setup.md
type: doc
bytes: 9547
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/opencode-setup.md

## Purpose — required, verbatim
> "This guide explains how to use Agent Skills with OpenCode. The reusable assets are the markdown skills in the `skills/` directory; the root `AGENTS.md` file in this repository is repo-scoped and should not be copied into other projects." — docs/opencode-setup.md:3

## Design intent — required
Provides setup and usage documentation for integrating the agent-skills package into OpenCode. Solves the problem of harness-specific skill discovery and configuration by explaining project-local, global, and cross-compatible paths (such as Claude Code and generic agent directories), distinguishing reusable skills from repository-internal governance files, and presenting both autonomous agent-driven and manual command-driven workflows.

## Phase — required
none

## Inputs — required
User prompts, project codebase, OpenCode environment, and optionally `skills` CLI or a cloned repository.

## Outputs — required
Project-local `AGENTS.md` system prompt configuration, installed `.opencode/skills/<skill-name>/` directories, and optional `.opencode/commands/*.md` slash command files.

## Invokes — required
- skill spec-driven-development — docs/opencode-setup.md:68
- skill incremental-implementation — docs/opencode-setup.md:69
- skill test-driven-development — docs/opencode-setup.md:116
- skill planning-and-task-breakdown — docs/opencode-setup.md:117
- skill debugging-and-error-recovery — docs/opencode-setup.md:118
- skill code-review-and-quality — docs/opencode-setup.md:119
- skill code-simplification — docs/opencode-setup.md:120
- skill api-and-interface-design — docs/opencode-setup.md:121
- skill frontend-ui-engineering — docs/opencode-setup.md:122
- skill shipping-and-launch — docs/opencode-setup.md:173
- doc CONTRIBUTING.md — docs/opencode-setup.md:136

## Invoked by — required
- doc README.md — README.md:158

## Concepts named — required, verbatim
- `Agent-driven workflow` — docs/opencode-setup.md:9 — defined here
- `Command-driven workflow` — docs/opencode-setup.md:10 — defined here
- `AGENTS.md` — docs/opencode-setup.md:94 — used here
- `Intent → Skill Mapping` — docs/opencode-setup.md:112 — defined here
- `Execution Model` — docs/opencode-setup.md:124 — defined here
- `Lifecycle Mapping` — docs/opencode-setup.md:164 — defined here
- `Implicit Commands` — docs/opencode-setup.md:164 — defined here
- `DEFINE` — docs/opencode-setup.md:168 — used here
- `PLAN` — docs/opencode-setup.md:169 — used here
- `BUILD` — docs/opencode-setup.md:170 — used here
- `VERIFY` — docs/opencode-setup.md:171 — used here
- `REVIEW` — docs/opencode-setup.md:172 — used here
- `SHIP` — docs/opencode-setup.md:173 — used here

## Structure
- # OpenCode Setup
- ## Overview
- ## Installation
- ### Option 1: Install with `npx skills`
- ### Option 2: Clone this repository
- #### Project-local installation
- #### Global installation
- #### Cross-compatible paths
- ### What to copy
- ## Project `AGENTS.md`
- ### 1. Skill Discovery
- ### 2. Automatic Skill Invocation
- ### 3. Lifecycle Mapping (Implicit Commands)
- ### Copy the optional slash commands
- ## Usage Examples
- ### Example 1: Feature Development
- ### Example 2: Bug Fix
- ### Example 3: Code Review
- ## Agent Expectations
- ## Limitations
- ## Summary

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — docs/opencode-setup.md:181 — commands directory `.opencode/commands/*.md` does not exist on main in the source repository as noted in line 184.
- missing-path — docs/opencode-setup.md:45 — per-skill installs copy only the skill directory itself, leaving references under `references/` broken without manual copying (tracked in issue #361).

## Observations
Documents the implicit lifecycle mapping for agent-driven harnesses without slash commands: mapping user intent to DEFINE (spec), PLAN (breakdown), BUILD (incremental + TDD), VERIFY (debugging), REVIEW (code-review), and SHIP (launch). Emphasizes keeping repository governance rules (`AGENTS.md`) separate from distributable skill content.

## Context cost
9,547 bytes (~2,400 tokens). Loads nothing automatically.
