---
package: addy
path: .claude/commands/review.md
type: command
bytes: 846
unit: inv-addy-4
---

# .claude/commands/review.md

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .claude/commands/review.md:2

## Design intent — required
Executes a structured 5-axis code review (Correctness, Readability, Architecture, Security, Performance) on staged changes or recent commits, categorizing findings by severity with specific `file:line` locations and concrete fix recommendations.

## Phase — required
`addy:Review`

## Inputs — required
- Staged changes or recent git commits

## Outputs — required
- Structured code review report with `file:line` references and categorized findings

## Invokes — required
- skill code-review-and-quality — .claude/commands/review.md:5 (named `agent-skills:code-review-and-quality`)
- skill security-and-hardening — .claude/commands/review.md:12
- skill performance-optimization — .claude/commands/review.md:13

## Invoked by — required
none

## Concepts named — required, verbatim
- `five-axis code review` — .claude/commands/review.md:2, 7 — defined here
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
- `---` (frontmatter: description) — .claude/commands/review.md:1-3
- Five review axes 1–5 — .claude/commands/review.md:9-13
- Finding categorization & output format — .claude/commands/review.md:15-16

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `cross-file-contradiction` — Severity categorization drift: `.claude/commands/review.md:15` specifies `Critical, Important, or Suggestion`, whereas `agents/code-reviewer.md:51-57` and `skills/code-review-and-quality/SKILL.md:275-288` specify `Critical`, `Required`, `Optional`, `Nit`.

## Observations
- Direct single-perspective review command, distinct from the multi-persona fan-out orchestration in `/ship`.

## Context cost
- File size: 846 bytes (~210 tokens).
- Transitive cost when invoked: loads `code-review-and-quality` SKILL.md (20,555 bytes), with optional calls to `security-and-hardening` (24,192 bytes) and `performance-optimization` (21,717 bytes), totaling up to ~67,310 bytes (~16,830 tokens).
