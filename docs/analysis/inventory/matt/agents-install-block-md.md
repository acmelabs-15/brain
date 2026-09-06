---
package: matt
path: .agents/install-block.md
type: agent
bytes: 2780
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/install-block.md, sha256: 23f776c69d4b8688e18fd2a29d51ed4f2cb40132f0c3acb3a1ca6d45c1d18f65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .agents/install-block.md

## Purpose — required, verbatim
> "One install story, one wording. `README.md`, `.changeset/*`, and every page under `docs/` must say **this** and nothing else. Change it here first, then propagate." — .agents/install-block.md:3

## Design intent — required
Defines the canonical, single source of truth for installation instructions across the entire repository. Specifies exact markup and commands for Claude Code official plugin installation and skills.sh universal CLI installation, explicitly asserting that the two methods are mutually exclusive so users avoid duplicated skill installations. Also instructs documentation writers that aihero.dev renders the install widget dynamically, so individual docs pages must omit static install snippets.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference writing-docs.md — .agents/install-block.md:39
- skill setup-matt-pocock-skills — .agents/install-block.md:35

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:11
- agent .agents/adr/0002-ship-as-a-claude-code-plugin.md — .agents/adr/0002-ship-as-a-claude-code-plugin.md:32
- agent .agents/writing-docs.md — .agents/writing-docs.md:19

## Concepts named — required, verbatim
- `canonical install block` — .agents/install-block.md:1 — defined here
- `Claude Code's official marketplace` — .agents/install-block.md:5 — used here
- `claude-plugins-official` — .agents/install-block.md:5 — used here
- `auto-update` — .agents/install-block.md:5 — used here
- `claude plugins install mattpocock-skills` — .agents/install-block.md:12 — used here
- `/plugin install mattpocock-skills` — .agents/install-block.md:18 — used here
- `skills.sh` — .agents/install-block.md:27 — used here
- `npx skills@latest add mattpocock/skills` — .agents/install-block.md:32 — used here
- `setup-matt-pocock-skills` — .agents/install-block.md:35 — used here
- `npx skills@latest add mattpocock/skills --skill=<name>` — .agents/install-block.md:44 — used here
- `npx skills@latest update <name>` — .agents/install-block.md:48 — used here
- `skills@latest` — .agents/install-block.md:53 — used here
- `.claude-plugin/marketplace.json` — .agents/install-block.md:61 — used here
- `/plugin marketplace add mattpocock/skills` — .agents/install-block.md:61 — used here
- `/plugin install mattpocock-skills@mattpocock` — .agents/install-block.md:61 — used here

## Structure
- "# The canonical install block" — .agents/install-block.md:1
- "## Claude Code: the plugin" — .agents/install-block.md:7
- "## Codex, and other agents: skills.sh" — .agents/install-block.md:25
- "## The two routes are exclusive" — .agents/install-block.md:55
- "## Not the install story" — .agents/install-block.md:59

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces strict documentation hygiene by eliminating divergent installation commands across markdown pages and changelogs. Documents the auto-update behavior of the official Anthropic plugin marketplace.

## Context cost
2780 bytes, 62 lines, approximately 600 tokens.
