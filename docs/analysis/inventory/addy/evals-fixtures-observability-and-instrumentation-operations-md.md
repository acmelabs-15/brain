---
package: addy
path: evals/fixtures/observability-and-instrumentation/operations.md
type: doc
bytes: 422
unit: inv-addy-10
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/observability-and-instrumentation/operations.md, sha256: 37aa8678c2df2ac7c8c5836804003ba5429b955681968df75421fbb65c13ffa6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/observability-and-instrumentation/operations.md

## Purpose — required, verbatim
> "# Payment retry operations" — evals/fixtures/observability-and-instrumentation/operations.md:1

## Design intent — required
Defines key operational questions for on-call triage and establishes strict logging privacy rules for payment retries. Used in eval case #1 of `observability-and-instrumentation` to evaluate whether an agent designs observability backwards from on-call operator needs (defining triage questions before logging) and respects data protection boundaries (prohibiting logging of card numbers, emails, and raw gateway responses).

## Phase — required
none

## Inputs — required
Payment retry operations context and gateway error recovery scenarios at evals/fixtures/observability-and-instrumentation/operations.md:3-8.

## Outputs — required
Specifies operational questions at evals/fixtures/observability-and-instrumentation/operations.md:5-8 and correlation identifier constraints at evals/fixtures/observability-and-instrumentation/operations.md:10-11.

## Invokes — required
none

## Invoked by — required
"observability-and-instrumentation" — evals/cases/observability-and-instrumentation.json:34

## Concepts named — required, verbatim
- `Payment retry operations` — evals/fixtures/observability-and-instrumentation/operations.md:1 — defined here
- `correlation identifiers` — evals/fixtures/observability-and-instrumentation/operations.md:10 — used here

## Structure
- Heading: "# Payment retry operations" — evals/fixtures/observability-and-instrumentation/operations.md:1
- On-call triage questions list — evals/fixtures/observability-and-instrumentation/operations.md:3-8
- Correlation IDs and forbidden data logging policy — evals/fixtures/observability-and-instrumentation/operations.md:10-11

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplifies best-practice observability design: start from operator questions and enforce strict data boundaries (no card numbers, customer emails, or raw gateway responses) before choosing instrumentation.

## Context cost
422 bytes, ~95 tokens.
