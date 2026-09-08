---
package: rjm
name: GitHub MCP Server toolsets
slug: github-mcp-server-toolsets
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# GitHub MCP Server toolsets

## Definition — verbatim
(used, not defined)

> "This concept aligns with [GitHub MCP Server toolsets](https://github.blog/changelog/2025-12-10-the-github-mcp-server-adds-support-for-tool-specific-configuration-and-more/) where related tools are grouped (e.g., `repos`, `issues`, `pull_requests`)." — templates/README.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/README.md | 40 | used here | External design precedent cited as the conceptual model for grouping related tools into named sets. |

## Consumes
External GitHub MCP Server architectural specifications.

## Produces
Conceptual design model for internal tool grouping in `toolsets.yaml`.

## When applied
Cited in template system documentation to justify grouping related tools into named collections.

## Sub-concepts
none

## Part of
toolsets

## Implementation status
defects: doc-drift, cross-file-contradiction

## Design notes
An external architectural reference to GitHub's MCP server tool groupings cited to justify and align rjm's toolset abstraction model.
