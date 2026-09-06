---
package: addy
name: product brief
slug: product-brief
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/spec-driven-development-decomposition/portal-brief.md, sha256: 8c4a441acbd9c1826d2a67f8413e5bff4c57c29c525a0ae6cddf25b596e95de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# product brief

## Definition — verbatim
(used, not defined)
> "product brief" — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/spec-driven-development-decomposition/portal-brief.md | 1 | references | Document classification for the customer portal initiative summary used as decomposition input |

## Consumes
Business objectives, user problem statements, and high-level initiative scope

## Produces
Summary of initiative capabilities, dependencies, stakeholder ownership, and constraints

## When applied
Authored in early discovery and definition phases before technical specifications and decomposition

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An upstream requirements artifact capturing high-level business goals, feature expectations, and constraints; in Addy's spec-driven development methodology, the product brief provides the initial input that agents must decompose into modular, independently verifiable specifications.
