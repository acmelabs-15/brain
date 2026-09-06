---
package: addy
path: .codex-plugin/plugin.json
type: config
bytes: 1119
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .codex-plugin/plugin.json, sha256: a4b79f3cae857be406a7a29b4f525a8b472c2c94505be0b8738b99c9a22dc09c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .codex-plugin/plugin.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents covering the full software development lifecycle from spec to ship." — .codex-plugin/plugin.json:4

## Design intent — required
Defines the plugin manifest for OpenAI Codex / ChatGPT Agent plugin integration. It exposes metadata (name, version 0.6.8, author, repository, capabilities) and points the Codex plugin engine to `./skills/` for discovering the 24 engineering workflow skills, as well as providing default user prompt suggestions and interface categorization.

## Phase — required
cross-phase

## Inputs — required
- Skill definitions directory `./skills/` — .codex-plugin/plugin.json:12

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `agent-skills` — .codex-plugin/plugin.json:2 — defined here
- `Agent Skills` — .codex-plugin/plugin.json:14, 16 — defined here
- `capabilities` — .codex-plugin/plugin.json:19 — defined here
- `defaultPrompt` — .codex-plugin/plugin.json:24 — defined here

## Structure
- `{` — .codex-plugin/plugin.json:1
- `interface` — .codex-plugin/plugin.json:13

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures the Codex plugin harness specifically, pointing `skills` to `./skills/` and declaring capabilities `Interactive`, `Read`, and `Write`. Unlike `.claude-plugin/plugin.json`, it includes structured `interface` metadata with `displayName`, `shortDescription`, `longDescription`, `category`, and suggested `defaultPrompt` strings.

## Context cost
1,119 bytes (~280 tokens). Loads no other files directly.
