---
package: addy
path: evals/fixtures/api-and-interface-design/service-brief.md
type: doc
bytes: 693
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/api-and-interface-design/service-brief.md, sha256: 1542195d78e4cce6c86cbdc7d69c45826f09b02ca50396d8a5c9675b837cbc77}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/api-and-interface-design/service-brief.md

## Purpose — required, verbatim
> "The service needs public operations to create a short URL, resolve a slug, and read aggregate click statistics. Clients include a browser extension and a mobile app, so contracts must remain backward compatible." — evals/fixtures/api-and-interface-design/service-brief.md:3-5
(no explicit purpose statement)

## Design intent — required
Serves as an input problem brief fixture for evaluating the `api-and-interface-design` skill. It outlines functional requirements for a URL-shortening service alongside explicit constraints (untrusted destination URLs, slug length, indistinguishable error leakage) and undecided questions (custom slugs, default expiration, authentication for stats) to assess whether an agent designs robust, backward-compatible API contracts with proper error semantics and surfaces unstated requirements.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config api-and-interface-design — evals/cases/api-and-interface-design.json:35

## Concepts named — required, verbatim
- `URL shortener` — evals/fixtures/api-and-interface-design/service-brief.md:1 — defined here
- `slug` — evals/fixtures/api-and-interface-design/service-brief.md:3 — defined here
- `click statistics` — evals/fixtures/api-and-interface-design/service-brief.md:4 — defined here

## Structure
- `# URL shortener service brief` — evals/fixtures/api-and-interface-design/service-brief.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The fixture explicitly separates confirmed constraints from open questions: `"Known constraints:"` (evals/fixtures/api-and-interface-design/service-brief.md:7) specifies that destination URLs are untrusted and statistics may lag up to one minute, while `"Still undecided:"` (evals/fixtures/api-and-interface-design/service-brief.md:15) leaves custom slugs, link expiration, and auth undecided to test if an agent surfaces assumptions before finalizing an API specification.

## Context cost
693 bytes, ~173 tokens.
