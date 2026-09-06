---
package: rjm
path: .claude/skills/codebase-documenter/assets/templates/API.template.md
type: skill
bytes: 3451
unit: inv-rjm-103
in_scope_via: .claude/skills/codebase-documenter/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/API.template.md, sha256: 3492d04b69ed7d24618b208ea66caf4b3009d49c3df7a87bd16bcf81d4e3bdc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/codebase-documenter/assets/templates/API.template.md

## Purpose — required, verbatim
> "[One paragraph describing what the API exposes, the protocol (REST, gRPC, GraphQL), and the base URL. Link to the OpenAPI or schema file if one exists.]" — .claude/skills/codebase-documenter/assets/templates/API.template.md:5
(no explicit purpose statement)

## Design intent — required
Provides a standardized template and reference layout for HTTP/REST API documentation, defining canonical conventions for base URLs, authentication credential rotation, versioning, JSON content negotiation, standard HTTP status codes, ISO 8601 UTC timestamps, cursor-based pagination, endpoint parameter and response tables, unified JSON error envelopes, rate limit tier tables, and multi-language client examples. Without it, projects scaffolded without documentation standards would produce inconsistent and fragmented API specifications lacking essential operational guarantees like idempotency keys and error formats.

## Phase — required
cross-phase

## Inputs — required
- API endpoint metadata, request/response JSON schemas, query parameters, authentication methods, rate limits, and client examples provided by the human developer or downstream documentation generator.

## Outputs — required
- docs/API.md (or user-specified destination path) populated from the template structure.

## Invokes — required
none

## Invoked by — required
- skill codebase-documenter — .claude/skills/codebase-documenter/SKILL.md:53
- doc plugin-self-containment.md — .claude/rules/plugin-self-containment.md:104

## Concepts named — required, verbatim
- `API Reference` — .claude/skills/codebase-documenter/assets/templates/API.template.md:1 — defined here
- `Overview` — .claude/skills/codebase-documenter/assets/templates/API.template.md:3 — defined here
- `Authentication` — .claude/skills/codebase-documenter/assets/templates/API.template.md:9 — defined here
- `Conventions` — .claude/skills/codebase-documenter/assets/templates/API.template.md:18 — defined here
- `Versioning` — .claude/skills/codebase-documenter/assets/templates/API.template.md:20 — defined here
- `Content type` — .claude/skills/codebase-documenter/assets/templates/API.template.md:21 — defined here
- `Status codes` — .claude/skills/codebase-documenter/assets/templates/API.template.md:22 — defined here
- `Pagination` — .claude/skills/codebase-documenter/assets/templates/API.template.md:24 — defined here
- `Endpoints` — .claude/skills/codebase-documenter/assets/templates/API.template.md:26 — defined here
- `Idempotency` — .claude/skills/codebase-documenter/assets/templates/API.template.md:71 — defined here
- `Error Format` — .claude/skills/codebase-documenter/assets/templates/API.template.md:100 — defined here
- `Rate Limits` — .claude/skills/codebase-documenter/assets/templates/API.template.md:114 — defined here
- `Examples` — .claude/skills/codebase-documenter/assets/templates/API.template.md:123 — defined here
- `Changelog` — .claude/skills/codebase-documenter/assets/templates/API.template.md:148 — defined here

## Structure
- # API Reference — .claude/skills/codebase-documenter/assets/templates/API.template.md:1
- ## Overview — .claude/skills/codebase-documenter/assets/templates/API.template.md:3
- ## Authentication — .claude/skills/codebase-documenter/assets/templates/API.template.md:9
- ## Conventions — .claude/skills/codebase-documenter/assets/templates/API.template.md:18
- ## Endpoints — .claude/skills/codebase-documenter/assets/templates/API.template.md:26
- ### `[GET /resources]` — .claude/skills/codebase-documenter/assets/templates/API.template.md:28
- #### Query parameters — .claude/skills/codebase-documenter/assets/templates/API.template.md:35
- #### Response 200 — .claude/skills/codebase-documenter/assets/templates/API.template.md:42
- #### Error responses — .claude/skills/codebase-documenter/assets/templates/API.template.md:57
- ### `[POST /resources]` — .claude/skills/codebase-documenter/assets/templates/API.template.md:66
- #### Request body — .claude/skills/codebase-documenter/assets/templates/API.template.md:73
- #### Response 201 — .claude/skills/codebase-documenter/assets/templates/API.template.md:82
- #### Error codes — .claude/skills/codebase-documenter/assets/templates/API.template.md:93
- ## Error Format — .claude/skills/codebase-documenter/assets/templates/API.template.md:100
- ## Rate Limits — .claude/skills/codebase-documenter/assets/templates/API.template.md:114
- ## Examples — .claude/skills/codebase-documenter/assets/templates/API.template.md:123
- ### curl — .claude/skills/codebase-documenter/assets/templates/API.template.md:125
- ### Python (httpx) — .claude/skills/codebase-documenter/assets/templates/API.template.md:132
- ## Changelog — .claude/skills/codebase-documenter/assets/templates/API.template.md:148

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Demonstrates comprehensive REST conventions including idempotency keys (`Idempotency-Key` header on POST), cursor-based pagination, machine-readable error codes paired with support request IDs, and tiered rate limits.
- Uses bracketed placeholder convention (`[token]`, `[id]`, `[name]`) consistent with `references/documentation_guidelines.md`.

## Context cost
3451 bytes (approx. 863 tokens).
