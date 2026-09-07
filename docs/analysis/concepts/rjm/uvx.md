---
package: rjm
name: uvx
slug: uvx
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/context-hub-setup.md, sha256: df6e2fd17f0cae46d889f77dc4c7169422c86095ece9aace0c584738b429522f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# uvx

## Definition — verbatim
(used, not defined)

> "1. **Standard (Recommended)** - Zero config, uses uvx with SQLite storage" — .claude/commands/context-hub-setup.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/context-hub-setup.md | 75 | used here | Recommended as the execution tool for launching the Forgetful MCP server without global installation. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
context-hub-setup

## Implementation status
defects: doc-drift (.claude/commands/context-hub-setup.md:120)

## Design notes
An external CLI utility from the Astral `uv` project used for executing Python applications in ephemeral environments rather than an internal development lifecycle concept.
