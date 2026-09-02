---
package: addy
path: agents/code-reviewer.md
type: agent
bytes: 3995
unit: inv-addy-4
---

# agents/code-reviewer.md

## Purpose — required, verbatim
> "Senior code reviewer that evaluates changes across five dimensions — correctness, readability, architecture, security, and performance. Use for thorough code review before merge." — agents/code-reviewer.md:3

## Design intent — required
Subagent persona embodying an experienced Staff Engineer who conducts exhaustive 5-axis code reviews (Correctness, Readability, Architecture, Security, Performance), categorizing issues by standardized severity levels (Critical, Required, Optional, Nit), rendering a structured Review Output Template (APPROVE | REQUEST CHANGES, positive feedback, verification story), and enforcing rules against approving critical issues.

## Phase — required
`addy:Review`

## Inputs — required
- Code diff / modified files
- Spec or task description
- Test files

## Outputs — required
- Review Output Template (Review Summary, Verdict: APPROVE | REQUEST CHANGES, Overview, Critical Issues, Required Changes, Optional, Nits, What's Done Well, Verification Story) — agents/code-reviewer.md:59-87

## Invokes — required
- skill code-review-and-quality — agents/code-reviewer.md:49
- doc docs/agents.md — agents/code-reviewer.md:102

## Invoked by — required
- .claude/commands/ship.md:15, 26, 61
- docs/agents.md:7, 19, 29, 37, 44, 64, 86, 110
- AGENTS.md:80
- README.md:292
- docs/getting-started.md:98, 103
- docs/gemini-cli-setup.md:131
- docs/copilot-setup.md:30, 36, 85, 87
- references/orchestration-patterns.md:16, 22, 35, 53, 123, 160, 166, 228, 247, 289, 304, 332
- commands/ship.toml:10, 14, 25, 31, 60
- agents/security-auditor.md:111, 112
- agents/web-performance-auditor.md:184

## Concepts named — required, verbatim
- `code-reviewer` — agents/code-reviewer.md:2, 101 — defined here
- `Staff Engineer` — agents/code-reviewer.md:8 — defined here
- `Review Framework` — agents/code-reviewer.md:10 — defined here
- `Correctness` — agents/code-reviewer.md:14 — defined here
- `Readability` — agents/code-reviewer.md:20 — defined here
- `Architecture` — agents/code-reviewer.md:26 — defined here
- `Security` — agents/code-reviewer.md:33 — defined here
- `Performance` — agents/code-reviewer.md:40 — defined here
- `code-review-and-quality` — agents/code-reviewer.md:49 — used here
- `Critical` — agents/code-reviewer.md:51, 68 — defined here
- `Required` — agents/code-reviewer.md:53, 71 — defined here
- `Optional` — agents/code-reviewer.md:55, 74 — defined here
- `Nit` — agents/code-reviewer.md:57, 77 — defined here
- `Review Output Template` — agents/code-reviewer.md:59 — defined here
- `APPROVE | REQUEST CHANGES` — agents/code-reviewer.md:64 — defined here
- `What's Done Well` — agents/code-reviewer.md:80 — defined here
- `Verification Story` — agents/code-reviewer.md:83 — defined here

## Structure
- `---` (frontmatter: name, description) — agents/code-reviewer.md:1-4
- `# Senior Code Reviewer` — agents/code-reviewer.md:6
- `## Review Framework` — agents/code-reviewer.md:10
- `### 1. Correctness` — agents/code-reviewer.md:14
- `### 2. Readability` — agents/code-reviewer.md:20
- `### 3. Architecture` — agents/code-reviewer.md:26
- `### 4. Security` — agents/code-reviewer.md:33
- `### 5. Performance` — agents/code-reviewer.md:40
- `## Output Format` — agents/code-reviewer.md:47
- `## Review Output Template` — agents/code-reviewer.md:59
- `## Rules` — agents/code-reviewer.md:89
- `## Composition` — agents/code-reviewer.md:98

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `cross-file-contradiction` — Severity categories (`Critical`, `Required`, `Optional`, `Nit` at lines 51-57) disagree with `.claude/commands/review.md:15` (`Critical`, `Important`, `Suggestion`), but agree with `skills/code-review-and-quality/SKILL.md:275-288`.

## Observations
- Strict anti-chaining rule: "Do not invoke from another persona. If you find yourself wanting to delegate to security-auditor or test-engineer, surface that as a recommendation in your report instead — orchestration belongs to slash commands, not personas" (agents/code-reviewer.md:102).
- Mandatory positive feedback: "Acknowledge what's done well — specific praise motivates good practices" (agents/code-reviewer.md:81, 95).

## Context cost
- File size: 3,995 bytes (~1,000 tokens).
- Transitive cost when invoked: standalone persona context (~1,000 tokens system prompt + target diff & review materials).
