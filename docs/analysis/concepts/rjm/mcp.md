---
package: rjm
name: MCP
slug: mcp
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MCP

## Definition — verbatim
(used, not defined)

> "MCP servers and clients are predominantly Python" — .agents/architecture/ADR-042-python-migration-strategy.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-042-python-migration-strategy.md | 45 | used here | Cited as an ecosystem example where servers and clients are predominantly Python. |
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 122 | used here | Referenced in tool validation error message guiding scoping to mcp__* namespaces. |

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
defects: doc-drift, internal-contradiction, script-bug, exit-code-mismatch

## Design notes
Model Context Protocol (MCP) is an open external protocol specification and tool namespace prefix rather than an internal agent lifecycle concept per D-023.
