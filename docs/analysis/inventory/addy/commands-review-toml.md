---
package: addy
path: commands/review.toml
type: command
bytes: 844
unit: inv-addy-4
deprecated: false
aliases:
  - .gemini/commands/review.toml
memo_inputs:
  - {path: commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# commands/review.toml

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — commands/review.toml:1

## Design intent — required
Provides a slash command `/review` to conduct structured code reviews across five defined dimensions (correctness, readability, architecture, security, and performance), classifying findings into severity tiers with file:line citations and remediation guidance.

## Phase — required
`addy:Review`

## Inputs — required
- Changes under review: `staged or recent commits` — commands/review.toml:6
- Reference specification: `spec` — commands/review.toml:8

## Outputs — required
- Review report: `structured review with specific file:line references and fix recommendations` — commands/review.toml:15

## Invokes — required
- skill code-review-and-quality — commands/review.toml:4
- skill security-and-hardening — commands/review.toml:11
- skill performance-optimization — commands/review.toml:12

## Invoked by — required
none

## Concepts named — required, verbatim
- `five-axis code review` — commands/review.toml:1 — defined here
- `code-review-and-quality` — commands/review.toml:4 — used here
- `Correctness` — commands/review.toml:8 — defined here
- `Readability` — commands/review.toml:9 — defined here
- `Architecture` — commands/review.toml:10 — defined here
- `Security` — commands/review.toml:11 — defined here
- `security-and-hardening` — commands/review.toml:11 — used here
- `Performance` — commands/review.toml:12 — defined here
- `performance-optimization` — commands/review.toml:12 — used here
- `Critical` — commands/review.toml:14 — defined here
- `Important` — commands/review.toml:14 — defined here
- `Suggestion` — commands/review.toml:14 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact alias of `.gemini/commands/review.toml` (EXACT duplicate ledger group 3). Composes three skills: `code-review-and-quality` for overall review mechanics, plus `security-and-hardening` and `performance-optimization` for domain-specific deep dives.

## Context cost
844 bytes (~210 tokens). Loads `code-review-and-quality`, `security-and-hardening`, and `performance-optimization` skills when invoked.
