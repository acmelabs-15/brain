---
package: addy
path: .claude-plugin/marketplace.json
type: config
bytes: 856
unit: inv-addy-1
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .claude-plugin/marketplace.json, sha256: 97c01ad91c69e1b4da5094ef37e0f0ef7c11f3c2a2ce6c5873229a0daf96acfe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude-plugin/marketplace.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents — covering the full software development lifecycle from spec to ship." — .claude-plugin/marketplace.json:4

## Design intent — required
Declares the marketplace catalog entry for Claude Code plugin distribution, identifying the plugin owner, schema validation location, and GitHub repository source for the full lifecycle skills suite.

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
- `addy-agent-skills` — .claude-plugin/marketplace.json:3 — defined here
- `spec` — .claude-plugin/marketplace.json:4 — used here
- `ship` — .claude-plugin/marketplace.json:4 — used here
- `plan` — .claude-plugin/marketplace.json:17 — used here
- `build` — .claude-plugin/marketplace.json:17 — used here
- `verify` — .claude-plugin/marketplace.json:17 — used here
- `review` — .claude-plugin/marketplace.json:17 — used here
- `tdd` — .claude-plugin/marketplace.json:20 — used here

## Structure
JSON document declaring top-level properties:
- `$schema`
- `name`
- `description`
- `owner`
- `plugins` (array containing plugin entry: name, version, source, description, homepage, license, keywords)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Points plugin distribution source to GitHub repo `addyosmani/agent-skills` under the schema `https://json.schemastore.org/claude-code-marketplace.json`.

## Context cost
856 bytes (~214 tokens). Isolated config file.
