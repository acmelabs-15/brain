---
package: addy
name: MCP Integration
slug: mcp-integration
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/gemini-cli-setup.md, sha256: 982d9cdc469fb26cbd4dd6a2d26d1894f2b93e2f821dd8646c188dacb8150803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# MCP Integration

## Definition — verbatim
(used, not defined)

> "### MCP Integration" — docs/gemini-cli-setup.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/gemini-cli-setup.md | 83 | used here | Heading introducing Model Context Protocol tool integrations for skills like browser testing. |

## Consumes
MCP server configurations (e.g. `~/.gemini/config.json`) and tools such as `chrome-devtools`.

## Produces
Live runtime environment access, DOM inspection, console logs, and performance profiling for agent skills.

## When applied
When skills require dynamic inspection or execution outside the static file system.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
MCP Integration connects AI agents to live runtime environments (such as Chrome DevTools for browser testing), enabling skills to verify real execution state instead of making ungrounded assumptions based solely on static code.
