---
package: addy
path: docs/codex-setup.md
type: doc
bytes: 1805
unit: inv-addy-4
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/codex-setup.md, sha256: ca30bfcc17ae3b2253573cd21c5f0768ae7eb99e7972b2935aa8c2ba68d65147}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/codex-setup.md

## Purpose — required, verbatim
> "This repository is also a [Codex plugin](https://developers.openai.com/codex/plugins/build). The same root-level `skills/` directory used by Claude Code is consumed by Codex, so no files are copied or duplicated." — docs/codex-setup.md:3

## Design intent — required
Documents installation, discovery, and usage of the repository as an OpenAI Codex plugin, explaining how Codex natively loads root `skills/` via `.codex-plugin/plugin.json` without requiring file duplication across tools.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- config plugin.json — docs/codex-setup.md:29
- config marketplace.json — docs/codex-setup.md:30
- skill spec-driven-development — docs/codex-setup.md:25

## Invoked by — required
none

## Concepts named — required, verbatim
- `Codex plugin` — docs/codex-setup.md:3 — defined here
- `spec-driven-development` — docs/codex-setup.md:25, 33 — used here

## Structure
- # Using agent-skills with Codex
- ## Install
- ## Usage
- ## How it works

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Clarifies the boundary of cross-platform portability: skill files (`skills/<name>/SKILL.md`) share the identical YAML frontmatter format across platforms, but slash commands, personas, and session hooks remain Claude Code-specific and must be invoked by skill name on Codex.

## Context cost
1805 bytes (~450 tokens). Compact setup document.
