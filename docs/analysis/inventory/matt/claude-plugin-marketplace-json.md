---
package: matt
path: .claude-plugin/marketplace.json
type: config
bytes: 605
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude-plugin/marketplace.json, sha256: 83e889fed719fc92dc17a4accc69beed7d6c28bc87ec064b515a90a030f72e13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude-plugin/marketplace.json

## Purpose — required, verbatim
> "Matt Pocock's skills for real engineering, as an installable Claude Code plugin." — .claude-plugin/marketplace.json:7

## Design intent — required
Defines the marketplace catalog descriptor for publishing the `mattpocock-skills` package as an installable Claude Code plugin. Specifies the catalog owner, plugin source path relative to the marketplace file, marketing description, category, and discovery keywords.

## Phase — required
none

## Inputs — required
Repository root plugin content referenced via source pointer `"./"`.

## Outputs — required
Marketplace plugin listing enabling installation of `mattpocock-skills` via Claude Code plugin tooling.

## Invokes — required
none

## Invoked by — required
entry-point

## Concepts named — required, verbatim
- `mattpocock` — .claude-plugin/marketplace.json:2 — defined here
- `Claude Code plugin` — .claude-plugin/marketplace.json:7 — defined here
- `mattpocock-skills` — .claude-plugin/marketplace.json:10 — defined here
- `agent skills` — .claude-plugin/marketplace.json:12 — defined here
- `grilling` — .claude-plugin/marketplace.json:12 — used here
- `spec/ticket flows` — .claude-plugin/marketplace.json:12 — defined here
- `TDD` — .claude-plugin/marketplace.json:12 — used here
- `code review` — .claude-plugin/marketplace.json:12 — used here
- `domain modelling` — .claude-plugin/marketplace.json:12 — defined here
- `engineering` — .claude-plugin/marketplace.json:13 — used here
- `tdd` — .claude-plugin/marketplace.json:17 — used here
- `code-review` — .claude-plugin/marketplace.json:18 — used here

## Structure
JSON root object:
- `name`
- `owner`
- `description`
- `plugins`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines marketplace metadata for Claude Code plugin discovery. Cites `domain modelling` with British English spelling at line 12 while directory names use American English `domain-modeling`. Source points to `"./"` (repo root).

## Context cost
605 bytes, ~150 tokens. Loads no external files.
