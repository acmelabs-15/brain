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
verified: 2026-09-05 quote-check+coverage
---

# .claude-plugin/marketplace.json

## Purpose — required, verbatim
> "Matt Pocock's skills for real engineering, as an installable Claude Code plugin." — .claude-plugin/marketplace.json:7

## Design intent — required
Provides the Claude Code marketplace catalog definition for the `mattpocock` repository. It declares the marketplace metadata, author ownership details, and registers the `mattpocock-skills` plugin with its local source directory (`./`), description, category (`engineering`), and search keywords. Without this file, Claude Code cannot discover or index the repository as an installable marketplace source.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `mattpocock` — .claude-plugin/marketplace.json:2 — defined here
- `mattpocock-skills` — .claude-plugin/marketplace.json:10 — used here
- `engineering` — .claude-plugin/marketplace.json:13 — used here
- `tdd` — .claude-plugin/marketplace.json:17 — used here
- `code-review` — .claude-plugin/marketplace.json:18 — used here
- `grilling` — .claude-plugin/marketplace.json:19 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Declares the catalog entry for Claude Code marketplace distribution, pointing to the local directory `./` where `plugin.json` resides.

## Context cost
605 bytes, approximately 150 tokens.
