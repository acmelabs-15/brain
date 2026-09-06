---
package: rjm
path: .claude/skills/software-engineering-library/references/clean-architecture.md
type: reference
bytes: 15076
unit: inv-rjm-169
in_scope_via: .claude/skills/software-engineering-library/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/software-engineering-library/references/clean-architecture.md

## Purpose — required, verbatim
> "This rule encodes Robert C. Martin's Clean Architecture for use in this codebase. Read this rule before adding code that touches multiple layers or introducing new dependencies. Also consult it before importing frameworks into modules containing business rules." — .claude/skills/software-engineering-library/references/clean-architecture.md:4

## Design intent — required
Encodes Robert C. Martin's Clean Architecture and strict inward dependency rules for the multi-agent repository. It defines clear architectural boundaries across four concentric layers (Entities, Use Cases, Interface Adapters, and Frameworks and Drivers), preventing framework details and external protocol shapes (such as GitHub, MCP, and CLI interfaces) from leaking into core domain rules and application workflows. Without it, business logic would become tightly coupled to external frameworks and transport protocols, compromising testability and maintainability.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:24

## Concepts named — required, verbatim
- `Clean Architecture` — .claude/skills/software-engineering-library/references/clean-architecture.md:2 — defined here
- `Clean Architecture` — .claude/skills/software-engineering-library/references/clean-architecture.md:4 — used here
- `dependency rule` — .claude/skills/software-engineering-library/references/clean-architecture.md:6 — defined here
- `The Dependency Rule` — .claude/skills/software-engineering-library/references/clean-architecture.md:10 — defined here
- `Frameworks and Drivers` — .claude/skills/software-engineering-library/references/clean-architecture.md:16 — defined here
- `Interface Adapters` — .claude/skills/software-engineering-library/references/clean-architecture.md:17 — defined here
- `Use Cases` — .claude/skills/software-engineering-library/references/clean-architecture.md:18 — defined here
- `application services` — .claude/skills/software-engineering-library/references/clean-architecture.md:18 — used here
- `Entities` — .claude/skills/software-engineering-library/references/clean-architecture.md:19 — defined here
- `abstract ports` — .claude/skills/software-engineering-library/references/clean-architecture.md:43 — used here
- `adapter seams` — .claude/skills/software-engineering-library/references/clean-architecture.md:45 — used here
- `invariants` — .claude/skills/software-engineering-library/references/clean-architecture.md:54 — used here
- `Anemic Domain Model` — .claude/skills/software-engineering-library/references/clean-architecture.md:65 — defined here
- `use case` — .claude/skills/software-engineering-library/references/clean-architecture.md:69 — defined here
- `unit of work` — .claude/skills/software-engineering-library/references/clean-architecture.md:81 — used here
- `Adapters` — .claude/skills/software-engineering-library/references/clean-architecture.md:89 — defined here
- `wire format` — .claude/skills/software-engineering-library/references/clean-architecture.md:94 — used here
- `to_domain` — .claude/skills/software-engineering-library/references/clean-architecture.md:97 — used here
- `to_record` — .claude/skills/software-engineering-library/references/clean-architecture.md:97 — used here
- `Boundary Protection` — .claude/skills/software-engineering-library/references/clean-architecture.md:115 — defined here
- `Direction by name` — .claude/skills/software-engineering-library/references/clean-architecture.md:119 — defined here
- `Plain types at the seam` — .claude/skills/software-engineering-library/references/clean-architecture.md:120 — defined here
- `One owner per concept` — .claude/skills/software-engineering-library/references/clean-architecture.md:121 — defined here
- `Explicit ports` — .claude/skills/software-engineering-library/references/clean-architecture.md:122 — defined here
- `No ambient access` — .claude/skills/software-engineering-library/references/clean-architecture.md:123 — defined here
- `Tests respect direction` — .claude/skills/software-engineering-library/references/clean-architecture.md:124 — defined here
- `Pattern Selection` — .claude/skills/software-engineering-library/references/clean-architecture.md:128 — defined here
- `Anti-Patterns` — .claude/skills/software-engineering-library/references/clean-architecture.md:140 — defined here
- `Anemic Domain Model with thick services` — .claude/skills/software-engineering-library/references/clean-architecture.md:144 — defined here
- `Smart UI / Smart Skill / Smart Hook` — .claude/skills/software-engineering-library/references/clean-architecture.md:145 — defined here
- `Reverse import` — .claude/skills/software-engineering-library/references/clean-architecture.md:146 — defined here
- `Leaky type at the boundary` — .claude/skills/software-engineering-library/references/clean-architecture.md:147 — defined here
- `Ambient configuration` — .claude/skills/software-engineering-library/references/clean-architecture.md:148 — defined here
- `Cross-aggregate transaction stretched across layers` — .claude/skills/software-engineering-library/references/clean-architecture.md:149 — defined here
- `Framework decorators on entities` — .claude/skills/software-engineering-library/references/clean-architecture.md:150 — defined here
- `Layer for its own sake` — .claude/skills/software-engineering-library/references/clean-architecture.md:151 — defined here
- `Boundaries with the ai-agents Codebase` — .claude/skills/software-engineering-library/references/clean-architecture.md:153 — defined here
- `Boundary guardian` — .claude/skills/software-engineering-library/references/clean-architecture.md:161 — defined here
- `Quick Self-Review` — .claude/skills/software-engineering-library/references/clean-architecture.md:165 — defined here

## Structure
# Clean Architecture — .claude/skills/software-engineering-library/references/clean-architecture.md:2
## The Dependency Rule — .claude/skills/software-engineering-library/references/clean-architecture.md:10
## Entities — .claude/skills/software-engineering-library/references/clean-architecture.md:49
## Use Cases — .claude/skills/software-engineering-library/references/clean-architecture.md:67
## Interface Adapters — .claude/skills/software-engineering-library/references/clean-architecture.md:87
## Frameworks and Drivers — .claude/skills/software-engineering-library/references/clean-architecture.md:102
## Boundary Protection — .claude/skills/software-engineering-library/references/clean-architecture.md:115
## Pattern Selection — .claude/skills/software-engineering-library/references/clean-architecture.md:128
## Anti-Patterns — .claude/skills/software-engineering-library/references/clean-architecture.md:140
## Boundaries with the ai-agents Codebase — .claude/skills/software-engineering-library/references/clean-architecture.md:153
## Quick Self-Review — .claude/skills/software-engineering-library/references/clean-architecture.md:165

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly maps Uncle Bob's Clean Architecture layers onto `rjm`'s multi-agent architecture: entities correspond to session state and governance constraints; use cases correspond to orchestrator agents and lifecycle commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`); interface adapters correspond to GitHub/MCP wrappers and hook payload serializers; frameworks and drivers correspond to GitHub Actions runners, toolchains, and file systems. It designates the `architect` agent as the boundary guardian for approving architectural changes and reverse-import remediations.

## Context cost
15076 bytes, approximately 3769 tokens.
