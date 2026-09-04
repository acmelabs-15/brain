---
package: addy
path: .gemini/commands/review.toml
type: command
bytes: 844
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/review.toml

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .gemini/commands/review.toml:1

## Design intent — required
Gemini/Antigravity slash command conducting a 5-axis code review (Correctness, Readability, Architecture, Security, Performance) on staged changes or recent commits, categorizing findings into Critical, Important, or Suggestion with file:line citations and fix recommendations.

## Phase — required
addy:REVIEW

## Inputs — required
- Staged git changes or recent commits

## Outputs — required
- Structured review report with findings categorized by severity

## Invokes — required
- skill code-review-and-quality — .gemini/commands/review.toml:4
- skill security-and-hardening — .gemini/commands/review.toml:11
- skill performance-optimization — .gemini/commands/review.toml:12

## Invoked by — required
none

## Concepts named — required, verbatim
- `five-axis code review` — .gemini/commands/review.toml:1 — defined here
- `code-review-and-quality` — .gemini/commands/review.toml:4 — used here
- `Correctness` — .gemini/commands/review.toml:8 — defined here
- `Readability` — .gemini/commands/review.toml:9 — defined here
- `Architecture` — .gemini/commands/review.toml:10 — defined here
- `Security` — .gemini/commands/review.toml:11 — defined here
- `Performance` — .gemini/commands/review.toml:12 — defined here
- `security-and-hardening` — .gemini/commands/review.toml:11 — used here
- `performance-optimization` — .gemini/commands/review.toml:12 — used here
- `Critical` — .gemini/commands/review.toml:14 — defined here
- `Important` — .gemini/commands/review.toml:14 — defined here
- `Suggestion` — .gemini/commands/review.toml:14 — defined here

## Structure
- Five review axes 1–5
- Finding categorization and output format

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `cross-file-contradiction` · .gemini/commands/review.toml:14 · Finding categorization uses `Critical, Important, or Suggestion`, while `agents/code-reviewer.md:51-57` uses `Critical`, `Required`, `Optional`, `Nit`.

## Observations
Exact alias of `commands/review.toml`.

## Context cost
844 bytes, ~210 tokens. Transitive cost: loads `code-review-and-quality` (20555 bytes), with optional calls to `security-and-hardening` (24192 bytes) and `performance-optimization` (21717 bytes).
