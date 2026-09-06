---
package: addy
path: docs/codex-setup.md
type: doc
bytes: 1805
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: docs/codex-setup.md, sha256: ca30bfcc17ae3b2253573cd21c5f0768ae7eb99e7972b2935aa8c2ba68d65147}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/codex-setup.md

## Purpose — required, verbatim
> "This repository is also a [Codex plugin](https://developers.openai.com/codex/plugins/build). The same root-level `skills/` directory used by Claude Code is consumed by Codex, so no files are copied or duplicated." — docs/codex-setup.md:3

## Design intent — required
Explains installation, configuration, and invocation of the `agent-skills` package as a native OpenAI Codex plugin. Demonstrates how Codex consumes the root `skills/` directory directly via `.codex-plugin/plugin.json` and `.agents/plugins/marketplace.json` without requiring file duplication or translation.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill spec-driven-development — docs/codex-setup.md:25
- config .codex-plugin/plugin.json — docs/codex-setup.md:29
- config .agents/plugins/marketplace.json — docs/codex-setup.md:30

## Invoked by — required
- doc README.md — README.md:184

## Concepts named — required, verbatim
- `Codex plugin` — docs/codex-setup.md:3 — defined here
- `marketplace` — docs/codex-setup.md:8, 14, 30 — defined here
- `spec-driven-development` — docs/codex-setup.md:25 — used here

## Structure
- `# Using agent-skills with Codex` — docs/codex-setup.md:1
- `## Install` — docs/codex-setup.md:5
- `## Usage` — docs/codex-setup.md:23
- `## How it works` — docs/codex-setup.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Notes that slash commands in `.claude/commands/`, personas in `agents/`, and lifecycle hooks in `hooks/` remain Claude Code specific; on Codex, users invoke skills directly using `@` mentions (line 33). Clean PASS in Phase 1V verification.

## Context cost
1805 bytes, approximately 450 tokens.
