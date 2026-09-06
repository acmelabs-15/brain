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
verified: 2026-09-06 quote-check+coverage
---

# .agents/analysis/claude-code-plugin-marketplaces.md

## Purpose — required, verbatim
> "Claude Code's plugin marketplace system provides a standardized way to distribute collections of skills, agents, hooks, MCP servers, and LSP servers." — .agents/analysis/claude-code-plugin-marketplaces.md:9

## Design intent — required
Conducts architectural and technical research into Claude Code's plugin and marketplace distribution specifications (catalog format `.claude-plugin/marketplace.json`, plugin manifest `.claude-plugin/plugin.json`, namespacing rules, and hook definitions) to evaluate the feasibility of packaging and distributing `ai-agents` components. Evaluates hosting models (Git repository vs URL vs local paths), enterprise governance constraints (`strictKnownMarketplaces`), namespacing impacts (`/plugin-name:skill`), and hook schema migrations to `hooks.json` using `${CLAUDE_PLUGIN_ROOT}`. Without this analysis, `ai-agents` would lack architectural clarity on the official plugin format, leading to naive extraction strategies that fail relative path resolution, violate reserved marketplace naming rules, or misconfigure plugin-scoped hook and MCP registrations.

## Phase — required
none

## Inputs — required
- Claude Code official documentation: `https://code.claude.com/docs/en/plugin-marketplaces` and `https://code.claude.com/docs/en/plugins` (.agents/analysis/claude-code-plugin-marketplaces.md:4)
- Technical guides and community references: `Create Plugins Guide`, `Discover and Install Plugins`, `Plugins Reference`, and `Awesome Claude Code Plugins` (.agents/analysis/claude-code-plugin-marketplaces.md:336-342)
- Existing `ai-agents` repository structure: `.claude/skills/`, `.claude/hooks/`, `.claude/skills/github/`, and `.claude/skills/memory/` (.agents/analysis/claude-code-plugin-marketplaces.md:288-294)

## Outputs — required
- Declarative marketplace and plugin catalog schemas (`.claude-plugin/marketplace.json` and `.claude-plugin/plugin.json`) (.agents/analysis/claude-code-plugin-marketplaces.md:58-93)
- CLI workflows for adding marketplaces, installing plugins, and updating catalogs (.agents/analysis/claude-code-plugin-marketplaces.md:128-139)
- Repository and enterprise policy configuration specifications: `extraKnownMarketplaces`, `enabledPlugins`, and `strictKnownMarketplaces` in `.claude/settings.json` (.agents/analysis/claude-code-plugin-marketplaces.md:145-179)
- Five-phase migration roadmap for packaging `ai-agents` skills and hooks into plugins (.agents/analysis/claude-code-plugin-marketplaces.md:305-320)

## Invokes — required
- doc claude-code-hooks-opportunity-analysis — .agents/analysis/claude-code-plugin-marketplaces.md:359
- doc SKILL-QUICK-REF.md — .agents/analysis/claude-code-plugin-marketplaces.md:351

## Invoked by — required
- doc ADR-045-framework-extraction-via-plugin-marketplace.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:58
- doc PLAN.md — .agents/projects/v0.4.0/PLAN.md:758
- doc ADR-047-plugin-mode-hook-behavior.md — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:274
- doc adr-045-feasibility-analysis.md — .agents/analysis/adr-045-feasibility-analysis.md:243

## Concepts named — required, verbatim
- `Claude Code Plugin Marketplaces` — .agents/analysis/claude-code-plugin-marketplaces.md:1 — defined here
- `strictKnownMarketplaces` — .agents/analysis/claude-code-plugin-marketplaces.md:16 — defined here
- `Plugin` — .agents/analysis/claude-code-plugin-marketplaces.md:23 — defined here
- `plugin.json` — .agents/analysis/claude-code-plugin-marketplaces.md:27 — defined here
- `hooks.json` — .agents/analysis/claude-code-plugin-marketplaces.md:31 — defined here
- `mcp.json` — .agents/analysis/claude-code-plugin-marketplaces.md:32 — defined here
- `lsp.json` — .agents/analysis/claude-code-plugin-marketplaces.md:33 — defined here
- `Marketplace` — .agents/analysis/claude-code-plugin-marketplaces.md:35 — defined here
- `marketplace.json` — .agents/analysis/claude-code-plugin-marketplaces.md:37 — defined here
- `Standalone Configuration` — .agents/analysis/claude-code-plugin-marketplaces.md:44 — defined here
- `pluginRoot` — .agents/analysis/claude-code-plugin-marketplaces.md:82 — defined here
- `Version Pinning` — .agents/analysis/claude-code-plugin-marketplaces.md:103 — defined here
- `extraKnownMarketplaces` — .agents/analysis/claude-code-plugin-marketplaces.md:147 — defined here
- `enabledPlugins` — .agents/analysis/claude-code-plugin-marketplaces.md:155 — defined here
- `disable-model-invocation` — .agents/analysis/claude-code-plugin-marketplaces.md:189 — defined here
- `PostToolUse` — .agents/analysis/claude-code-plugin-marketplaces.md:205 — defined here
- `CLAUDE_PLUGIN_ROOT` — .agents/analysis/claude-code-plugin-marketplaces.md:211 — defined here
- `MCP Servers` — .agents/analysis/claude-code-plugin-marketplaces.md:222 — defined here
- `LSP Servers` — .agents/analysis/claude-code-plugin-marketplaces.md:235 — defined here
- `Reserved Names` — .agents/analysis/claude-code-plugin-marketplaces.md:262 — defined here
- `Plugin Caching` — .agents/analysis/claude-code-plugin-marketplaces.md:274 — defined here

## Structure
- Claude Code Plugin Marketplaces: Comprehensive Analysis
- Executive Summary
- Core Concepts
- What is a Plugin?
- What is a Marketplace?
- Plugin vs Standalone Configuration
- Marketplace Architecture
- Directory Structure
- Marketplace Schema
- Plugin Sources
- Key Workflows
- Creating a Marketplace
- Installing Plugins
- Team-Wide Configuration
- Enterprise Restrictions
- Plugin Components
- Skills
- Hooks
- MCP Servers
- LSP Servers
- Failure Modes and Anti-Patterns
- Common Issues
- Reserved Names
- Plugin Caching
- Project Applicability
- Current State
- Integration Opportunities
- Migration Path
- Considerations
- Related Concepts
- References
- Action Items
- Memory Cross-References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/analysis/claude-code-plugin-marketplaces.md:351 · References `SKILL-QUICK-REF.md` which does not exist in the repository.

## Observations
- Provides the authoritative external specification research that grounded ADR-045, ADR-047, and the v0.4.0 project plan.
- Identifies critical constraints of Claude Code plugins, including plugin caching behavior (which breaks relative `../` directory traversals), reserved marketplace names, and namespaced command syntax (`/plugin-name:skill-name`).
- Outlines the configuration patterns for enterprise management using `strictKnownMarketplaces` allowlists and repository-level auto-enablement in `.claude/settings.json`.

## Context cost
10131 bytes, ~2,600 tokens. Foundational research on Claude Code plugin architecture; referenced by ADR-045, ADR-047, and PLAN.md.
