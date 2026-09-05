---
package: addy
path: commands/review.toml
type: command
bytes: 844
unit: inv-addy-4
aliases:
  - .gemini/commands/review.toml
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# commands/review.toml

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — commands/review.toml:1

## Design intent — required
Provides a slash command entry point (`/review`) that runs a structured five-axis code review across staged changes or recent commits, evaluating correctness, readability, architecture, security, and performance. Without this command, reviews would lack standardized multi-axis coverage, severity labeling (Critical, Important, Suggestion), and actionable file:line references.

## Phase — required
addy:Review

## Inputs — required
- Staged changes or recent commits — commands/review.toml:6

## Outputs — required
- Structured review with specific `file:line` references and fix recommendations — commands/review.toml:15

## Invokes — required
- skill code-review-and-quality — commands/review.toml:4
- skill security-and-hardening — commands/review.toml:11
- skill performance-optimization — commands/review.toml:12

## Invoked by — required
- entry point — invoked by the user or harness as a slash command (`/review`)

## Concepts named — required, verbatim
- `five-axis code review` — commands/review.toml:1 — used here
- `Correctness` — commands/review.toml:8 — used here
- `Readability` — commands/review.toml:9 — used here
- `Architecture` — commands/review.toml:10 — used here
- `Security` — commands/review.toml:11 — used here
- `Performance` — commands/review.toml:12 — used here
- `Critical` — commands/review.toml:14 — used here
- `Important` — commands/review.toml:14 — used here
- `Suggestion` — commands/review.toml:14 — used here

## Structure
- description — commands/review.toml:1
- prompt — commands/review.toml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical canonical file to `.gemini/commands/review.toml` (ledger EXACT group 3). Composes three skills (`code-review-and-quality`, `security-and-hardening`, and `performance-optimization`) into a single review command.

## Context cost
844 bytes (approx. 200 tokens) for this command file. Invokes `skills/code-review-and-quality/SKILL.md` (10,500 bytes), `skills/security-and-hardening/SKILL.md` (24,192 bytes), and `skills/performance-optimization/SKILL.md` (21,717 bytes).
