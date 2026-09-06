---
package: rjm
path: .claude/skills/programming-advisor/references/token-estimates.md
type: reference
bytes: 4054
unit: inv-rjm-138
in_scope_via: .claude/skills/programming-advisor/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/token-estimates.md, sha256: 96553695fca4e95210b4891b11a1a8b3062a1c4ba27ef63f8d2fb02aa903671a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/programming-advisor/references/token-estimates.md

## Purpose — required, verbatim
> "Token Burn Estimation Guide" — .claude/skills/programming-advisor/references/token-estimates.md:1 (no explicit purpose statement)

## Design intent — required
Defines empirical formulas and category benchmarks for calculating LLM token burn and development costs during AI code generation ("vibe coding"). Maps task categories (scripts/utilities, frontend components, backend services, DevOps/infra) to lines-of-code estimates and optimistic vs realistic token ranges. Introduces iteration multipliers (1x-5x), hidden token overheads (debugging, refactoring, documentation, testing), and clear red flags identifying when vibe coding becomes economically inefficient compared to using existing libraries or services.

## Phase — required
rjm:spec

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill programming-advisor — .claude/skills/programming-advisor/SKILL.md:72

## Concepts named — required, verbatim
- `Token Burn` — .claude/skills/programming-advisor/references/token-estimates.md:1 — defined here
- `Token Economics` — .claude/skills/programming-advisor/references/token-estimates.md:3 — defined here
- `Token Cost Factors` — .claude/skills/programming-advisor/references/token-estimates.md:5 — defined here
- `Input Tokens` — .claude/skills/programming-advisor/references/token-estimates.md:7 — defined here
- `Output Tokens` — .claude/skills/programming-advisor/references/token-estimates.md:8 — defined here
- `Iteration Multiplier` — .claude/skills/programming-advisor/references/token-estimates.md:9 — defined here
- `Estimation Formula` — .claude/skills/programming-advisor/references/token-estimates.md:11 — defined here
- `Detailed Estimates by Category` — .claude/skills/programming-advisor/references/token-estimates.md:19 — defined here
- `Scripts & Utilities` — .claude/skills/programming-advisor/references/token-estimates.md:21 — defined here
- `Frontend Components` — .claude/skills/programming-advisor/references/token-estimates.md:31 — defined here
- `Backend Services` — .claude/skills/programming-advisor/references/token-estimates.md:41 — defined here
- `DevOps & Infrastructure` — .claude/skills/programming-advisor/references/token-estimates.md:51 — defined here
- `Hidden Token Costs` — .claude/skills/programming-advisor/references/token-estimates.md:71 — defined here
- `Cost Translation` — .claude/skills/programming-advisor/references/token-estimates.md:81 — defined here
- `Vibe Coding` — .claude/skills/programming-advisor/references/token-estimates.md:93 — used here

## Structure
- `## Understanding Token Economics` — .claude/skills/programming-advisor/references/token-estimates.md:3
- `### Token Cost Factors` — .claude/skills/programming-advisor/references/token-estimates.md:5
- `### Estimation Formula` — .claude/skills/programming-advisor/references/token-estimates.md:11
- `## Detailed Estimates by Category` — .claude/skills/programming-advisor/references/token-estimates.md:19
- `### Scripts & Utilities` — .claude/skills/programming-advisor/references/token-estimates.md:21
- `### Frontend Components` — .claude/skills/programming-advisor/references/token-estimates.md:31
- `### Backend Services` — .claude/skills/programming-advisor/references/token-estimates.md:41
- `### DevOps & Infrastructure` — .claude/skills/programming-advisor/references/token-estimates.md:51
- `## Iteration Multipliers` — .claude/skills/programming-advisor/references/token-estimates.md:60
- `## Hidden Token Costs` — .claude/skills/programming-advisor/references/token-estimates.md:71
- `## Cost Translation (Approximate)` — .claude/skills/programming-advisor/references/token-estimates.md:81
- `## Red Flags: When Vibe Coding Gets Expensive` — .claude/skills/programming-advisor/references/token-estimates.md:93
- `## When Vibe Coding Makes Sense` — .claude/skills/programming-advisor/references/token-estimates.md:106

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides concrete heuristic estimation rules: `LOC * 50-100 tokens` for simple code and `LOC * 100-200 tokens` for complex logic, multiplied by 2-5x for realistic iterations.
- Highlights unbudgeted hidden token sinks: debugging sessions (10-50K tokens per bug hunt), refactoring (50-100% of original code cost), test authoring (50-100%), and review remediations (10-30%).
- Contrasts negative indicators (scope creep, complex state, multi-tenant architecture) with viable vibe coding use cases (glue code, one-off transformations, rapid prototyping).

## Context cost
4054 bytes (~1010 tokens). Loads no external files.
