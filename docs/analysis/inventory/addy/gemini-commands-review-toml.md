---
package: addy
path: .gemini/commands/review.toml
type: command
bytes: 844
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/review.toml

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .gemini/commands/review.toml:1

## Design intent — required
Performs comprehensive multi-axis code evaluation across correctness, readability, architecture, security, and performance, delivering structured findings with severity levels and file-line remediation advice.

## Phase — required
addy:review

## Inputs — required
Recent code changes or staged git commits (.gemini/commands/review.toml:6) and corresponding functional specification (.gemini/commands/review.toml:8).

## Outputs — required
Structured code review report with findings categorized by severity (Critical, Important, Suggestion) and specific file:line fix recommendations (.gemini/commands/review.toml:14-15).

## Invokes — required
- skill code-review-and-quality — .gemini/commands/review.toml:4
- skill security-and-hardening — .gemini/commands/review.toml:11
- skill performance-optimization — .gemini/commands/review.toml:12

## Invoked by — required
none

## Concepts named — required, verbatim
- `Correctness` — .gemini/commands/review.toml:8 — used here
- `Readability` — .gemini/commands/review.toml:9 — used here
- `Architecture` — .gemini/commands/review.toml:10 — used here
- `Security` — .gemini/commands/review.toml:11 — used here
- `Performance` — .gemini/commands/review.toml:12 — used here
- `Critical` — .gemini/commands/review.toml:14 — used here
- `Important` — .gemini/commands/review.toml:14 — used here
- `Suggestion` — .gemini/commands/review.toml:14 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical to `commands/review.toml` (canonical member of EXACT group 3 in `docs/analysis/manifest/addy-duplicates.md`). Composes specialized security and performance skills within the review workflow.

## Context cost
844 bytes, ~210 tokens.
