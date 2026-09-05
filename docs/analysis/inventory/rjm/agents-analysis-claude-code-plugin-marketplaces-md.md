---
package: rjm
path: .agents/analysis/claude-code-plugin-marketplaces.md
type: agent
bytes: 10131
unit: inv-rjm-3
in_scope_via: .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md
aliases: []
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/analysis/claude-code-plugin-marketplaces.md

## Purpose — required, verbatim
> "Claude Code's plugin marketplace system provides a standardized way to distribute collections of skills, agents, hooks, MCP servers, and LSP servers." — .agents/analysis/claude-code-plugin-marketplaces.md:9

## Design intent — required
An architectural research document evaluating Claude Code's plugin marketplace distribution system. It investigates how collections of skills, agents, hooks, MCP servers, and LSP servers can be packaged, distributed, and managed across teams. By specifying catalog directory structures, marketplace schema (`.claude-plugin/marketplace.json`), hosting models (GitHub, Git URL, relative paths), enterprise governance policies (`strictKnownMarketplaces`), and cache isolation constraints, it provides the foundational technical research that directly informed ADR-045 (Framework Extraction via Plugin Marketplace) and ADR-047 (Plugin Mode Hook Behavior).

## Phase — required
none

## Inputs — required
- Official Anthropic Claude Code documentation sources: `https://code.claude.com/docs/en/plugin-marketplaces`, `https://code.claude.com/docs/en/plugins`, `https://code.claude.com/docs/en/discover-plugins`, and `https://code.claude.com/docs/en/plugins-reference` (session 1180 research).
- Existing repository structure of `ai-agents`: ~50 skills in `.claude/skills/`, hooks in `.claude/hooks/`, GitHub skills, and memory skills.

## Outputs — required
- Architectural specification of plugin and marketplace JSON schemas (`.claude-plugin/marketplace.json` and `.claude-plugin/plugin.json`).
- Comparative framework contrasting standalone configuration (`.claude/`) with plugins:
> "Plugins are namespaced to prevent conflicts" — .agents/analysis/claude-code-plugin-marketplaces.md:14
- Configuration standards for repository-level plugin enablement via `.claude/settings.json` (`extraKnownMarketplaces`, `enabledPlugins`) and enterprise restriction models (`strictKnownMarketplaces`).
- Catalog of reserved marketplace names (`claude-code-marketplace`, `agent-skills`, etc.) and cache-isolation failure modes.
- 5-phase migration roadmap for packaging repository capabilities into Claude Code plugins.

## Invokes — required
none

## Invoked by — required
- doc .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:58
- doc .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:262
- doc .agents/architecture/ADR-047-plugin-mode-hook-behavior.md — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:274

## Concepts named — required, verbatim
- `Plugin` — .agents/analysis/claude-code-plugin-marketplaces.md:23 — defined here
- `Marketplace` — .agents/analysis/claude-code-plugin-marketplaces.md:35 — defined here
- `plugin.json` — .agents/analysis/claude-code-plugin-marketplaces.md:27 — used here
- `marketplace.json` — .agents/analysis/claude-code-plugin-marketplaces.md:37 — used here
- `strictKnownMarketplaces` — .agents/analysis/claude-code-plugin-marketplaces.md:16 — used here
- `extraKnownMarketplaces` — .agents/analysis/claude-code-plugin-marketplaces.md:147 — used here
- `enabledPlugins` — .agents/analysis/claude-code-plugin-marketplaces.md:155 — used here
- `CLAUDE_PLUGIN_ROOT` — .agents/analysis/claude-code-plugin-marketplaces.md:220 — used here
- `MCP Servers` — .agents/analysis/claude-code-plugin-marketplaces.md:222 — used here
- `LSP Servers` — .agents/analysis/claude-code-plugin-marketplaces.md:235 — used here
- `Skills` — .agents/analysis/claude-code-plugin-marketplaces.md:184 — used here
- `Hooks` — .agents/analysis/claude-code-plugin-marketplaces.md:200 — used here

