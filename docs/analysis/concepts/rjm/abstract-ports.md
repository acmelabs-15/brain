---
package: rjm
name: abstract ports
slug: abstract-ports
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

# abstract ports

## Definition — verbatim
> "- Use case code does not import from adapters or frameworks. It depends only on entities and on abstract ports it owns." — .claude/skills/software-engineering-library/references/clean-architecture.md:43

## Also called — verbatim
`Explicit ports` — .claude/skills/software-engineering-library/references/clean-architecture.md:122

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 43 | used here | Interfaces owned by use cases to define external dependency contracts without importing concrete implementations. |

## Consumes
Use case dependency requirements (clocks, ID generators, repositories, external APIs).

## Produces
Abstract boundary contracts implemented by outer interface adapters and frameworks.

## When applied
Applied whenever a use case requires external services, persistence, time, or random ID generation.

## Sub-concepts
explicit-ports

## Part of
use-cases, boundary-protection

## Implementation status
clean

## Design notes
Abstract ports decouple use case business logic from concrete infrastructure implementations by inverting dependency directions. In rjm, ports allow orchestrator workflows and agent logic to declare interfaces for repositories, clocks, and tools that can be mocked in unit tests or bound to real MCP servers at runtime.
