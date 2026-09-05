---
package: addy
path: evals/fixtures/spec-driven-development-decomposition/portal-brief.md
type: doc
bytes: 1067
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/spec-driven-development-decomposition/portal-brief.md, sha256: 8c4a441acbd9c1826d2a67f8413e5bff4c57c29c525a0ae6cddf25b596e95de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/spec-driven-development-decomposition/portal-brief.md

## Purpose — required, verbatim
> "Leadership wants a self-serve customer portal shipped as one initiative. The" — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:3
(no explicit purpose statement)

## Design intent — required
Provides a complex product brief fixture for evaluating the decomposition workflow of the `spec-driven-development` skill. It presents an initiative combining four interdependent domains (accounts/SSO, billing/invoicing, notifications/webhooks, admin usage dashboard) with differing organizational owners (platform, finance, growth) and acyclic dependencies. This evaluates whether an agent constructs a capability map with stable module IDs and one-way dependency order before generating isolated module specifications.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config portal-brief.md — evals/cases/spec-driven-development.json:58
- config spec-driven-development-decomposition — evals/cases/spec-driven-development.json:61

## Concepts named — required, verbatim
- `Customer portal` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1 — defined here
- `product brief` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1 — defined here
- `SSO` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:6 — used here
- `invoices` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:8 — used here
- `webhooks` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:11 — used here
- `dashboard` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:12 — used here

## Structure
- `# Customer portal — product brief` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly matches the decomposition example described in `skills/spec-driven-development/SKILL.md:43-60`, which maps this exact domain into four modules: `identity`, `billing`, `notifications`, and `reporting`.

## Context cost
1067 bytes, ~267 tokens.
