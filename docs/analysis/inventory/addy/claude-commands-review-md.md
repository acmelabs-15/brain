---
package: addy
path: .claude/commands/review.md
type: command
bytes: 846
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude/commands/review.md, sha256: 8ad7da75873b430b737328d1bdd95fc8d2de4a4866737087feb4d218abe4e88f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/review.md

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .claude/commands/review.md:2

## Design intent — required
Establishes a comprehensive multi-dimensional code review protocol covering correctness, readability, architecture, security, and performance. It delegates in-depth security and performance checks to specialized skills while aggregating all findings into a structured severity hierarchy (Critical, Important, Suggestion) with exact line-level references.

## Phase — required
addy:Review

## Inputs — required
- Current code changes (staged files or recent commits) — .claude/commands/review.md:7
- Specification context to evaluate correctness against requirements — .claude/commands/review.md:9

## Outputs — required
- Structured review output with specific `file:line` references and fix recommendations — .claude/commands/review.md:16
- Categorized findings (Critical, Important, Suggestion) — .claude/commands/review.md:15

## Invokes — required
- skill agent-skills:code-review-and-quality — .claude/commands/review.md:5
- skill security-and-hardening — .claude/commands/review.md:12
- skill performance-optimization — .claude/commands/review.md:13

## Invoked by — required
none

## Concepts named — required, verbatim
`five-axis code review` — .claude/commands/review.md:2 — defined here
`Correctness` — .claude/commands/review.md:9 — defined here
`Readability` — .claude/commands/review.md:10 — defined here
`Architecture` — .claude/commands/review.md:11 — defined here
`Security` — .claude/commands/review.md:12 — defined here
`security-and-hardening` — .claude/commands/review.md:12 — used here
`Performance` — .claude/commands/review.md:13 — defined here
`performance-optimization` — .claude/commands/review.md:13 — used here
`Critical` — .claude/commands/review.md:15 — defined here
`Important` — .claude/commands/review.md:15 — defined here
`Suggestion` — .claude/commands/review.md:15 — defined here

## Structure
none (flat numbered list of review axes)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directs the agent to invoke `security-and-hardening` for security questions and `performance-optimization` for performance questions during review.

## Context cost
846 bytes, approximately 200 tokens.
