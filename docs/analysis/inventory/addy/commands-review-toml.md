---
package: addy
path: commands/review.toml
type: command
bytes: 844
unit: inv-addy-11
---

# commands/review.toml

## Purpose — required, verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — commands/review.toml:1

## Design intent — required
Executes a structured five-axis code review on staged changes or recent commits in Antigravity CLI environments, delegating deep security and performance checks to specialized skills, categorizing all identified issues by severity (Critical, Important, Suggestion) with file:line citations and actionable remediation recommendations.

## Phase — required
`addy:Review`

## Inputs — required
- Current changes (staged changes or recent commits) — commands/review.toml:6

## Outputs — required
- Structured review report with specific `file:line` references, categorized findings (Critical, Important, Suggestion), and fix recommendations — commands/review.toml:14-15

## Invokes — required
- skill code-review-and-quality — commands/review.toml:4
- skill security-and-hardening — commands/review.toml:11
- skill performance-optimization — commands/review.toml:12

## Invoked by — required
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:11
- script scripts/validate-commands.js — scripts/validate-commands.js:33
- script scripts/validate-commands-test.js — scripts/validate-commands-test.js:79, 104, 141

## Concepts named — required, verbatim
- `five-axis code review` — commands/review.toml:1 — defined here
- `code-review-and-quality` — commands/review.toml:4 — used here
- `Correctness` — commands/review.toml:8 — defined here
- `Readability` — commands/review.toml:9 — defined here
- `Architecture` — commands/review.toml:10 — defined here
- `Security` — commands/review.toml:11 — defined here
- `security-and-hardening` — commands/review.toml:11 — used here
- `Performance` — commands/review.toml:12 — defined here
- `performance-optimization` — commands/review.toml:12 — used here
- `N+1 queries` — commands/review.toml:12 — used here
- `Critical` — commands/review.toml:14 — defined here
- `Important` — commands/review.toml:14 — defined here
- `Suggestion` — commands/review.toml:14 — defined here

## Structure
- TOML key: `description` — commands/review.toml:1
- TOML key: `prompt` — commands/review.toml:3-16
  - Skill invocation instruction — commands/review.toml:4
  - Review scope and 5 axes — commands/review.toml:6-13
  - Findings categorization and output format — commands/review.toml:14-15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Content is identical to `.gemini/commands/review.toml`.
- Composes secondary skills inline: `security-and-hardening` for security axis, `performance-optimization` for performance axis.
- Standardizes triage into three unambiguous priority buckets: Critical, Important, Suggestion.

## Context cost
844 bytes (~211 tokens). Transitive cost: loads `skills/code-review-and-quality/SKILL.md` (3,391 bytes, ~848 tokens), plus optionally `skills/security-and-hardening/SKILL.md` (6,419 bytes) and `skills/performance-optimization/SKILL.md` (5,150 bytes).
