---
package: rjm
name: Effort
slug: effort
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Effort

## Definition — verbatim
> "Effort: person-months" — .claude/agents/roadmap.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 38 | defined here | Defined as the denominator in the RICE scoring formula measured in person-months. |

## Consumes
Architectural scope, engineering task estimates, and team resource allocation.

## Produces
A person-month cost estimate dividing total feature impact in RICE calculations.

## When applied
Applied when triaging candidate roadmap initiatives and calculating return on engineering investment.

## Sub-concepts
none

## Part of
- rice-scoring

## Implementation status
clean

## Design notes
Effort represents the engineering resource cost in person-months within rjm's RICE prioritization framework. Acting as the denominator in RICE scoring, it balances anticipated user and business value against delivery investment, penalizing oversized initiatives and favoring high-impact, low-cost iterations.
