---
package: addy
path: .claude/commands/review.md
type: command
bytes: 846
unit: inv-addy-1
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/review.md, sha256: 8ad7da75873b430b737328d1bdd95fc8d2de4a4866737087feb4d218abe4e88f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/commands/review.md

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .claude/commands/review.md:2

## Design intent — required
Guides an in-depth code quality assessment across five explicit engineering axes (correctness, readability, architecture, security, and performance), producing structured feedback with categorized severities (Critical, Important, Suggestion) and exact file:line references.

## Phase — required
addy:Review

## Inputs — required
- Staged git changes or recent commits
- Project specification and existing codebase conventions

## Outputs — required
- Structured review report with categorized findings and specific remediation recommendations

## Invokes — required
- skill agent-skills:code-review-and-quality — .claude/commands/review.md:5
- skill security-and-hardening — .claude/commands/review.md:12
- skill performance-optimization — .claude/commands/review.md:13

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-review-and-quality` — .claude/commands/review.md:5 — used here
- `Correctness` — .claude/commands/review.md:9 — used here
- `Readability` — .claude/commands/review.md:10 — used here
- `Architecture` — .claude/commands/review.md:11 — used here
- `Security` — .claude/commands/review.md:12 — used here
- `security-and-hardening` — .claude/commands/review.md:12 — used here
- `Performance` — .claude/commands/review.md:13 — used here
- `performance-optimization` — .claude/commands/review.md:13 — used here

## Structure
Numbered evaluation axes (1. Correctness, 2. Readability, 3. Architecture, 4. Security, 5. Performance) followed by finding categorization and reporting guidelines.

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Establishes the core five-axis quality framework for Addy's lifecycle, which is executed directly by single agents here and via the `code-reviewer` persona during multi-agent `/ship` fan-out.

## Context cost
846 bytes (~212 tokens). Invocations load `code-review-and-quality`, `security-and-hardening`, and `performance-optimization`.
