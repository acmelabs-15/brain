---
package: rjm
path: .claude/skills/software-engineering-library/references/enterprise-patterns.md
type: reference
bytes: 11327
unit: inv-rjm-170
in_scope_via: .claude/skills/software-engineering-library/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/software-engineering-library/references/enterprise-patterns.md

## Purpose — required, verbatim
> "This rule consolidates the patterns from Martin Fowler's _Patterns of Enterprise Application Architecture_ (PEAA) that recur in this codebase. Use it when you change persistence, transactional, or orchestration code, or when you introduce a new component that touches a data store, an external service, or a long-running workspace." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:4

## Design intent — required
Adapts Martin Fowler's enterprise architecture patterns (PEAA)—specifically Domain Object, Repository, Unit of Work, Data Mapper, Identity Map, and Service Layer—to the architectural realities of an AI agent codebase. It establishes explicit design boundaries ensuring that persistence mechanisms remain isolated from business domains, transactions are managed as atomic use-case units rather than ambient globals, and the agent orchestrator acts as the canonical Service Layer. Without this reference, agent workflows, session managers, and tool handlers risk mixing database calls, raw transaction handles, and business logic across uncoordinated entry points.

## Phase — required
cross-phase

## Inputs — required
Domain models, persistence schemas, transaction boundaries, session storage specifications, and service orchestration requests.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:27

## Concepts named — required, verbatim
- `Patterns of Enterprise Application Architecture` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:4 — used here
- `PEAA` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:4 — used here
- `Domain object` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:12 — defined here
- `Repository` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:13 — defined here
- `Unit of Work` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:14 — defined here
- `Data Mapper` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:15 — defined here
- `Identity Map` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:16 — defined here
- `Service Layer` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:17 — defined here
- `Specification` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:35 — used here
- `Active Record` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:77 — used here
- `transaction script` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:129 — used here
- `Anemic Domain Model` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:135 — defined here
- `Smart UI` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:136 — defined here
- `Smart Skill` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:136 — defined here
- `Repository as DAO` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:137 — defined here
- `Ambient transactions` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:138 — defined here
- `Pattern stacking` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:140 — defined here

## Structure
Section headings in order (verbatim):
- `# Enterprise Patterns`
- `## Core Vocabulary`
- `## Repository`
- `## Unit of Work`
- `## Data Mapper`
- `## Service Layer`
- `## Identity Map`
- `## Pattern Selection`
- `## Anti-Patterns`
- `## Boundaries with Existing Codebase`
- `## Quick Self-Review`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Contextualizes classical enterprise application patterns to AI agent harness components, identifying the agent orchestrator as the canonical Service Layer and session state managers as Repositories.
- Provides pragmatic progression guidelines: recommends Active Record for simple schemas, advising migration to Data Mapper when persistence schema and domain model must evolve independently.
- Explicitly cautions against anti-patterns including Smart Skills (putting business rules into agent entry points), ambient transaction globals, and unnecessary multi-layered pattern stacking.

## Context cost
11327 bytes, ~2830 tokens. Isolated reference loading 0 additional files.
