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
verified: 2026-09-06 quote-check+coverage
---

# .agents/adr/0002-ship-as-a-claude-code-plugin.md

## Purpose — required, verbatim
> "We ship a native **Claude Code plugin** and, for now, **defer** a native **Codex plugin**." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:5

## Design intent — required
Architectural decision record explaining why the repository distributes promoted skills as a native Claude Code plugin while deferring a native Codex plugin. Claude Code's `.claude-plugin/plugin.json` accepts an array of directory paths, cleanly selecting promoted skills across bucket folders (`engineering/` and `productivity/`), whereas Codex's `.codex-plugin/plugin.json` requires a single path string and discards symlinks upon installation. Preserves universal access via `skills.sh` while avoiding repo restructuring or duplicated skill trees.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference .agents/install-block.md — .agents/adr/0002-ship-as-a-claude-code-plugin.md:32

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:11
- doc README.md — README.md:57
- doc CHANGELOG.md — CHANGELOG.md:74

## Concepts named — required, verbatim
- `Claude Code plugin` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:5 — defined here
- `Codex plugin` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:5 — defined here
- `skills.sh` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3 — used here
- `npx skills add mattpocock/skills` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3 — used here
- `Agent-Skills-standard` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3 — used here
- `plug-and-play` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3 — used here
- `bucket folders` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:9 — used here
- `promoted` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:9 — defined here
- `.claude-plugin/plugin.json` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:11 — used here
- `.claude-plugin/marketplace.json` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:11 — used here
- `single-plugin marketplace` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:11 — defined here
- `claude plugin validate . --strict` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:11 — used here
- `.codex-plugin/plugin.json` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:13 — used here
- `symlinks` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:15 — used here
- `CLAUDE.md` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:17 — used here
- `scripts/link-skills.sh` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:17 — used here
- `claude-plugins-official` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:32 — used here
- `claude plugins install mattpocock-skills` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:32 — used here
- `claude plugin details mattpocock-skills` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:39 — used here

## Structure
- "# Ship the skill set as a native Claude Code plugin; defer a native Codex plugin" — .agents/adr/0002-ship-as-a-claude-code-plugin.md:1
- "## The constraint: bucketed skills vs. single-path selection" — .agents/adr/0002-ship-as-a-claude-code-plugin.md:7
- "## Decision" — .agents/adr/0002-ship-as-a-claude-code-plugin.md:19
- "## Invariants this creates" — .agents/adr/0002-ship-as-a-claude-code-plugin.md:25
- "## Update, 2026-08-05" — .agents/adr/0002-ship-as-a-claude-code-plugin.md:30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents the structural constraints of plugin ecosystems. Claude Code allows multi-path curation matching bucket directories, while Codex requires flat or single-path discoverability. Highlights the importance of pinned SHAs in official plugin distribution.

## Context cost
5528 bytes, 42 lines, approximately 1200 tokens.
