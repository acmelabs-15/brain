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
verified: 2026-09-04 quote-check+coverage
---

# .agents/adr/0002-ship-as-a-claude-code-plugin.md

## Purpose — required, verbatim
> "These skills have always been installable via [skills.sh](https://skills.sh/mattpocock/skills) (`npx skills add mattpocock/skills`), which copies editable skill files into a user's project across Claude Code, Codex, and other Agent-Skills-standard harnesses. A recurring request is a **plug-and-play** distribution: subscribe to the set as a read-only, always-current bundle you don't edit, rather than a fork you own. That is exactly what native plugin systems provide." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3 (no explicit purpose statement)

## Design intent — required
Documents the architectural decision to distribute the skills collection as a native Claude Code plugin while deferring a native Codex plugin. Details how Claude Code's plugin manifest (`.claude-plugin/plugin.json`) cleanly supports an array of explicit skill-directory paths, allowing selective promotion from a bucketed layout (`engineering/`, `productivity/`) while excluding drafts, deprecated, and personal buckets. In contrast, Codex requires a single path string and discards symlinks during cache installation. Also documents acceptance into Claude Code's official marketplace (`claude-plugins-official`) and release pin mechanics.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- agent .agents/install-block.md — .agents/adr/0002-ship-as-a-claude-code-plugin.md:32

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:11
- doc README.md — README.md:57

## Concepts named — required, verbatim
- `plug-and-play` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3 — used here
- `Claude Code plugin` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:5 — defined here
- `Codex plugin` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:5 — defined here
- `promoted` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:9 — defined here
- `claude-plugins-official` — .agents/adr/0002-ship-as-a-claude-code-plugin.md:32 — used here

## Structure
- # Ship the skill set as a native Claude Code plugin; defer a native Codex plugin — .agents/adr/0002-ship-as-a-claude-code-plugin.md:1
- ## The constraint: bucketed skills vs. single-path selection — .agents/adr/0002-ship-as-a-claude-code-plugin.md:7
- ## Decision — .agents/adr/0002-ship-as-a-claude-code-plugin.md:19
- ## Invariants this creates — .agents/adr/0002-ship-as-a-claude-code-plugin.md:25
- ## Update, 2026-08-05 — .agents/adr/0002-ship-as-a-claude-code-plugin.md:30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · skills/personal — .agents/adr/0002-ship-as-a-claude-code-plugin.md:9: References personal bucket folder under skills/, but no skills/personal directory exists in the repository.
- missing-path · .codex-plugin/plugin.json — .agents/adr/0002-ship-as-a-claude-code-plugin.md:13: References .codex-plugin/plugin.json, which does not exist in the repository as Codex support was deferred.

## Observations
Contrasts managed plugin subscriptions against skills.sh editable forks. Explains that releases to users via the official marketplace depend on the external marketplace catalog updating its pinned git SHA rather than immediate repository tagging.

## Context cost
5528 bytes, ~1200 tokens (8308 bytes including invoked .agents/install-block.md).
