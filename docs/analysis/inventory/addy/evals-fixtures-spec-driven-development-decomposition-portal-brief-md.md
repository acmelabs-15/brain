---
package: addy
path: evals/fixtures/spec-driven-development-decomposition/portal-brief.md
type: doc
bytes: 1067
unit: inv-addy-11
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/spec-driven-development-decomposition/portal-brief.md, sha256: 8c4a441acbd9c1826d2a67f8413e5bff4c57c29c525a0ae6cddf25b596e95de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/spec-driven-development-decomposition/portal-brief.md

## Purpose — required, verbatim
> "Leadership wants a self-serve customer portal shipped as one initiative. The" — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:3
(no explicit purpose statement)

## Design intent — required
Product initiative fixture for evaluating spec decomposition workflows in `spec-driven-development` (`evals/cases/spec-driven-development.json` eval id 2). Outlines a multi-faceted customer portal initiative spanning four distinct capability areas (accounts, billing, notifications, usage dashboard) with explicit inter-module dependencies and divergent stakeholder ownership (platform, finance, growth). Tests whether the agent constructs a capability map with stable module IDs and acyclic dependency order before drafting individual module specs, ensuring each module is independently verifiable and shippable without bundling everything into a single monolithic spec.

## Phase — required
none

## Inputs — required
Read by eval runners as the input brief for the spec decomposition evaluation.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Customer portal` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1 — defined here
- `product brief` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1 — used here
- `SSO` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:6 — used here
- `webhooks` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:11 — used here
- `usage dashboard` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:12 — used here
- `account data` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:16 — used here

## Structure
- `# Customer portal — product brief` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Specifies modular shippability constraint: "Each area should be shippable and verifiable on its own; finance wants to" — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:21.

## Context cost
1067 bytes, ~220 tokens.
