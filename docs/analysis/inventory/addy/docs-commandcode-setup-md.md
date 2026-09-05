---
package: addy
path: docs/commandcode-setup.md
type: doc
bytes: 2437
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: docs/commandcode-setup.md, sha256: 6305e672cd15c1dd709d7a2b307dca4bbf2704328654f8b3a5f37c495d3cf31c}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/commandcode-setup.md

## Purpose — required, verbatim
> "[Command Code](https://commandcode.ai) has a native skills system. The built-in `cmd skills` command clones a GitHub repo, recursively discovers every `SKILL.md`, and installs the ones you pick." — docs/commandcode-setup.md:3

## Design intent — required
Documents installation, discovery, and management of `agent-skills` within the Command Code CLI (`cmd`). It explains project vs. user scoping, selective skill installation, interactive multi-select menus, and compatibility paths (`.agents/skills/` alongside native `.commandcode/skills/`). Without this document, Command Code users would not know how to discover, selectively install, or manage skills from GitHub repositories.

## Phase — required
cross-phase

## Inputs — required
- Command Code CLI (`cmd`, `cmdc`, `command-code`) — docs/commandcode-setup.md:5
- Repository path `addyosmani/agent-skills` or specific branch/subpath — docs/commandcode-setup.md:12, 20, 32-34

## Outputs — required
- Installed skills under `.commandcode/skills/<name>/SKILL.md` (docs/commandcode-setup.md:63) or `~/.commandcode/skills/<name>/SKILL.md` — docs/commandcode-setup.md:65

## Invokes — required
- skill spec-driven-development — docs/commandcode-setup.md:20
- skill interview-me — docs/commandcode-setup.md:33

## Invoked by — required
- doc README.md — README.md:199

## Concepts named — required, verbatim
- `Project scope` — docs/commandcode-setup.md:9 — defined here
- `User scope` — docs/commandcode-setup.md:23 — defined here
- `TUI slash menu` — docs/commandcode-setup.md:49 — used here

## Structure
- Using agent-skills with Command Code — docs/commandcode-setup.md:1
- Install — docs/commandcode-setup.md:7
- Manage — docs/commandcode-setup.md:37
- Usage — docs/commandcode-setup.md:47
- Where skills live — docs/commandcode-setup.md:57

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents backward/forward compatibility discovery paths: Command Code also reads `.agents/skills/<name>/SKILL.md` (lines 64, 66), maintaining interoperability with Antigravity conventions without extra configuration.

## Context cost
2,437 bytes (approx. 600 tokens) for this documentation file. Self-contained integration guide.
