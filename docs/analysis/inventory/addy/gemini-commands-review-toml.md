---
package: addy
path: .gemini/commands/review.toml
type: command
bytes: 844
unit: inv-addy-1
---

# .gemini/commands/review.toml

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .gemini/commands/review.toml:1

## Design intent — required
Standardizes code review across five structured dimensions (Correctness, Readability, Architecture, Security, Performance) with categorized finding severity (Critical, Important, Suggestion) and mandatory `file:line` citations with actionable fix recommendations. Without it, automated reviews default to superficial syntax nitpicking while missing architectural regressions, security vulnerabilities, or performance bottlenecks.

## Phase — required
`addy:Review`

## Inputs — required
- Staged changes or recent git commits — .gemini/commands/review.toml:6
- Project specifications and test suites — .gemini/commands/review.toml:8

## Outputs — required
- Structured review report with categorized findings (Critical, Important, Suggestion), `file:line` citations, and concrete fix recommendations — .gemini/commands/review.toml:14, 15

## Invokes — required
- skill code-review-and-quality — .gemini/commands/review.toml:4
- skill security-and-hardening — .gemini/commands/review.toml:11
- skill performance-optimization — .gemini/commands/review.toml:12

## Invoked by — required
none

## Concepts named — required, verbatim
- `five-axis code review` — .gemini/commands/review.toml:1, 6 — defined here
- `code-review-and-quality` — .gemini/commands/review.toml:4 — used here
- `Correctness` — .gemini/commands/review.toml:1, 8 — defined here
- `Readability` — .gemini/commands/review.toml:1, 9 — defined here
- `Architecture` — .gemini/commands/review.toml:1, 10 — defined here
- `Security` — .gemini/commands/review.toml:1, 11 — defined here
- `security-and-hardening` — .gemini/commands/review.toml:11 — used here
- `Performance` — .gemini/commands/review.toml:1, 12 — defined here
- `performance-optimization` — .gemini/commands/review.toml:12 — used here
- `Critical finding` — .gemini/commands/review.toml:14 — defined here
- `Important finding` — .gemini/commands/review.toml:14 — defined here
- `Suggestion` — .gemini/commands/review.toml:14 — defined here

## Structure
- Unsectioned 5-axis numbered review checklist in prompt body — .gemini/commands/review.toml:8-12

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction — .gemini/commands/review.toml:14 — Categorizes findings as 'Critical, Important, or Suggestion', whereas `agents/code-reviewer.md:51-57` defines finding severities as 'Critical, Required, Optional, Nit'.

## Observations
- Directly invokes specialized sub-skills for specific review axes: `security-and-hardening` for Security (axis 4) and `performance-optimization` for Performance (axis 5) (.gemini/commands/review.toml:11, 12).
- Single-persona counterpart to the multi-agent `/ship` orchestrator.

## Context cost
- File size: 844 bytes (~210 tokens).
- Transitive context cost when invoked: loads `skills/code-review-and-quality/SKILL.md` (9,540 bytes) plus conditionally referenced skills `skills/security-and-hardening/SKILL.md` (9,812 bytes) and `skills/performance-optimization/SKILL.md` (9,450 bytes), totaling ~29,646 bytes (~7,410 tokens) before diffs.
