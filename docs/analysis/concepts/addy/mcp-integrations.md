---
package: addy
name: MCP integrations
slug: mcp-integrations
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# MCP integrations

## Definition — verbatim
> "For richer context, use Model Context Protocol servers:" — skills/context-engineering/SKILL.md:182

## Also called — verbatim
> "MCP Integrations" — skills/context-engineering/SKILL.md:180
> "MCP integrations" — external/context-engineering.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/context-engineering.md | 5 | used here | Highlighted as a key context engineering mechanism on the landing page |
| skills/context-engineering/SKILL.md | 180 | defined here | Dedicated section outlining high-value MCP servers and lazy context retrieval |

## Consumes
Model Context Protocol client/server configurations, external services (databases, devtools, browser, VCS).

## Produces
Dynamic, on-demand context retrieval and live environment inspection without static token bloat.

## When applied
When an agent requires live external system state (e.g. Chrome DevTools, PostgreSQL schema, GitHub issues) rather than static files.

## Sub-concepts
none

## Part of
`context-engineering`

## Implementation status
clean

## Design notes
MCP integrations enable agents to fetch structured, dynamic context on demand from external servers (browsers, databases, APIs) without consuming window space until specifically queried.
