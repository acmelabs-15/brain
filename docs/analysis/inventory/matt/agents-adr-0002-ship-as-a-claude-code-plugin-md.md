---
package: matt
path: .agents/adr/0002-ship-as-a-claude-code-plugin.md
type: agent
bytes: 5528
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/adr/0002-ship-as-a-claude-code-plugin.md

## Purpose — required, verbatim
> "We ship a native **Claude Code plugin** and, for now, **defer** a native **Codex plugin**. The split is forced by how each ecosystem's plugin manifest selects skills, against this repo's bucketed layout." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:5

## Design intent — required
Architectural decision record explaining the rationale for shipping the repository's promoted skill set (`engineering/` and `productivity/`) as a native Claude Code plugin (`.claude-plugin/plugin.json`), while deferring a native Codex plugin. Details how Claude Code supports an array of explicit skill-directory paths, whereas Codex requires a single path string and strips symlinks on install, preventing clean curation of a bucketed repository. Retains `skills.sh` as the universal cross-harness installer and records subsequent acceptance into Anthropic's official marketplace (`claude-plugins-official`).

## Phase — required
none

## Inputs — required
Package layout across bucket folders (`skills/engineering/`, `skills/productivity/`, `skills/misc/`, etc.), Claude Code plugin manifest requirements (`.claude-plugin/plugin.json`), Codex plugin manifest specification, and `skills.sh` distribution mechanism.

## Outputs — required
Decision to release native Claude Code plugin, defer Codex plugin, retain `skills.sh`, and update `.agents/install-block.md`.

## Invokes — required
- doc install-block.md — .agents/adr/0002-ship-as-a-claude-code-plugin.md:32
- config .claude-plugin/plugin.json — .agents/adr/0002-ship-as-a-claude-code-plugin.md:11
- config .claude-plugin/marketplace.json — .agents/adr/0002-ship-as-a-claude-code-plugin.md:11

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:11
- doc CHANGELOG.md — CHANGELOG.md:74
- doc README.md — README.md:57

## Concepts named — required, verbatim
- `skills.sh` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3 — used here
- `plug-and-play` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3 — used here
- `Claude Code plugin` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:5 — defined here
- `Codex plugin` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:5 — defined here
- `bucket folders` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:9 — defined here
- `promoted` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:9 — defined here
- `single-plugin marketplace` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:11 — defined here
- `claude-plugins-official` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:32 — used here

## Structure
- Ship the skill set as a native Claude Code plugin; defer a native Codex plugin — .agents/adr/0002-ship-as-a-claude-code-plugin.md:1
- The constraint: bucketed skills vs. single-path selection — .agents/adr/0002-ship-as-a-claude-code-plugin.md:7
- Decision — .agents/adr/0002-ship-as-a-claude-code-plugin.md:19
- Invariants this creates — .agents/adr/0002-ship-as-a-claude-code-plugin.md:25
- Update, 2026-08-05 — .agents/adr/0002-ship-as-a-claude-code-plugin.md:30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides in-depth architectural analysis of cross-harness distribution: Codex's single-directory discovery model prevents selective skill exposure without tree restructuring or symlinks, and Codex's plugin installer strips symlinks on copy. Documents that official Anthropic marketplace plugin releases update only when the marketplace repo moves its pinned commit SHA.

## Context cost
5528 bytes, ~1200 tokens. References `.agents/install-block.md` (2780 bytes) and `.claude-plugin/plugin.json` (1636 bytes).
