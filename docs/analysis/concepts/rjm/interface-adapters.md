---
package: rjm
name: Interface Adapters
slug: interface-adapters
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Interface Adapters

## Definition — verbatim
> "2. **Interface Adapters**. Code that converts data between the form most convenient for the inner layers and the form most convenient for some outer detail. Controllers, presenters, gateways, mappers, serializers." — .claude/skills/software-engineering-library/references/clean-architecture.md:17

## Also called — verbatim
`Adapters` — .claude/skills/software-engineering-library/references/clean-architecture.md:89

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 17 | defined here | Translation layer converting between external wire formats and internal domain/use-case objects. |

## Consumes
Wire format payloads, database records, CLI arguments, and use case interfaces.

## Produces
Normalized domain entities and serialized external payloads.

## When applied
Applied whenever data crosses the boundary between external drivers/frameworks and internal use cases/entities.

## Sub-concepts
adapters, wire-format, to-domain, to-record

## Part of
clean-architecture, the-dependency-rule

## Implementation status
clean

## Design notes
Interface Adapters serve as the boundary translation layer converting external protocol representations (JSON payloads, MCP requests, GitHub API models) into internal domain representations. In rjm, interface adapters isolate agent reasoning and business workflows from specific wire formats and vendor schemas.
