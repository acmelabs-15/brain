---
package: addy
path: .gemini/commands/review.toml
type: command
bytes: 844
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gemini/commands/review.toml

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .gemini/commands/review.toml:1

## Design intent — required
Conducts a structured five-axis code review on staged changes or recent commits using the `code-review-and-quality` skill in Gemini CLI. Evaluates correctness, readability, architecture, security (incorporating `security-and-hardening`), and performance (incorporating `performance-optimization`), grading all findings into a three-tier severity scheme (Critical, Important, Suggestion) with actionable file:line references.

## Phase — required
addy:Review

## Inputs — required
- Staged git changes or recent commits — .gemini/commands/review.toml:6
- Spec requirements and edge cases — .gemini/commands/review.toml:8

## Outputs — required
- Structured code review report with findings categorized as Critical, Important, or Suggestion — .gemini/commands/review.toml:14, 15

## Invokes — required
- skill code-review-and-quality — .gemini/commands/review.toml:4
- skill security-and-hardening — .gemini/commands/review.toml:11
- skill performance-optimization — .gemini/commands/review.toml:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `five-axis code review` — .gemini/commands/review.toml:1 — defined here
- `code-review-and-quality` — .gemini/commands/review.toml:4 — used here
- `Correctness` — .gemini/commands/review.toml:8 — defined here
- `Readability` — .gemini/commands/review.toml:9 — defined here
- `Architecture` — .gemini/commands/review.toml:10 — defined here
- `Security` — .gemini/commands/review.toml:11 — defined here
- `security-and-hardening` — .gemini/commands/review.toml:11 — used here
- `Performance` — .gemini/commands/review.toml:12 — defined here
- `performance-optimization` — .gemini/commands/review.toml:12 — used here
- `Critical` — .gemini/commands/review.toml:14 — defined here
- `Important` — .gemini/commands/review.toml:14 — defined here
- `Suggestion` — .gemini/commands/review.toml:14 — defined here

## Structure
- "Review the current changes" — .gemini/commands/review.toml:6
- "Output a structured review" — .gemini/commands/review.toml:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact byte duplicate of `commands/review.toml` (hash `a7ae7259a9e08073`, 844 bytes). Standardizes review criteria into 5 discrete axes and explicitly cross-invokes domain-specific skills for the Security (`security-and-hardening`) and Performance (`performance-optimization`) evaluation axes.

## Context cost
844 bytes (~210 tokens). If invoked skills are loaded: `code-review-and-quality` (16,344 bytes), `security-and-hardening` (17,678 bytes), `performance-optimization` (19,301 bytes).
