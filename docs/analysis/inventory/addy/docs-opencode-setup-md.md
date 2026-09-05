---
package: addy
path: docs/opencode-setup.md
type: doc
bytes: 9547
unit: inv-addy-6
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/opencode-setup.md

## Purpose — required, verbatim
> "This guide explains how to use Agent Skills with OpenCode." — docs/opencode-setup.md:3

## Design intent — required
Explains how to install, configure, and invoke Agent Skills in the OpenCode agent environment. It establishes the distinction between reusable skill directories (`skills/`) and project-scoped system instructions (`AGENTS.md`), providing an execution model that maps user intent to lifecycle skills. Without this document, OpenCode users would lack discovery path conventions, command-line installation instructions, and the intent-to-skill mapping prompt pattern.

## Phase — required
none

## Inputs — required
User requests/intent prompts, project-local `AGENTS.md` configuration, installed skills located in `.opencode/skills/`, `~/.config/opencode/skills/`, `.claude/skills/`, or `.agents/skills/`.

## Outputs — required
Project-local `AGENTS.md` configuration file (template provided at lines 100-132); optional custom slash command definitions at `.opencode/commands/*.md` (lines 180, 196).

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:158

## Concepts named — required, verbatim
`agent-driven workflow` — docs/opencode-setup.md:9 — defined here
`command-driven workflow` — docs/opencode-setup.md:10 — defined here
`npx skills` — docs/opencode-setup.md:21 — used here
`AGENTS.md` — docs/opencode-setup.md:94 — defined here
`Intent → Skill Mapping` — docs/opencode-setup.md:112 — defined here
`Execution Model` — docs/opencode-setup.md:124 — defined here
`Skill Discovery` — docs/opencode-setup.md:140 — defined here
`Automatic Skill Invocation` — docs/opencode-setup.md:153 — defined here
`Lifecycle Mapping (Implicit Commands)` — docs/opencode-setup.md:164 — defined here
`Agent Expectations` — docs/opencode-setup.md:235 — defined here

## Structure
- OpenCode Setup
- Overview
- Installation
- Option 1: Install with `npx skills`
- Option 2: Clone this repository
- Project-local installation
- Global installation
- Cross-compatible paths
- What to copy
- Project `AGENTS.md`
- How It Works
- 1. Skill Discovery
- 2. Automatic Skill Invocation
- 3. Lifecycle Mapping (Implicit Commands)
- Copy the optional slash commands
- Usage Examples
- Example 1: Feature Development
- Example 2: Bug Fix
- Example 3: Code Review
- Agent Expectations
- Limitations
- Summary

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · docs/opencode-setup.md:181 · The path `.opencode/commands/*.md` does not exist in the repository on `main` (noted as pending PR #200 at line 184).

## Observations
Provides a concrete project-local `AGENTS.md` template separating repo-specific rules from generic skills. Highlights cross-compatible directory resolution across OpenCode, Claude Code, and generic agent environments (`.claude/skills/`, `.agents/skills/`, `.opencode/skills/`).

## Context cost
9547 bytes, ~2387 tokens. Loads no external files.
