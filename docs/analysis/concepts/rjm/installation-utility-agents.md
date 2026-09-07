---
package: rjm
name: Installation & Utility Agents
slug: installation-utility-agents
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Installation & Utility Agents

## Definition — verbatim
> "## Installation & Utility Agents" — scripts/AGENTS.md:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/AGENTS.md | 140 | defined here | Major section grouping scripts that automate agent installation, configuration sync, and session validation. |

## Consumes
Agent catalog manifests, MCP configurations, and platform runtime environments.

## Produces
Installed agent definitions, synchronized MCP configs, and validated session protocols.

## When applied
Applied during platform setup, developer environment initialization, and maintenance routines.

## Sub-concepts
sync-mcp-config-py, check-skill-exists-py

## Part of
none

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
Categorical grouping of administrative tools and automated agents responsible for installing AI agents into host platforms (Claude Code, GitHub Copilot CLI), configuring MCP services, and enforcing session standards.
