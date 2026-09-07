---
package: matt
name: MCP
slug: mcp
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MCP

## Definition — verbatim
(used, not defined)

> "The community has already done this: a Jira-over-[MCP](https://www.aihero.dev/ai-coding-dictionary/mcp) variant, a Gitea CLI shaped like `gh`, a hand-built local dashboard." — docs/engineering/setup-matt-pocock-skills.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/setup-matt-pocock-skills.md | 49 | used here | Cites Jira-over-MCP as an example of a custom issue-tracker integration supported by the other workflow path. |
| external/setup-matt-pocock-skills.md | 41 | used here | Cites Model Context Protocol integrations in the external documentation as community extensions for issue tracking. |

## Consumes
MCP server specifications, endpoint configurations, and host harness protocol support.

## Produces
Standardized tool execution and external context access for agents without hardcoding API clients into skills.

## When applied
When agents interface with third-party systems, external issue tracking backends (e.g. Jira), or custom tooling environments.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Model Context Protocol (MCP) is an external protocol standard referenced in Matt's framework as an extensible integration mechanism for repository tools. In `setup-matt-pocock-skills`, MCP is highlighted as a path enabling third-party issue trackers (like Jira or proprietary tracking databases) to interface with engineering skills without requiring bespoke modifications to skill definitions.
