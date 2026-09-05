---
package: rjm
path: .agents/analysis/claude-code-plugin-marketplaces.md
type: agent
bytes: 10131
unit: inv-rjm-3
deprecated: false
in_scope_via: inv-rjm-3
aliases: []
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/analysis/claude-code-plugin-marketplaces.md

## Purpose — required, verbatim
> "Claude Code's plugin marketplace system provides a standardized way to distribute collections of skills, agents, hooks, MCP servers, and LSP servers." — .agents/analysis/claude-code-plugin-marketplaces.md:9

## Design intent — required
Evaluates Anthropic's Claude Code plugin marketplace specification (catalog schema, version pinning, installation workflows, namespace isolation, enterprise governance, and cache semantics) to assess how `ai-agents` can migrate from a standalone `.claude/` structure to distributable, versioned plugin packages. Identifies migration paths, namespace impacts, and breaking change risks for skills, hooks, and MCP servers.

## Phase — required
none

## Inputs — required
- External Anthropic documentation and guides: `https://code.claude.com/docs/en/plugin-marketplaces`, `https://code.claude.com/docs/en/plugins`, `https://code.claude.com/docs/en/discover-plugins`, `https://code.claude.com/docs/en/plugins-reference`, `https://github.com/ccplugins/awesome-claude-code-plugins`, `https://claude.com/blog/claude-code-plugins`
- Repository configuration and directory state: ~50 skills in `.claude/skills/`, hooks in `.claude/hooks/`, GitHub skill scripts in `.claude/skills/github/`, and memory skills in `.claude/skills/memory/`

## Outputs — required
- Architecture analysis document covering plugin directory layout, marketplace catalog schema (`marketplace.json`), CLI management commands (`/plugin marketplace add`, `/plugin install`), configuration files (`.claude/settings.json`), enterprise controls (`strictKnownMarketplaces`), failure modes, and a 5-phase migration roadmap for `ai-agents`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Plugin` — .agents/analysis/claude-code-plugin-marketplaces.md:23 — defined here
- `.claude-plugin/plugin.json` — .agents/analysis/claude-code-plugin-marketplaces.md:27 — used here
- `hooks.json` — .agents/analysis/claude-code-plugin-marketplaces.md:31 — used here
- `Marketplace` — .agents/analysis/claude-code-plugin-marketplaces.md:35 — defined here
- `.claude-plugin/marketplace.json` — .agents/analysis/claude-code-plugin-marketplaces.md:37 — used here
- `.claude/settings.json` — .agents/analysis/claude-code-plugin-marketplaces.md:143 — used here
- `extraKnownMarketplaces` — .agents/analysis/claude-code-plugin-marketplaces.md:147 — used here
- `strictKnownMarketplaces` — .agents/analysis/claude-code-plugin-marketplaces.md:163 — used here
- `${CLAUDE_PLUGIN_ROOT}` — .agents/analysis/claude-code-plugin-marketplaces.md:220 — used here
- `Phase 1` — .agents/analysis/claude-code-plugin-marketplaces.md:307 — used here
- `Phase 2` — .agents/analysis/claude-code-plugin-marketplaces.md:308 — used here
- `Phase 3` — .agents/analysis/claude-code-plugin-marketplaces.md:309 — used here
- `Phase 4` — .agents/analysis/claude-code-plugin-marketplaces.md:310 — used here
- `Phase 5` — .agents/analysis/claude-code-plugin-marketplaces.md:311 — used here

## Structure
- `## Executive Summary`
- `## Core Concepts`
- `### What is a Plugin?`
- `### What is a Marketplace?`
- `### Plugin vs Standalone Configuration`
- `## Marketplace Architecture`
- `### Directory Structure`
- `### Marketplace Schema`
- `### Plugin Sources`
- `## Key Workflows`
- `### Creating a Marketplace`
- `### Installing Plugins`
- `### Team-Wide Configuration`
- `### Enterprise Restrictions`
- `## Plugin Components`
- `### Skills`
- `### Hooks`
- `### MCP Servers`
- `### LSP Servers`
- `## Failure Modes and Anti-Patterns`
- `### Common Issues`
- `### Reserved Names`
- `### Plugin Caching`
- `## Project Applicability`
- `### Current State`
- `### Integration Opportunities`
- `### Migration Path`
- `### Considerations`
- `## Related Concepts`
- `## References`
- `## Action Items`
- `## Memory Cross-References`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` · .agents/analysis/claude-code-plugin-marketplaces.md:1 · Nothing in scope invokes or references this analysis document.

## Observations
- Analyzes Anthropic's plugin marketplace mechanism and highlights key architectural constraints: plugin caching copies plugins to cache directories (breaking `../` relative references), relative paths only work with Git-based marketplaces, and plugin namespacing alters command invocations from `/skill` to `/plugin-name:skill`.
- Identifies reserved marketplace names (`claude-code-marketplace`, `claude-code-plugins`, `claude-plugins-official`, `anthropic-marketplace`, `anthropic-plugins`, `agent-skills`, `life-sciences`).

## Context cost
10131 bytes (~2533 tokens). Self-contained analysis document with no external inclusions or runtime dependencies.
