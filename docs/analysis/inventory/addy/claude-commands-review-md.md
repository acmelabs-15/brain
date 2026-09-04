---
package: addy
path: .claude/commands/review.md
type: command
bytes: 846
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude/commands/review.md, sha256: 8ad7da75873b430b737328d1bdd95fc8d2de4a4866737087feb4d218abe4e88f}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/review.md

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .claude/commands/review.md:2

## Design intent — required
Executes a structured 5-axis code review (Correctness, Readability, Architecture, Security, Performance) on staged changes or recent commits, categorizing findings by severity with specific `file:line` locations and concrete fix recommendations.

## Phase — required
addy:REVIEW

## Inputs — required
- Staged changes or recent git commits

## Outputs — required
- Structured code review report with `file:line` references and categorized findings

## Invokes — required
- skill code-review-and-quality — .claude/commands/review.md:5
- skill security-and-hardening — .claude/commands/review.md:12
- skill performance-optimization — .claude/commands/review.md:13

## Invoked by — required
none

## Concepts named — required, verbatim
- `five-axis code review` — .claude/commands/review.md:2 — defined here
- `code-review-and-quality` — .claude/commands/review.md:5 — used here
- `Correctness` — .claude/commands/review.md:9 — defined here
- `Readability` — .claude/commands/review.md:10 — defined here
- `Architecture` — .claude/commands/review.md:11 — defined here
- `Security` — .claude/commands/review.md:12 — defined here
- `Performance` — .claude/commands/review.md:13 — defined here
- `security-and-hardening` — .claude/commands/review.md:12 — used here
- `performance-optimization` — .claude/commands/review.md:13 — used here
- `Critical` — .claude/commands/review.md:15 — defined here
- `Important` — .claude/commands/review.md:15 — defined here
- `Suggestion` — .claude/commands/review.md:15 — defined here

## Structure
- Five review axes 1–5
- Finding categorization and output format

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `cross-file-contradiction` · .claude/commands/review.md:15 · Severity categorization drift: `.claude/commands/review.md:15` specifies `Critical, Important, or Suggestion`, whereas `agents/code-reviewer.md:51-57` and `skills/code-review-and-quality/SKILL.md:275-288` specify `Critical`, `Required`, `Optional`, `Nit`.

## Observations
Direct single-perspective review command, distinct from the multi-persona fan-out orchestration in `/ship`.

## Context cost
846 bytes, ~210 tokens. Transitive cost: loads `code-review-and-quality` (20555 bytes), with optional calls to `security-and-hardening` (24192 bytes) and `performance-optimization` (21717 bytes).
