---
package: rjm
name: Frameworks and Drivers
slug: frameworks-and-drivers
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

# Frameworks and Drivers

## Definition — verbatim
> "1. **Frameworks and Drivers** (outermost). Web servers, CLI hosts, database engines, message brokers, GitHub API clients, MCP transports, file systems." — .claude/skills/software-engineering-library/references/clean-architecture.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 16 | defined here | Outermost Clean Architecture layer encapsulating external delivery mechanisms, toolchains, and I/O drivers. |

## Consumes
Adapter ports and interfaces implemented at the application boundary.

## Produces
Concrete execution environments, network transports, database engines, and external API integrations.

## When applied
Applied at the entry points and edges of the system (main, CLI entry point, bootstrap functions) when binding external infrastructure.

## Sub-concepts
adapter-seams

## Part of
clean-architecture, the-dependency-rule

## Implementation status
clean

## Design notes
Frameworks and Drivers forms the outermost concentric layer in Clean Architecture, encapsulating external systems, third-party libraries, databases, and network transports. In rjm, keeping frameworks and drivers at the perimeter ensures that GitHub Actions, MCP servers, and file system mechanics remain easily replaceable without disturbing business rules or orchestrator use cases.
