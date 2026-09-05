---
package: addy
path: skills/api-and-interface-design/SKILL.md
type: skill
bytes: 14884
unit: inv-addy-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/api-and-interface-design/SKILL.md, sha256: 5dafd0c44a3aabf11cae5bcb34f6fcc24dfa5c01ba6e0d3176bce997f4d68bc8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/api-and-interface-design/SKILL.md

## Purpose — required, verbatim
> "Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface. Use when creating REST or GraphQL endpoints, defining type contracts between modules, or establishing boundaries between frontend and backend." — skills/api-and-interface-design/SKILL.md:3

## Design intent — required
Provides authoritative engineering principles and practical implementation patterns for designing robust, evolvable public interfaces and module boundaries. Establishes the contract-first philosophy, honors Hyrum's Law by recognizing that observable behavior becomes de facto contract, enforces the One-Version Rule to avoid diamond dependencies, prescribes uniform error response semantics and boundary validation, and provides detailed guidance on implementing atomic, idempotent mutation contracts. Without this skill, agents might produce brittle, inconsistently structured APIs that leak internal implementation details, lack pagination or idempotency, and break downstream consumers.

## Phase — required
addy:Build

## Inputs — required
- Service briefs, domain requirements, and data models
- Existing schema and boundary definitions
- Incoming request schemas and external API payloads
- Idempotency keys (`Idempotency-Key` header)

## Outputs — required
- Type-safe contract definitions (TypeScript interfaces, schemas)
- REST/GraphQL endpoint specifications and route implementations
- Error response structures (`APIError`)
- Idempotency mechanisms (unique constraint handlers, payload hashes)
- API documentation committed alongside code

## Invokes — required
- skill deprecation-and-migration — skills/api-and-interface-design/SKILL.md:30

## Invoked by — required
- file CLAUDE.md — CLAUDE.md:23
- file README.md — README.md:40
- file docs/cursor-setup.md — docs/cursor-setup.md:147
- file AGENTS.md — AGENTS.md:31
- file docs/adoption-guide.md — docs/adoption-guide.md:59
- file docs/opencode-setup.md — docs/opencode-setup.md:121
- skill skills/spec-driven-development/SKILL.md — skills/spec-driven-development/SKILL.md:61
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:26
- skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:284
- config evals/cases/api-and-interface-design.json — evals/cases/api-and-interface-design.json:2

## Concepts named — required, verbatim
- `Hyrum's Law` — skills/api-and-interface-design/SKILL.md:22 — defined here
- `The One-Version Rule` — skills/api-and-interface-design/SKILL.md:33 — defined here
- `Contract First` — skills/api-and-interface-design/SKILL.md:37 — defined here
- `Consistent Error Semantics` — skills/api-and-interface-design/SKILL.md:61 — defined here
- `Validate at Boundaries` — skills/api-and-interface-design/SKILL.md:88 — defined here
- `Prefer Addition Over Modification` — skills/api-and-interface-design/SKILL.md:125 — defined here
- `Predictable Naming` — skills/api-and-interface-design/SKILL.md:146 — defined here
- `Honouring an Idempotency Key` — skills/api-and-interface-design/SKILL.md:156 — defined here
- `Idempotency-Key` — skills/api-and-interface-design/SKILL.md:158 — defined here
- `deprecation-and-migration` — skills/api-and-interface-design/SKILL.md:30 — used here
- `APIError` — skills/api-and-interface-design/SKILL.md:68 — defined here
- `Resource Design` — skills/api-and-interface-design/SKILL.md:219 — defined here
- `Pagination` — skills/api-and-interface-design/SKILL.md:232 — defined here
- `Filtering` — skills/api-and-interface-design/SKILL.md:252 — defined here
- `Partial Updates` — skills/api-and-interface-design/SKILL.md:260 — defined here
- `PATCH` — skills/api-and-interface-design/SKILL.md:260 — defined here
- `Discriminated Unions` — skills/api-and-interface-design/SKILL.md:272 — defined here
- `Input/Output Separation` — skills/api-and-interface-design/SKILL.md:293 — defined here
- `Branded Types` — skills/api-and-interface-design/SKILL.md:313 — defined here

## Structure
- `# API and Interface Design`
- `## Overview`
- `## When to Use`
- `## Core Principles`
- `### Hyrum's Law`
- `### The One-Version Rule`
- `### 1. Contract First`
- `### 2. Consistent Error Semantics`
- `### 3. Validate at Boundaries`
- `### 4. Prefer Addition Over Modification`
- `### 5. Predictable Naming`
- `### 6. Honouring an Idempotency Key`
- `## REST API Patterns`
- `### Resource Design`
- `### Pagination`
- `### Filtering`
- `### Partial Updates (PATCH)`
- `## TypeScript Interface Patterns`
- `### Use Discriminated Unions for Variants`
- `### Input/Output Separation`
- `### Use Branded Types for IDs`
- `## Common Rationalizations`
- `## Red Flags`
- `## Verification`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains an exceptionally thorough treatment of idempotency engineering in distributed systems: warns against deriving keys from attempts (UUID or timestamp) rather than intent, explains TOCTOU races in naive select-then-insert checks and requires atomic unique constraint enforcement, requires payload hashing to reject key reuse with different bodies, mandates three-state outcome handling (success, failure, unknown), and emphasizes that key retention TTL must exceed the longest retry path (including 7-day DLQ replays).

## Context cost
14884 bytes (~3721 tokens). When following Invokes to `skills/deprecation-and-migration/SKILL.md` (12516 bytes / ~3129 tokens), total context is 27400 bytes (~6850 tokens).
