---
package: rjm
path: .claude/skills/software-engineering-library/SKILL.md
type: skill
bytes: 4840
unit: inv-rjm-171
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/software-engineering-library/SKILL.md

## Purpose — required, verbatim
> "This skill routes software engineering design work to deeper book-derived references without loading them on every turn." — .claude/skills/software-engineering-library/SKILL.md:10

## Design intent — required
Acts as an on-demand context router that selectively gates access to deep, specialized software engineering book references based on empirical code-risk evidence and task taxonomy. It prevents context window bloat in agent workflows: instead of unconditionally loading 110KB+ across eight extensive book references on every turn, the baseline environment relies on lightweight rules (`code-quality`, `pragmatic-programmer`, `unified-software-engineering`), opening at most one or two book references (`clean-architecture.md`, `philosophy-of-software-design.md`, `domain-driven-design.md`, `enterprise-patterns.md`, `refactoring.md`, `working-with-legacy-code.md`, `data-intensive-applications.md`, `release-it.md`) only when specific architectural boundaries, legacy refactoring, or distributed resilience requirements are actively encountered. Explicit anti-patterns route build-vs-buy decisions to `programming-advisor`, single-file maintainability scoring to `code-qualities-assessment`, and Commonality Variability Analysis to `cva-analysis`. Without this router, agent orchestration would suffer either from chronic context exhaustion caused by always-on book references or from lack of rigorous engineering guidance when resolving complex architectural trade-offs.

## Phase — required
cross-phase

## Inputs — required
- Task description or discovered code-risk triggers (e.g. low test coverage, old file age, external API calls, queues, retries, boundary changes, schema evolution).
- Target code files and service design docs across `.py`, `.cs`, `.ts`, `.tsx`, `.js`, `.ps1`, `.sql`.

## Outputs — required
- Selection and loading of the minimal matching book reference(s) from `references/`.
- Technical design recommendations and decisions grounded in the chosen book reference, tied to files, user impact, and validation evidence.

## Invokes — required
- reference clean-architecture.md — .claude/skills/software-engineering-library/SKILL.md:24
- reference philosophy-of-software-design.md — .claude/skills/software-engineering-library/SKILL.md:25
- reference domain-driven-design.md — .claude/skills/software-engineering-library/SKILL.md:26
- reference enterprise-patterns.md — .claude/skills/software-engineering-library/SKILL.md:27
- reference refactoring.md — .claude/skills/software-engineering-library/SKILL.md:28
- reference working-with-legacy-code.md — .claude/skills/software-engineering-library/SKILL.md:29
- reference data-intensive-applications.md — .claude/skills/software-engineering-library/SKILL.md:30
- reference release-it.md — .claude/skills/software-engineering-library/SKILL.md:31

## Invoked by — required
- skill autoplan — .claude/skills/autoplan/SKILL.md:127
- skill analyze — .claude/skills/analyze/SKILL.md:119
- doc unified-software-engineering.md — .claude/rules/unified-software-engineering.md:152
- reference reliability.md — .claude/skills/review/references/reliability.md:53
- reference architect.md — .claude/skills/review/references/architect.md:52
- reference spec-prior-art-schema.md — .claude/skills/spec-generator/references/spec-prior-art-schema.md:138
- skill requirements-interview — .claude/skills/requirements-interview/SKILL.md:114

## Concepts named — required, verbatim
- `architecture review` — .claude/skills/software-engineering-library/SKILL.md:16 — used here
- `domain modeling bounded context` — .claude/skills/software-engineering-library/SKILL.md:17 — used here
- `refactoring code smells legacy code low test coverage old file characterization tests` — .claude/skills/software-engineering-library/SKILL.md:18 — used here
- `external API calls queues retries timeouts circuit breaker bulkhead` — .claude/skills/software-engineering-library/SKILL.md:19 — used here
- `transactions event ordering data consistency schema evolution module interface shape` — .claude/skills/software-engineering-library/SKILL.md:20 — used here
- `When Each Reference Applies` — .claude/skills/software-engineering-library/SKILL.md:22 — defined here
- `Task To Reference Router` — .claude/skills/software-engineering-library/SKILL.md:33 — defined here
- `Architecture / layer boundaries` — .claude/skills/software-engineering-library/SKILL.md:37 — used here
- `Domain modeling / bounded contexts` — .claude/skills/software-engineering-library/SKILL.md:38 — used here
- `Persistence / repository / unit-of-work` — .claude/skills/software-engineering-library/SKILL.md:39 — used here
- `Refactoring / code smells` — .claude/skills/software-engineering-library/SKILL.md:40 — used here
- `Legacy code / seams / characterization tests` — .claude/skills/software-engineering-library/SKILL.md:41 — used here
- `Data systems / consistency / schema evolution` — .claude/skills/software-engineering-library/SKILL.md:42 — used here
- `Production resilience / timeouts / bulkheads` — .claude/skills/software-engineering-library/SKILL.md:43 — used here
- `Process` — .claude/skills/software-engineering-library/SKILL.md:45 — defined here
- `Verification` — .claude/skills/software-engineering-library/SKILL.md:54 — defined here
- `Anti-Patterns` — .claude/skills/software-engineering-library/SKILL.md:61 — defined here
- `Extension Points` — .claude/skills/software-engineering-library/SKILL.md:68 — defined here

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
- Enforces progressive disclosure and context budget discipline: "open a reference here only when the task needs that specific book's depth (start with one, add a second only when it changes a decision)" (line 12).
- Explicit verification checklist item: "No more than two references were opened unless the task spans more than two book domains" (line 57).
- Clear negative boundary routing: build-vs-buy redirects to `programming-advisor`, single-file maintainability scoring redirects to `code-qualities-assessment`, and Commonality Variability Analysis redirects to `cva-analysis` (lines 64-66).
- Adheres to router-extension architecture: "Add a new reference only when it represents a distinct book-depth decision surface. Keep the skill body as the router. Put long material in `references/`" (lines 70-71).

## Context cost
4840 bytes (~1210 tokens). Routing to a single reference adds between 11327 bytes (enterprise-patterns.md) and 19299 bytes (domain-driven-design.md). Total bundled library context across SKILL.md and all 8 references is 114870 bytes (~28718 tokens), illustrating significant context savings from on-demand routing.
