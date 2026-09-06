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
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/programming-advisor/references/token-estimates.md

## Purpose — required, verbatim
> "Token Burn Estimation Guide" — .claude/skills/programming-advisor/references/token-estimates.md:1

## Design intent — required
Provides an empirical basis for calculating the token and iteration costs of "vibe coding" (custom development by LLM). By factoring in lines of code, iteration multipliers (2x to 5x for edge cases, integrations, UI polish), and hidden overhead (debugging, refactoring, tests, code review fixes), it counters the illusion that LLM-generated custom code is "free" and guides developers on when vibe coding is efficient (glue code, prototypes, domain logic) versus expensive (scope creep, auth, payments, state management).

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/token-estimates.md — .claude/skills/programming-advisor/SKILL.md:72

## Concepts named — required, verbatim
- `Token Burn Estimation Guide` — .claude/skills/programming-advisor/references/token-estimates.md:1 — defined here
- `Token Economics` — .claude/skills/programming-advisor/references/token-estimates.md:3 — defined here
- `Token Cost Factors` — .claude/skills/programming-advisor/references/token-estimates.md:5 — defined here
- `Input Tokens` — .claude/skills/programming-advisor/references/token-estimates.md:7 — defined here
- `Output Tokens` — .claude/skills/programming-advisor/references/token-estimates.md:8 — defined here
- `Iteration Multiplier` — .claude/skills/programming-advisor/references/token-estimates.md:9 — defined here
- `Estimation Formula` — .claude/skills/programming-advisor/references/token-estimates.md:11 — defined here
- `Total Tokens` — .claude/skills/programming-advisor/references/token-estimates.md:14 — defined here
- `Detailed Estimates by Category` — .claude/skills/programming-advisor/references/token-estimates.md:19 — defined here
- `Scripts & Utilities` — .claude/skills/programming-advisor/references/token-estimates.md:21 — defined here
- `Frontend Components` — .claude/skills/programming-advisor/references/token-estimates.md:31 — defined here
- `Backend Services` — .claude/skills/programming-advisor/references/token-estimates.md:41 — defined here
- `DevOps & Infrastructure` — .claude/skills/programming-advisor/references/token-estimates.md:51 — defined here
- `Iteration Multipliers` — .claude/skills/programming-advisor/references/token-estimates.md:60 — defined here
- `Hidden Token Costs` — .claude/skills/programming-advisor/references/token-estimates.md:71 — defined here
- `Cost Translation (Approximate)` — .claude/skills/programming-advisor/references/token-estimates.md:81 — defined here
- `Red Flags: When Vibe Coding Gets Expensive` — .claude/skills/programming-advisor/references/token-estimates.md:93 — defined here
- `When Vibe Coding Makes Sense` — .claude/skills/programming-advisor/references/token-estimates.md:106 — defined here

## Structure
# Token Burn Estimation Guide — .claude/skills/programming-advisor/references/token-estimates.md:1
## Understanding Token Economics — .claude/skills/programming-advisor/references/token-estimates.md:3
### Token Cost Factors — .claude/skills/programming-advisor/references/token-estimates.md:5
### Estimation Formula — .claude/skills/programming-advisor/references/token-estimates.md:11
## Detailed Estimates by Category — .claude/skills/programming-advisor/references/token-estimates.md:19
### Scripts & Utilities — .claude/skills/programming-advisor/references/token-estimates.md:21
### Frontend Components — .claude/skills/programming-advisor/references/token-estimates.md:31
### Backend Services — .claude/skills/programming-advisor/references/token-estimates.md:41
### DevOps & Infrastructure — .claude/skills/programming-advisor/references/token-estimates.md:51
## Iteration Multipliers — .claude/skills/programming-advisor/references/token-estimates.md:60
## Hidden Token Costs — .claude/skills/programming-advisor/references/token-estimates.md:71
## Cost Translation (Approximate) — .claude/skills/programming-advisor/references/token-estimates.md:81
## Red Flags: When Vibe Coding Gets Expensive — .claude/skills/programming-advisor/references/token-estimates.md:93
## When Vibe Coding Makes Sense — .claude/skills/programming-advisor/references/token-estimates.md:106

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Establishes the rule of thumb `LOC × 50-100 tokens` for simple code and `LOC × 100-200` for complex logic, and articulates the formula `Total Tokens ≈ (Initial Prompt + Code Context) × Iterations + Output Tokens × Iterations`.

## Context cost
4054 bytes, approximately 1015 tokens.
