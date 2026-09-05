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
verified: 2026-09-05 quote-check+coverage
---

# skills/api-and-interface-design/SKILL.md

## Purpose — required, verbatim
> "Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface. Use when creating REST or GraphQL endpoints, defining type contracts between modules, or establishing boundaries between frontend and backend." — skills/api-and-interface-design/SKILL.md:3

## Design intent — required
Provides guidelines and actionable engineering patterns for designing stable, robust, and misuse-resistant APIs and interfaces across system boundaries (REST endpoints, GraphQL schemas, module interfaces, component props, and database schemas). Enforces contract-first design, Hyrum's Law awareness, the One-Version Rule, consistent error semantics, strict boundary validation (treating third-party responses as untrusted data), additive backward compatibility, and rigorous idempotency key handling (atomic claims, payload hashes, and retention beyond retry chains).

## Phase — required
addy:Build

## Inputs — required
API requirements, system boundary specifications, service briefs, schema models, request/response payload examples, and client integration constraints.

## Outputs — required
API contract specifications, TypeScript interfaces/schemas, endpoint routes, and verification checklists.

## Invokes — required
- skill deprecation-and-migration — skills/api-and-interface-design/SKILL.md:30

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:23
- doc AGENTS.md — AGENTS.md:31
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:26
- skill git-workflow-and-versioning — skills/git-workflow-and-versioning/SKILL.md:284
- skill spec-driven-development — skills/spec-driven-development/SKILL.md:61

## Concepts named — required, verbatim
- `Hyrum's Law` — skills/api-and-interface-design/SKILL.md:22 — defined here
- `The One-Version Rule` — skills/api-and-interface-design/SKILL.md:33 — defined here
- `Contract First` — skills/api-and-interface-design/SKILL.md:37 — defined here
- `Consistent Error Semantics` — skills/api-and-interface-design/SKILL.md:61 — defined here
- `Validate at Boundaries` — skills/api-and-interface-design/SKILL.md:88 — defined here
- `Prefer Addition Over Modification` — skills/api-and-interface-design/SKILL.md:125 — defined here
- `Predictable Naming` — skills/api-and-interface-design/SKILL.md:146 — defined here
- `Honouring an Idempotency Key` — skills/api-and-interface-design/SKILL.md:156 — defined here
- `Resource Design` — skills/api-and-interface-design/SKILL.md:219 — defined here
- `Pagination` — skills/api-and-interface-design/SKILL.md:232 — defined here
- `Filtering` — skills/api-and-interface-design/SKILL.md:252 — defined here
- `Partial Updates (PATCH)` — skills/api-and-interface-design/SKILL.md:260 — defined here
- `Use Discriminated Unions for Variants` — skills/api-and-interface-design/SKILL.md:272 — defined here
- `Input/Output Separation` — skills/api-and-interface-design/SKILL.md:293 — defined here
- `Use Branded Types for IDs` — skills/api-and-interface-design/SKILL.md:313 — defined here
- `Common Rationalizations` — skills/api-and-interface-design/SKILL.md:323 — defined here
- `Red Flags` — skills/api-and-interface-design/SKILL.md:338 — defined here
- `Verification` — skills/api-and-interface-design/SKILL.md:352 — defined here

## Structure
- `# API and Interface Design` — skills/api-and-interface-design/SKILL.md:6
- `## Overview` — skills/api-and-interface-design/SKILL.md:8
- `## When to Use` — skills/api-and-interface-design/SKILL.md:12
- `## Core Principles` — skills/api-and-interface-design/SKILL.md:20
- `### Hyrum's Law` — skills/api-and-interface-design/SKILL.md:22
- `### The One-Version Rule` — skills/api-and-interface-design/SKILL.md:33
- `### 1. Contract First` — skills/api-and-interface-design/SKILL.md:37
- `### 2. Consistent Error Semantics` — skills/api-and-interface-design/SKILL.md:61
- `### 3. Validate at Boundaries` — skills/api-and-interface-design/SKILL.md:88
- `### 4. Prefer Addition Over Modification` — skills/api-and-interface-design/SKILL.md:125
- `### 5. Predictable Naming` — skills/api-and-interface-design/SKILL.md:146
- `### 6. Honouring an Idempotency Key` — skills/api-and-interface-design/SKILL.md:156
- `## REST API Patterns` — skills/api-and-interface-design/SKILL.md:217
- `### Resource Design` — skills/api-and-interface-design/SKILL.md:219
- `### Pagination` — skills/api-and-interface-design/SKILL.md:232
- `### Filtering` — skills/api-and-interface-design/SKILL.md:252
- `### Partial Updates (PATCH)` — skills/api-and-interface-design/SKILL.md:260
- `## TypeScript Interface Patterns` — skills/api-and-interface-design/SKILL.md:270
- `### Use Discriminated Unions for Variants` — skills/api-and-interface-design/SKILL.md:272
- `### Input/Output Separation` — skills/api-and-interface-design/SKILL.md:293
- `### Use Branded Types for IDs` — skills/api-and-interface-design/SKILL.md:313
- `## Common Rationalizations` — skills/api-and-interface-design/SKILL.md:323
- `## Red Flags` — skills/api-and-interface-design/SKILL.md:338
- `## Verification` — skills/api-and-interface-design/SKILL.md:352

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Deep treatment of idempotency keys: distinguishes contract header from atomic database implementation (unique constraints, request body hashing to prevent duplicate reuse with changed payload, retention windows matching DLQ replay).
- Explicit rule on treating third-party API responses as untrusted data at boundaries.

## Context cost
14884 bytes, ~3300 tokens.