## Structure
- Claude Code Plugin Marketplaces: Comprehensive Analysis — .agents/analysis/claude-code-plugin-marketplaces.md:1
- Executive Summary — .agents/analysis/claude-code-plugin-marketplaces.md:7
- Core Concepts — .agents/analysis/claude-code-plugin-marketplaces.md:21
- What is a Plugin? — .agents/analysis/claude-code-plugin-marketplaces.md:23
- What is a Marketplace? — .agents/analysis/claude-code-plugin-marketplaces.md:35
- Plugin vs Standalone Configuration — .agents/analysis/claude-code-plugin-marketplaces.md:44
- Marketplace Architecture — .agents/analysis/claude-code-plugin-marketplaces.md:53
- Directory Structure — .agents/analysis/claude-code-plugin-marketplaces.md:55
- Marketplace Schema — .agents/analysis/claude-code-plugin-marketplaces.md:70
- Plugin Sources — .agents/analysis/claude-code-plugin-marketplaces.md:95
- Key Workflows — .agents/analysis/claude-code-plugin-marketplaces.md:116
- Creating a Marketplace — .agents/analysis/claude-code-plugin-marketplaces.md:118
- Installing Plugins — .agents/analysis/claude-code-plugin-marketplaces.md:126
- Team-Wide Configuration — .agents/analysis/claude-code-plugin-marketplaces.md:141
- Enterprise Restrictions — .agents/analysis/claude-code-plugin-marketplaces.md:161
- Plugin Components — .agents/analysis/claude-code-plugin-marketplaces.md:182
- Skills — .agents/analysis/claude-code-plugin-marketplaces.md:184
- Hooks — .agents/analysis/claude-code-plugin-marketplaces.md:200
- MCP Servers — .agents/analysis/claude-code-plugin-marketplaces.md:222
- LSP Servers — .agents/analysis/claude-code-plugin-marketplaces.md:235
- Failure Modes and Anti-Patterns — .agents/analysis/claude-code-plugin-marketplaces.md:250
- Common Issues — .agents/analysis/claude-code-plugin-marketplaces.md:252
- Reserved Names — .agents/analysis/claude-code-plugin-marketplaces.md:262
- Plugin Caching — .agents/analysis/claude-code-plugin-marketplaces.md:274
- Project Applicability — .agents/analysis/claude-code-plugin-marketplaces.md:284
- Current State — .agents/analysis/claude-code-plugin-marketplaces.md:286
- Integration Opportunities — .agents/analysis/claude-code-plugin-marketplaces.md:295
- Migration Path — .agents/analysis/claude-code-plugin-marketplaces.md:305
- Considerations — .agents/analysis/claude-code-plugin-marketplaces.md:313
- Related Concepts — .agents/analysis/claude-code-plugin-marketplaces.md:322
- References — .agents/analysis/claude-code-plugin-marketplaces.md:334
- Action Items — .agents/analysis/claude-code-plugin-marketplaces.md:345
- Memory Cross-References — .agents/analysis/claude-code-plugin-marketplaces.md:355

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` — `SKILL-QUICK-REF.md` referenced at .agents/analysis/claude-code-plugin-marketplaces.md:351 does not exist in the repository.

## Observations
- Identifies critical plugin cache isolation constraint: "Files outside the plugin directory are not available" — .agents/analysis/claude-code-plugin-marketplaces.md:278, meaning parent directory traversals (`../`) break after installation, necessitating `${CLAUDE_PLUGIN_ROOT}` for internal paths.
- Details reserved marketplace identifiers (`claude-code-marketplace`, `agent-skills`, etc.) that must not be used by external distributions.
- Direct foundation for ADR-045 4-plugin architecture (`core-agents`, `framework-skills`, `session-protocol`, `quality-gates`).

## Context cost
10131 bytes, ~2500 tokens. Standalone analysis document.
