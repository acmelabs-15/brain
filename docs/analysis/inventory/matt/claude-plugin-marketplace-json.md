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
verified: 2026-09-04 quote-check+coverage
---

# .claude-plugin/marketplace.json

## Purpose — required, verbatim
> "Matt Pocock's skills for real engineering, as an installable Claude Code plugin." — .claude-plugin/marketplace.json:7

## Design intent — required
Defines the Claude Code marketplace catalog manifest for Matt Pocock's skills repository, providing owner contact details and registering the `mattpocock-skills` plugin with source path `./`, engineering classification, and discovery tags.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- config ./ — .claude-plugin/marketplace.json:11

## Invoked by — required
none

## Concepts named — required, verbatim
- `mattpocock` — .claude-plugin/marketplace.json:2 — defined here
- `mattpocock-skills` — .claude-plugin/marketplace.json:10 — defined here
- `engineering` — .claude-plugin/marketplace.json:13 — used here
- `skills` — .claude-plugin/marketplace.json:16 — used here
- `tdd` — .claude-plugin/marketplace.json:17 — used here
- `code-review` — .claude-plugin/marketplace.json:18 — used here
- `grilling` — .claude-plugin/marketplace.json:19 — used here

## Structure
JSON document declaring top-level properties:
- `name`
- `owner`
- `description`
- `plugins`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Unlike multi-plugin catalogs, this packages all skills into a single unified plugin entity (`mattpocock-skills` sourced from `./`).

## Context cost
605 bytes (~151 tokens). Claude Code marketplace catalog configuration.
