---
package: addy
path: docs/commandcode-setup.md
type: doc
bytes: 2437
unit: inv-addy-4
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/commandcode-setup.md, sha256: 6305e672cd15c1dd709d7a2b307dca4bbf2704328654f8b3a5f37c495d3cf31c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/commandcode-setup.md

## Purpose — required, verbatim
> "[Command Code](https://commandcode.ai) has a native skills system. The built-in `cmd skills` command clones a GitHub repo, recursively discovers every `SKILL.md`, and installs the ones you pick." — docs/commandcode-setup.md:3

## Design intent — required
Documents installation, discovery, management, and usage of the agent skills pack with Command Code, outlining project-level and user-level scopes along with `.agents/` compatibility fallbacks.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill spec-driven-development — docs/commandcode-setup.md:52

## Invoked by — required
none

## Concepts named — required, verbatim
- `Command Code` — docs/commandcode-setup.md:1, 3 — used here
- `spec-driven-development` — docs/commandcode-setup.md:20, 41, 52 — used here

## Structure
- # Using agent-skills with Command Code
- ## Install
- ## Manage
- ## Usage
- ## Where skills live

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Lists multiple discovery directories including native `.commandcode/skills/` and compatibility paths `.agents/skills/` at both project and global user levels.

## Context cost
2437 bytes (~610 tokens). Short installation and reference guide.
