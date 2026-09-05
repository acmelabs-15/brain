---
package: addy
path: .gemini/commands/review.toml
type: command
bytes: 844
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .gemini/commands/review.toml

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .gemini/commands/review.toml:1

## Design intent — required
Defines `/review` command for Gemini CLI to evaluate code changes across five orthogonal dimensions (correctness, readability, architecture, security, and performance). Delivers structured, file-and-line-specific feedback classified by severity with actionable fixes.

## Phase — required
addy:Review

## Inputs — required
Current changes (staged files or recent commits, .gemini/commands/review.toml:6); project specification for correctness comparison (.gemini/commands/review.toml:8).

## Outputs — required
Structured code review with file:line citations, prioritized findings (Critical, Important, Suggestion), and fix recommendations (.gemini/commands/review.toml:14-15).

## Invokes — required
- skill code-review-and-quality — .gemini/commands/review.toml:4
- skill security-and-hardening — .gemini/commands/review.toml:11
- skill performance-optimization — .gemini/commands/review.toml:12

## Invoked by — required
none

## Concepts named — required, verbatim
- `five-axis code review` — .gemini/commands/review.toml:1 — used here
- `code-review-and-quality` — .gemini/commands/review.toml:4 — used here
- `Correctness` — .gemini/commands/review.toml:8 — used here
- `Readability` — .gemini/commands/review.toml:9 — used here
- `Architecture` — .gemini/commands/review.toml:10 — used here
- `Security` — .gemini/commands/review.toml:11 — used here
- `security-and-hardening` — .gemini/commands/review.toml:11 — used here
- `Performance` — .gemini/commands/review.toml:12 — used here
- `performance-optimization` — .gemini/commands/review.toml:12 — used here
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
Byte-identical to `commands/review.toml` (EXACT group 3 in `addy-duplicates.md`, SHA `a7ae7259a9e08073`).

## Context cost
844 bytes, ~210 tokens.
