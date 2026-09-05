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
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude-plugin/plugin.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents — covering the full software development lifecycle from spec to ship." — .claude-plugin/plugin.json:4 (no explicit purpose statement)

## Design intent — required
Manifest configuration declaring the `agent-skills` plugin definition for Claude Code. It defines the plugin identity, version, authorship, repositories, and exact directories where Claude Code discovers slash commands (`./.claude/commands` and `./commands`) and workflow skills (`./skills`). Without it, Claude Code cannot locate or load the plugin's components.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
`agent-skills` — .claude-plugin/plugin.json:2 — defined here
`spec` — .claude-plugin/plugin.json:4 — used here
`ship` — .claude-plugin/plugin.json:4 — used here

## Structure
JSON object:
- `name` — .claude-plugin/plugin.json:2
- `version` — .claude-plugin/plugin.json:3
- `description` — .claude-plugin/plugin.json:4
- `author` — .claude-plugin/plugin.json:5
- `homepage` — .claude-plugin/plugin.json:8
- `repository` — .claude-plugin/plugin.json:9
- `license` — .claude-plugin/plugin.json:10
- `commands` — .claude-plugin/plugin.json:11
- `skills` — .claude-plugin/plugin.json:12

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exposes commands from both `./.claude/commands` (Claude Code markdown commands) and `./commands` (Antigravity TOML commands).

## Context cost
463 bytes, approximately 110 tokens.
