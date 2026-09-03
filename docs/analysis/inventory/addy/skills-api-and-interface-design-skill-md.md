---
package: addy
path: skills/api-and-interface-design/SKILL.md
type: skill
bytes: 14884
unit: inv-addy-14
---

# skills/api-and-interface-design/SKILL.md

## Purpose — required, verbatim
> "Design stable, well-documented interfaces that are hard to misuse." — skills/api-and-interface-design/SKILL.md:10

## Design intent — required
API and interface design establishes foundational architectural rules for public interfaces, inter-module boundaries, and data exchanges. Grounded in Hyrum's Law (that all observable behaviors become de facto commitments) and the One-Version Rule, it enforces contract-first specification, boundary validation (treating external and third-party data as untrusted while trusting internal code), consistent error shapes, additive backward compatibility, and rigorous idempotency semantics (atomic unique-constraint key claims, payload hashing, and retention outliving DLQ/retry windows). Without it, teams and agents create fragile, leaky interfaces with ad-hoc error formats, TOCTOU race conditions on retryable operations, and breaking changes that disrupt consumers.

## Phase — required
addy:Build

## Inputs — required
- Functional requirements, service briefs, and domain entities (`skills/api-and-interface-design/SKILL.md:14-18`)
- Existing interface definitions, database schemas, and inter-module dependencies (`skills/api-and-interface-design/SKILL.md:15-18`)
- Third-party API payload structures and responses (`skills/api-and-interface-design/SKILL.md:115-118`)
- Deprecation guidance from `deprecation-and-migration` (`skills/api-and-interface-design/SKILL.md:30`)

## Outputs — required
- Type contracts, interface declarations, and API specifications (TypeScript interfaces, OpenAPI specs, GraphQL schemas, Zod schemas) (`skills/api-and-interface-design/SKILL.md:39-59`, `skills/api-and-interface-design/SKILL.md:94-104`, `skills/api-and-interface-design/SKILL.md:273-321`)
- Standardized, machine-readable error schemas and HTTP status code mappings (`skills/api-and-interface-design/SKILL.md:65-84`)
- Boundary validators and sanitizers (e.g. `CreateTaskSchema.safeParse`) (`skills/api-and-interface-design/SKILL.md:94-118`)
- Idempotency mechanisms: unique constraint database schemas, atomic claim handlers, payload hash guards, and retry lifecycle policies (`skills/api-and-interface-design/SKILL.md:156-216`)
- REST endpoint specifications with resource nesting, query parameter conventions, pagination schemas, and partial update (PATCH) contracts (`skills/api-and-interface-design/SKILL.md:218-269`)

## Invokes — required
- skill deprecation-and-migration — skills/api-and-interface-design/SKILL.md:30

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:23
- doc AGENTS.md — AGENTS.md:31
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:26, skills/using-agent-skills/SKILL.md:179
- skill skills/spec-driven-development/SKILL.md — skills/spec-driven-development/SKILL.md:61
- skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:284
- doc README.md — README.md:40, README.md:255, README.md:364
- doc docs/adoption-guide.md — docs/adoption-guide.md:59, docs/adoption-guide.md:99
- doc docs/cursor-setup.md — docs/cursor-setup.md:147, docs/cursor-setup.md:157
- doc docs/opencode-setup.md — docs/opencode-setup.md:121
- config evals/cases/api-and-interface-design.json — evals/cases/api-and-interface-design.json:2, evals/cases/api-and-interface-design.json:35
- config evals/cases/performance-optimization.json — evals/cases/performance-optimization.json:33

