---
package: rjm
name: Numerical headline claim
slug: numerical-headline-claim
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Numerical headline claim

## Definition — verbatim
> "- **Numerical headline claim**: "over 1000 X", "N+ stars", "X% of teams", "$Y in spend", "Z% accuracy improvement". Round numbers ending in 100, 1000, or 10000 are usually rhetorical rounding, often inflated above the real, precise, non-round count." — .claude/skills/ai-agents-external-claims/SKILL.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 38 | defines | Defines the trigger condition for external assertions featuring rounded or headline numbers. |

## Consumes
External claims containing rounded numbers, star counts, budget estimates, or percentage gains.

## Produces
Triage classification requiring lookup of the underlying exact registry count or benchmark metric.

## When applied
Activated whenever an incoming claim contains prominent numerical or statistical assertions.

## Sub-concepts
round-number-tells

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
A claim-verification trigger condition identifying claims with prominent round numbers or percentage gains. Because these are often rhetorical roundings inflated above exact values, they must be validated against host APIs or raw benchmark datasets before entry into repository artifacts.
