---
package: addy
path: docs/commandcode-setup.md
type: doc
bytes: 2437
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: docs/commandcode-setup.md, sha256: 6305e672cd15c1dd709d7a2b307dca4bbf2704328654f8b3a5f37c495d3cf31c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/commandcode-setup.md

## Purpose — required, verbatim
> "[Command Code](https://commandcode.ai) has a native skills system." — docs/commandcode-setup.md:3

## Design intent — required
Documents installation, discovery, and management of `agent-skills` in Command Code (`cmd`). Details package installation at project scope (`.commandcode/skills/`) and user scope (`~/.commandcode/skills/`), support for individual skill installation, TUI slash menu discovery, and fallback compatibility paths (`.agents/skills/`).

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill spec-driven-development — docs/commandcode-setup.md:20
- skill interview-me — docs/commandcode-setup.md:33

## Invoked by — required
- doc README.md — README.md:199

## Concepts named — required, verbatim
- `Command Code` — docs/commandcode-setup.md:3 — defined here
- `Project scope` — docs/commandcode-setup.md:9 — defined here
- `spec-driven-development` — docs/commandcode-setup.md:20 — used here
- `User scope` — docs/commandcode-setup.md:23 — defined here
- `TUI slash menu` — docs/commandcode-setup.md:49 — defined here

## Structure
- `# Using agent-skills with Command Code` — docs/commandcode-setup.md:1
- `## Install` — docs/commandcode-setup.md:7
- `## Manage` — docs/commandcode-setup.md:37
- `## Usage` — docs/commandcode-setup.md:47
- `## Where skills live` — docs/commandcode-setup.md:57

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents support for both `.commandcode/skills/` and the cross-tool `.agents/skills/` compatibility directory at both project and user scopes (lines 64, 66).

## Context cost
2437 bytes, approximately 610 tokens.
