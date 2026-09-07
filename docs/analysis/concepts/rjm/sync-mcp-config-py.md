---
package: rjm
name: sync_mcp_config.py
slug: sync-mcp-config-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# sync_mcp_config.py

## Definition — verbatim
(used, not defined)

> "### sync_mcp_config.py" — scripts/AGENTS.md:175

## Also called — verbatim
> "- `sync_mcp_config.py` - MCP configuration sync" — scripts/README.md:165

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/AGENTS.md | 175 | defined here | Section heading documenting the MCP configuration synchronizer between Claude and VS Code. |
| scripts/README.md | 165 | defined here | Listed in scripts directory overview as utility script for MCP configuration sync. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
sync_mcp_config.py is an administrative Python script file name for synchronizing MCP configurations rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
