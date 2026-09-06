---
package: addy
path: evals/fixtures/api-and-interface-design/service-brief.md
type: doc
bytes: 693
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/api-and-interface-design/service-brief.md, sha256: 1542195d78e4cce6c86cbdc7d69c45826f09b02ca50396d8a5c9675b837cbc77}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/api-and-interface-design/service-brief.md

## Purpose — required, verbatim
> "The service needs public operations to create a short URL, resolve a slug, and" — evals/fixtures/api-and-interface-design/service-brief.md:3

(no explicit purpose statement)

## Design intent — required
Evaluation fixture providing requirements, constraints, and open questions for designing a URL shortener API under the `api-and-interface-design` skill (`evals/cases/api-and-interface-design.json`). Details required operations (create short URL, resolve slug, aggregate click statistics), client expectations (browser extension and mobile app backward compatibility), security constraints (untrusted user destination URLs, URL-safe slugs, error differentiation without storage leakage), and intentionally undecided requirements (custom slugs, default expiration, auth on stats). Challenges an agent to produce robust endpoint contracts, status codes, error envelopes, and input validation while explicitly identifying open questions rather than inventing answers.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
"api-and-interface-design" — evals/cases/api-and-interface-design.json:35

## Concepts named — required, verbatim
- `URL shortener service brief` — evals/fixtures/api-and-interface-design/service-brief.md:1 — defined here
- `Known constraints` — evals/fixtures/api-and-interface-design/service-brief.md:7 — defined here
- `Still undecided` — evals/fixtures/api-and-interface-design/service-brief.md:15 — defined here

## Structure
- `# URL shortener service brief` — evals/fixtures/api-and-interface-design/service-brief.md:1
- Service operations and clients — evals/fixtures/api-and-interface-design/service-brief.md:3-5
- `Known constraints:` — evals/fixtures/api-and-interface-design/service-brief.md:7-13
- `Still undecided:` — evals/fixtures/api-and-interface-design/service-brief.md:15-19

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplar specification brief with realistic architectural tension: explicitly defines what is decided (untrusted user destination URLs, 6-12 character URL-safe slugs, distinguishable missing vs expired slugs without storage detail leakage, 1-minute stats delay) versus what is deliberately undecided (custom slugs, default expiration, authentication for stats). Tests whether an agent surfaces open questions rather than silently deciding them.

## Context cost
693 bytes, ~160 tokens.
