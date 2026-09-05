---
package: addy
path: evals/fixtures/api-and-interface-design/service-brief.md
type: doc
bytes: 693
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/api-and-interface-design/service-brief.md, sha256: 1542195d78e4cce6c86cbdc7d69c45826f09b02ca50396d8a5c9675b837cbc77}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/api-and-interface-design/service-brief.md

## Purpose — required, verbatim
> "URL shortener service brief" — evals/fixtures/api-and-interface-design/service-brief.md:1

## Design intent — required
Serves as an input test fixture for the behavioral evaluation of the `api-and-interface-design` skill (eval id 1 in `evals/cases/api-and-interface-design.json`). It provides realistic product requirements, security and operational constraints (untrusted destination URLs, slug length, operator vs. client error distinction), and explicitly undecided points (custom slugs, expiration defaults, auth for statistics) to verify that an agent designs complete API contracts with proper validation and error semantics without guessing on unresolved requirements.

## Phase — required
addy:Build

## Inputs — required
Read by the model during the evaluation run defined in `evals/cases/api-and-interface-design.json` (eval id 1), set up by `scripts/run-evals.js`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `service brief` — evals/fixtures/api-and-interface-design/service-brief.md:1 — defined here
- `Slugs` — evals/fixtures/api-and-interface-design/service-brief.md:10 — used here

## Structure
- `# URL shortener service brief` — evals/fixtures/api-and-interface-design/service-brief.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
A clean requirements specification fixture combining concrete constraints with explicit "Still undecided" items, testing whether an agent surfaces ambiguity rather than making unverified design choices.

## Context cost
693 bytes (~173 tokens). Loads no external files directly.
