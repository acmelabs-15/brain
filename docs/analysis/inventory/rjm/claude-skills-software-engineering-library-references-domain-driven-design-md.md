---
package: rjm
path: .claude/skills/software-engineering-library/references/domain-driven-design.md
type: reference
bytes: 19299
unit: inv-rjm-169
in_scope_via: .claude/skills/software-engineering-library/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/software-engineering-library/references/domain-driven-design.md

## Purpose — required, verbatim
> "Use it when you change agent definitions, session lifecycle, orchestration boundaries, or memory and handoff contracts. Apply it where two parts of the system speak different languages and must translate." — .claude/skills/software-engineering-library/references/domain-driven-design.md:4

## Design intent — required
Distills tactical and strategic Domain-Driven Design (DDD) patterns from Eric Evans and Vaughn Vernon for AI agent coordination, session lifecycles, and cross-boundary translation. It establishes explicit Bounded Contexts with dedicated Ubiquitous Languages, classifies subdomains into Core, Supporting, and Generic categories to prioritize engineering effort, models consistency boundaries using Aggregates and Domain Events, and isolates foreign schemas using Anti-Corruption Layers (ACLs) and formal Context Maps. Without it, agent systems develop muddled boundaries, conflicting multi-meaning vocabularies, anemic or sprawling god aggregates, and leaky coupling across heterogeneous subsystems.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference references/enterprise-patterns.md — .claude/skills/software-engineering-library/references/domain-driven-design.md:8

## Invoked by — required
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:26

## Concepts named — required, verbatim
- `Domain-Driven Design` — .claude/skills/software-engineering-library/references/domain-driven-design.md:2 — defined here
- `Repository` — .claude/skills/software-engineering-library/references/domain-driven-design.md:8 — used here
- `Unit of Work` — .claude/skills/software-engineering-library/references/domain-driven-design.md:8 — used here
- `Service Layer` — .claude/skills/software-engineering-library/references/domain-driven-design.md:8 — used here
- `Domain` — .claude/skills/software-engineering-library/references/domain-driven-design.md:14 — defined here
- `Subdomain` — .claude/skills/software-engineering-library/references/domain-driven-design.md:15 — defined here
- `Core` — .claude/skills/software-engineering-library/references/domain-driven-design.md:15 — defined here
- `Supporting` — .claude/skills/software-engineering-library/references/domain-driven-design.md:15 — defined here
- `Generic` — .claude/skills/software-engineering-library/references/domain-driven-design.md:15 — defined here
- `Bounded Context` — .claude/skills/software-engineering-library/references/domain-driven-design.md:16 — defined here
- `Ubiquitous Language` — .claude/skills/software-engineering-library/references/domain-driven-design.md:17 — defined here
- `Entity` — .claude/skills/software-engineering-library/references/domain-driven-design.md:18 — defined here
- `Value Object` — .claude/skills/software-engineering-library/references/domain-driven-design.md:19 — defined here
- `Aggregate` — .claude/skills/software-engineering-library/references/domain-driven-design.md:20 — defined here
- `Aggregate Root` — .claude/skills/software-engineering-library/references/domain-driven-design.md:20 — defined here
- `Domain Event` — .claude/skills/software-engineering-library/references/domain-driven-design.md:21 — defined here
- `Domain Service` — .claude/skills/software-engineering-library/references/domain-driven-design.md:22 — defined here
- `Anti-Corruption Layer` — .claude/skills/software-engineering-library/references/domain-driven-design.md:23 — defined here
- `ACL` — .claude/skills/software-engineering-library/references/domain-driven-design.md:23 — defined here
- `Context Map` — .claude/skills/software-engineering-library/references/domain-driven-design.md:24 — defined here
- `Customer-Supplier` — .claude/skills/software-engineering-library/references/domain-driven-design.md:24 — defined here
- `Conformist` — .claude/skills/software-engineering-library/references/domain-driven-design.md:24 — defined here
- `Shared Kernel` — .claude/skills/software-engineering-library/references/domain-driven-design.md:24 — defined here
- `Partnership` — .claude/skills/software-engineering-library/references/domain-driven-design.md:24 — defined here
- `Open Host Service` — .claude/skills/software-engineering-library/references/domain-driven-design.md:24 — defined here
- `Published Language` — .claude/skills/software-engineering-library/references/domain-driven-design.md:24 — defined here
- `Bounded Context` — .claude/skills/software-engineering-library/references/domain-driven-design.md:26 — defined here
- `Ubiquitous Language` — .claude/skills/software-engineering-library/references/domain-driven-design.md:46 — defined here
- `Subdomain Classification` — .claude/skills/software-engineering-library/references/domain-driven-design.md:66 — defined here
- `Aggregates` — .claude/skills/software-engineering-library/references/domain-driven-design.md:85 — defined here
- `Entities and Value Objects` — .claude/skills/software-engineering-library/references/domain-driven-design.md:106 — defined here
- `Domain Events` — .claude/skills/software-engineering-library/references/domain-driven-design.md:126 — defined here
- `Domain Services` — .claude/skills/software-engineering-library/references/domain-driven-design.md:146 — defined here
- `Anti-Corruption Layer` — .claude/skills/software-engineering-library/references/domain-driven-design.md:165 — defined here
- `Context Mapping` — .claude/skills/software-engineering-library/references/domain-driven-design.md:185 — defined here
- `Pattern Selection` — .claude/skills/software-engineering-library/references/domain-driven-design.md:214 — defined here
- `Anti-Patterns` — .claude/skills/software-engineering-library/references/domain-driven-design.md:228 — defined here
- `Anemic Domain Model` — .claude/skills/software-engineering-library/references/domain-driven-design.md:232 — defined here
- `God Aggregate` — .claude/skills/software-engineering-library/references/domain-driven-design.md:233 — defined here
- `Single Database, Single Model` — .claude/skills/software-engineering-library/references/domain-driven-design.md:234 — defined here
- `Generic Subdomain Glamour` — .claude/skills/software-engineering-library/references/domain-driven-design.md:235 — defined here
- `Leaky Boundary` — .claude/skills/software-engineering-library/references/domain-driven-design.md:236 — defined here
- `Command Disguised as Event` — .claude/skills/software-engineering-library/references/domain-driven-design.md:237 — defined here
- `Pattern Stacking` — .claude/skills/software-engineering-library/references/domain-driven-design.md:238 — defined here
- `Boundaries with Existing Codebase` — .claude/skills/software-engineering-library/references/domain-driven-design.md:240 — defined here
- `Quick Self-Review` — .claude/skills/software-engineering-library/references/domain-driven-design.md:252 — defined here

