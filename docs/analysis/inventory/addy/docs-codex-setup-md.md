---
package: addy
path: docs/codex-setup.md
type: doc
bytes: 1805
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: docs/codex-setup.md, sha256: ca30bfcc17ae3b2253573cd21c5f0768ae7eb99e7972b2935aa8c2ba68d65147}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/codex-setup.md

## Purpose — required, verbatim
> "This repository is also a [Codex plugin](https://developers.openai.com/codex/plugins/build). The same root-level `skills/` directory used by Claude Code is consumed by Codex, so no files are copied or duplicated." — docs/codex-setup.md:3

## Design intent — required
Documents installation and execution of `agent-skills` within OpenAI Codex CLI. It explains how Codex consumes the shared `skills/` directory via `.codex-plugin/plugin.json` without file duplication, outlines marketplace registration, and clarifies that platform-specific features (slash commands, personas, hooks) must be replaced with direct `@skill` chat invocations. Without this document, Codex users would be unaware of marketplace commands or expect unsupported slash commands to function.

## Phase — required
cross-phase

## Inputs — required
- Codex CLI v0.122 or later — docs/codex-setup.md:12
- Repository identifier `addyosmani/agent-skills` or local path — docs/codex-setup.md:8, 19

## Outputs — required
- Registered marketplace and installed plugin `agent-skills@agent-skills` — docs/codex-setup.md:8-9, 14

## Invokes — required
- skill spec-driven-development — docs/codex-setup.md:25
- config .codex-plugin/plugin.json — docs/codex-setup.md:29
- config .agents/plugins/marketplace.json — docs/codex-setup.md:30

## Invoked by — required
- doc README.md — README.md:184

## Concepts named — required, verbatim
- `Codex plugin` — docs/codex-setup.md:3 — defined here
- `marketplace` — docs/codex-setup.md:8, 14, 30 — used here

## Structure
- Using agent-skills with Codex — docs/codex-setup.md:1
- Install — docs/codex-setup.md:5
- Usage — docs/codex-setup.md:23
- How it works — docs/codex-setup.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Demonstrates zero-duplication multi-platform packaging: the same `SKILL.md` frontmatter (`name` and `description`) serves both Claude Code and Codex natively. Identifies platform boundary where Claude slash commands and agents do not port to Codex.

## Context cost
1,805 bytes (approx. 450 tokens) for this documentation file. References plugin manifests and marketplace configuration.