## Concepts named — required, verbatim
- `stable, well-documented interfaces` — skills/api-and-interface-design/SKILL.md:10 — defined here
- `Core Principles` — skills/api-and-interface-design/SKILL.md:20 — defined here
- `Hyrum's Law` — skills/api-and-interface-design/SKILL.md:22 — defined here
- `The One-Version Rule` — skills/api-and-interface-design/SKILL.md:33 — defined here
- `Diamond dependency problems` — skills/api-and-interface-design/SKILL.md:34 — used here
- `Contract First` — skills/api-and-interface-design/SKILL.md:37 — defined here
- `Consistent Error Semantics` — skills/api-and-interface-design/SKILL.md:61 — defined here
- `APIError` — skills/api-and-interface-design/SKILL.md:68 — defined here
- `Status code mapping` — skills/api-and-interface-design/SKILL.md:76 — defined here
- `Validate at Boundaries` — skills/api-and-interface-design/SKILL.md:88 — defined here
- `untrusted data` — skills/api-and-interface-design/SKILL.md:115 — defined here
- `Prefer Addition Over Modification` — skills/api-and-interface-design/SKILL.md:125 — defined here
- `Predictable Naming` — skills/api-and-interface-design/SKILL.md:146 — defined here
- `Honouring an Idempotency Key` — skills/api-and-interface-design/SKILL.md:156 — defined here
- `Idempotency-Key` — skills/api-and-interface-design/SKILL.md:158 — defined here
- `TOCTOU` — skills/api-and-interface-design/SKILL.md:176 — used here
- `unique constraint` — skills/api-and-interface-design/SKILL.md:182 — defined here
- `Guard the payload` — skills/api-and-interface-design/SKILL.md:195 — defined here
- `requestHash` — skills/api-and-interface-design/SKILL.md:198 — defined here
- `in-flight duplicate` — skills/api-and-interface-design/SKILL.md:203 — defined here
- `retry storms` — skills/api-and-interface-design/SKILL.md:203 — used here
- `three outcomes: success, failure, and unknown` — skills/api-and-interface-design/SKILL.md:212 — defined here
- `record the intent before calling out` — skills/api-and-interface-design/SKILL.md:214 — defined here
- `longest retry chain` — skills/api-and-interface-design/SKILL.md:215 — defined here
- `dead-letter queue` — skills/api-and-interface-design/SKILL.md:215 — used here
- `REST API Patterns` — skills/api-and-interface-design/SKILL.md:217 — defined here
- `Resource Design` — skills/api-and-interface-design/SKILL.md:219 — defined here
- `Pagination` — skills/api-and-interface-design/SKILL.md:232 — defined here
- `Filtering` — skills/api-and-interface-design/SKILL.md:252 — defined here
- `Partial Updates (PATCH)` — skills/api-and-interface-design/SKILL.md:260 — defined here
- `TypeScript Interface Patterns` — skills/api-and-interface-design/SKILL.md:270 — defined here
- `Discriminated Unions for Variants` — skills/api-and-interface-design/SKILL.md:272 — defined here
- `Input/Output Separation` — skills/api-and-interface-design/SKILL.md:293 — defined here
- `Branded Types for IDs` — skills/api-and-interface-design/SKILL.md:313 — defined here
- `Common Rationalizations` — skills/api-and-interface-design/SKILL.md:323 — defined here
- `at-least-once with idempotent processing` — skills/api-and-interface-design/SKILL.md:335 — defined here
- `Red Flags` — skills/api-and-interface-design/SKILL.md:338 — defined here
- `Verification` — skills/api-and-interface-design/SKILL.md:352 — defined here

## Structure
# API and Interface Design
## Overview
## When to Use
## Core Principles
### Hyrum's Law
### The One-Version Rule
### 1. Contract First
### 2. Consistent Error Semantics
### 3. Validate at Boundaries
### 4. Prefer Addition Over Modification
### 5. Predictable Naming
### 6. Honouring an Idempotency Key
## REST API Patterns
### Resource Design
### Pagination
### Filtering
### Partial Updates (PATCH)
## TypeScript Interface Patterns
### Use Discriminated Unions for Variants
### Input/Output Separation
### Use Branded Types for IDs
## Common Rationalizations
## Red Flags
## Verification

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- **Production-Grade Idempotency Architecture:** Section 6 (lines 156-216) provides one of the most complete technical treatments of idempotency in agent skill libraries:
  - Demonstrates that key acceptance is meaningless without atomic database unique constraints to eliminate TOCTOU race conditions.
  - Mandates payload hashing (`requestHash`) to fail loudly on key reuse with mutated payloads.
  - Explicitly prescribes handling in-flight duplicates via 409 Conflict, bounded wait, or 202 Accepted.
  - Recognizes three distributed outcomes (success, failure, unknown) and requires logging intent before outbound calls.
  - Mandates key retention TTL outliving dead-letter queue (DLQ) replay chains.
- **Untrusted Third-Party Boundary Principle:** Third-party APIs are treated as untrusted boundaries (lines 115-118), explicitly calling out protection against malicious or instruction-like text injected into LLM contexts.
- **TypeScript Idioms:** Strong typing patterns for agent-generated code, including branded types (`__brand`) for domain entity IDs and discriminated unions for state variants.

## Context cost
14,884 bytes (SKILL.md itself, ~3,721 tokens). Direct reference `deprecation-and-migration` adds 12,516 bytes, for a total reachable context of 27,400 bytes (~6,850 tokens).
