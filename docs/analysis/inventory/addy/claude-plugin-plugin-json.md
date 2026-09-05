---
package: addy
path: .claude-plugin/plugin.json
type: config
bytes: 463
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude-plugin/plugin.json, sha256: 7e4db81d7b29e19ed2531beb684bbba15ee5adff00c7966eb0a7f312ce99713e}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude-plugin/plugin.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents — covering the full software development lifecycle from spec to ship." — .claude-plugin/plugin.json:4

## Design intent — required
Defines the Claude Code plugin manifest for agent-skills, declaring plugin metadata, author, license, and relative search paths for slash commands (`./.claude/commands`, `./commands`) and skills (`./skills`) so that Claude Code auto-discovers and loads them.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- config ./.claude/commands — .claude-plugin/plugin.json:11
- config ./commands — .claude-plugin/plugin.json:11
- config ./skills — .claude-plugin/plugin.json:12

## Invoked by — required
none

## Concepts named — required, verbatim
- `agent-skills` — .claude-plugin/plugin.json:2 — defined here
- `spec` — .claude-plugin/plugin.json:4 — used here
- `ship` — .claude-plugin/plugin.json:4 — used here
- `./.claude/commands` — .claude-plugin/plugin.json:11 — used here
- `./commands` — .claude-plugin/plugin.json:11 — used here
- `./skills` — .claude-plugin/plugin.json:12 — used here

## Structure
JSON document declaring top-level properties:
- `name`
- `version`
- `description`
- `author`
- `homepage`
- `repository`
- `license`
- `commands`
- `skills`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures dual command discovery directories (`./.claude/commands` for markdown command definitions and `./commands` for TOML command definitions).

## Context cost
463 bytes (~116 tokens). Manifest declaring command and skill roots.
