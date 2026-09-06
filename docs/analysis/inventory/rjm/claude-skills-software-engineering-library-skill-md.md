---
package: rjm
path: .claude/skills/software-engineering-library/SKILL.md
type: skill
bytes: 4840
unit: inv-rjm-171
in_scope_via: AGENTS.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/software-engineering-library/SKILL.md

## Purpose — required, verbatim
> "This skill routes software engineering design work to deeper book-derived references without loading them on every turn." — .claude/skills/software-engineering-library/SKILL.md:10

## Design intent — required
Acts as an on-demand routing gate for software engineering architecture and code quality decisions, decoupling routine agent turns from heavy book-derived references. It keeps baseline prompt overhead minimal during standard development by allowing default rules (`code-quality`, `pragmatic-programmer`, `unified-software-engineering`) to handle everyday tasks, while providing an indexed routing matrix to selectively load up to eight specialized reference guides (Clean Architecture, Philosophy of Software Design, Domain-Driven Design, Enterprise Patterns, Refactoring, Working with Legacy Code, Data-Intensive Applications, and Release It!) only when deep, domain-specific decisions or risk conditions require them.

## Phase — required
cross-phase

## Inputs — required
Architecture reviews, domain modeling questions, refactoring proposals, legacy code assessments, database and persistence designs, concurrency and event ordering issues, resilience and reliability requirements.

## Outputs — required
Targeted routing instructions directing the agent to open the minimal matching set of reference documents (at most two).

## Invokes — required
- reference references/clean-architecture.md — .claude/skills/software-engineering-library/SKILL.md:24
- reference references/philosophy-of-software-design.md — .claude/skills/software-engineering-library/SKILL.md:25
- reference references/domain-driven-design.md — .claude/skills/software-engineering-library/SKILL.md:26
- reference references/enterprise-patterns.md — .claude/skills/software-engineering-library/SKILL.md:27
- reference references/refactoring.md — .claude/skills/software-engineering-library/SKILL.md:28
- reference references/working-with-legacy-code.md — .claude/skills/software-engineering-library/SKILL.md:29
- reference references/data-intensive-applications.md — .claude/skills/software-engineering-library/SKILL.md:30
- reference references/release-it.md — .claude/skills/software-engineering-library/SKILL.md:31
- skill programming-advisor — .claude/skills/software-engineering-library/SKILL.md:64
- skill code-qualities-assessment — .claude/skills/software-engineering-library/SKILL.md:65
- skill cva-analysis — .claude/skills/software-engineering-library/SKILL.md:66

## Invoked by — required
- agent AGENTS.md — AGENTS.md:12
- skill analyze — .claude/skills/analyze/SKILL.md:119
- skill autoplan — .claude/skills/autoplan/SKILL.md:127
- skill requirements-interview — .claude/skills/requirements-interview/SKILL.md:114
- rule unified-software-engineering — .claude/rules/unified-software-engineering.md:152
- reference reliability.md — .claude/skills/review/references/reliability.md:53
- reference architect.md — .claude/skills/review/references/architect.md:52

## Concepts named — required, verbatim
- `software-engineering-library` — .claude/skills/software-engineering-library/SKILL.md:2 — defined here
- `architecture review` — .claude/skills/software-engineering-library/SKILL.md:4 — used here
- `characterization test` — .claude/skills/software-engineering-library/SKILL.md:4 — used here
- `circuit breaker` — .claude/skills/software-engineering-library/SKILL.md:4 — used here
- `bulkhead` — .claude/skills/software-engineering-library/SKILL.md:4 — used here
- `code-quality` — .claude/skills/software-engineering-library/SKILL.md:12 — used here
- `pragmatic-programmer` — .claude/skills/software-engineering-library/SKILL.md:12 — used here
- `unified-software-engineering` — .claude/skills/software-engineering-library/SKILL.md:12 — used here
- `references/clean-architecture.md` — .claude/skills/software-engineering-library/SKILL.md:24 — used here
- `references/philosophy-of-software-design.md` — .claude/skills/software-engineering-library/SKILL.md:25 — used here
- `references/domain-driven-design.md` — .claude/skills/software-engineering-library/SKILL.md:26 — used here
- `references/enterprise-patterns.md` — .claude/skills/software-engineering-library/SKILL.md:27 — used here
- `references/refactoring.md` — .claude/skills/software-engineering-library/SKILL.md:28 — used here
- `references/working-with-legacy-code.md` — .claude/skills/software-engineering-library/SKILL.md:29 — used here
- `references/data-intensive-applications.md` — .claude/skills/software-engineering-library/SKILL.md:30 — used here
- `references/release-it.md` — .claude/skills/software-engineering-library/SKILL.md:31 — used here
- `Task To Reference Router` — .claude/skills/software-engineering-library/SKILL.md:33 — defined here
- `programming-advisor` — .claude/skills/software-engineering-library/SKILL.md:64 — used here
- `code-qualities-assessment` — .claude/skills/software-engineering-library/SKILL.md:65 — used here
- `cva-analysis` — .claude/skills/software-engineering-library/SKILL.md:66 — used here

## Structure
- `# Software Engineering Library` — .claude/skills/software-engineering-library/SKILL.md:8
- `## Triggers` — .claude/skills/software-engineering-library/SKILL.md:14
- `## When Each Reference Applies` — .claude/skills/software-engineering-library/SKILL.md:22
- `## Task To Reference Router` — .claude/skills/software-engineering-library/SKILL.md:33
- `## Process` — .claude/skills/software-engineering-library/SKILL.md:45
- `## Verification` — .claude/skills/software-engineering-library/SKILL.md:54
- `## Anti-Patterns` — .claude/skills/software-engineering-library/SKILL.md:61
- `## Extension Points` — .claude/skills/software-engineering-library/SKILL.md:68

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Establishes a disciplined two-reference maximum threshold per decision to prevent context window saturation while preserving book-depth guidance.
- Coordinates boundaries with other analysis skills: delegates build-vs-buy analysis to `programming-advisor`, single-file maintainability scoring to `code-qualities-assessment`, and variability analysis to `cva-analysis`.
- Supports multi-language codebases (.py, .cs, .ts, .tsx, .js, .ps1, .sql) and service design documents.

## Context cost
4840 bytes (~1210 tokens). Routing references when selectively opened add between 11 KB and 20 KB per book reference.