## Structure
# Domain-Driven Design — .claude/skills/software-engineering-library/references/domain-driven-design.md:2
## Core Vocabulary — .claude/skills/software-engineering-library/references/domain-driven-design.md:10
## Bounded Context — .claude/skills/software-engineering-library/references/domain-driven-design.md:26
## Ubiquitous Language — .claude/skills/software-engineering-library/references/domain-driven-design.md:46
## Subdomain Classification — .claude/skills/software-engineering-library/references/domain-driven-design.md:66
## Aggregates — .claude/skills/software-engineering-library/references/domain-driven-design.md:85
## Entities and Value Objects — .claude/skills/software-engineering-library/references/domain-driven-design.md:106
## Domain Events — .claude/skills/software-engineering-library/references/domain-driven-design.md:126
## Domain Services — .claude/skills/software-engineering-library/references/domain-driven-design.md:146
## Anti-Corruption Layer — .claude/skills/software-engineering-library/references/domain-driven-design.md:165
## Context Mapping — .claude/skills/software-engineering-library/references/domain-driven-design.md:185
## Pattern Selection — .claude/skills/software-engineering-library/references/domain-driven-design.md:214
## Anti-Patterns — .claude/skills/software-engineering-library/references/domain-driven-design.md:228
## Boundaries with Existing Codebase — .claude/skills/software-engineering-library/references/domain-driven-design.md:240
## Quick Self-Review — .claude/skills/software-engineering-library/references/domain-driven-design.md:252

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly maps Domain-Driven Design concepts to existing implicit bounded contexts within the `rjm` repository: the agent runtime context (agent definitions, orchestrator service, tool invocations); the session lifecycle context (session state aggregate, session logs as audit trail); the memory context (Serena and Forgetful repositories of long-lived knowledge); and the skills/hooks context (acting as Anti-Corruption Layers between external harness events and agent runtime services).

## Context cost
19299 bytes (30626 bytes with invoked reference references/enterprise-patterns.md), approximately 4825 tokens (7656 tokens with invoked reference).
