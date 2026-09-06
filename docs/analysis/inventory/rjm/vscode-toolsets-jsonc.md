---
package: rjm
path: .vscode/toolsets.jsonc
type: file
bytes: 2741
unit: inv-rjm-186
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .vscode/toolsets.jsonc, sha256: 419d9acfe3ca66bd6aed4b713acf4140bd823f1c65852507bdab3f8dee26de72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .vscode/toolsets.jsonc

## Purpose — required, verbatim
> "Toolset definitions for GitHub Copilot agents in VS Code." — .vscode/toolsets.jsonc:2

## Design intent — required
Defines modular, reusable tool bundles (toolsets) for GitHub Copilot agents operating within Visual Studio Code. It groups individual tools into 9 named toolset categories (`editor`, `executor`, `knowledge`, `github-research`, `github-oversight`, `github-code`, `github-cicd`, `github-security`, `research`), providing descriptions and icons for each group while aligning with the GitHub MCP Server toolset standard. Without it, agent configurations across VS Code would suffer from repetitive, manual tool listings that are difficult to audit, maintain, and keep synchronized with GitHub MCP toolset capabilities.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc templates/README.md — templates/README.md:250

## Concepts named — required, verbatim
- `Toolset definitions` — .vscode/toolsets.jsonc:2 — defined here
- `editor` — .vscode/toolsets.jsonc:8 — defined here
- `executor` — .vscode/toolsets.jsonc:13 — defined here
- `knowledge` — .vscode/toolsets.jsonc:18 — defined here
- `github-research` — .vscode/toolsets.jsonc:23 — defined here
- `github-oversight` — .vscode/toolsets.jsonc:36 — defined here
- `github-code` — .vscode/toolsets.jsonc:48 — defined here
- `github-cicd` — .vscode/toolsets.jsonc:62 — defined here
- `github-security` — .vscode/toolsets.jsonc:76 — defined here
- `research` — .vscode/toolsets.jsonc:86 — defined here

## Structure
- `editor` — .vscode/toolsets.jsonc:8
- `executor` — .vscode/toolsets.jsonc:13
- `knowledge` — .vscode/toolsets.jsonc:18
- `github-research` — .vscode/toolsets.jsonc:23
- `github-oversight` — .vscode/toolsets.jsonc:36
- `github-code` — .vscode/toolsets.jsonc:48
- `github-cicd` — .vscode/toolsets.jsonc:62
- `github-security` — .vscode/toolsets.jsonc:76
- `research` — .vscode/toolsets.jsonc:86

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- References external blog post on line 6: `https://github.blog/changelog/2025-12-10-the-github-mcp-server-adds-support-for-tool-specific-configuration-and-more/`.
- Accompanies `templates/toolsets.yaml` as the VS Code native JSONC representation of reusable toolset groups.
- The `knowledge` toolset aggregates memory-related tools (`cloudmcp-manager/*`, `serena/*`, `memory`) on line 19; per METHOD.md §1.2, memory implementations remain outside the lifecycle fence, but their interface grouping is inventoried here.

## Context cost
2741 bytes (~685 tokens). Static configuration file.
