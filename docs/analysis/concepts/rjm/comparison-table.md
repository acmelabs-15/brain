---
package: rjm
name: Comparison Table
slug: comparison-table
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Comparison Table

## Definition — verbatim
> "### Step 4: Generate Comparison Table" — .claude/skills/programming-advisor/SKILL.md:84

## Also called — verbatim
`decision table` — .claude/skills/programming-advisor/SKILL.md:86
`Build vs Buy Comparison` — .claude/skills/programming-advisor/SKILL.md:287

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 84 | defined here | Prescribes generating a decision table comparing internal reuse, libraries, SaaS, and custom builds. |

## Consumes
User requirements, results of internal prior-art search, and external solution candidates.

## Produces
A structured comparison table detailing Option, Type, Cost, Setup Time, Maintenance, Token Burn, and Verdict.

## When applied
Applied during Step 4 of the programming advisor process before recommending build, buy, or reuse options.

## Sub-concepts
none

## Part of
programming-advisor

## Implementation status
clean

## Design notes
A structured decision artifact in programming-advisor that arrays implementation candidates (internal leverage/extend, external packages/SaaS, and custom vibe coding) side by side against key operational metrics (setup time, ongoing maintenance, token burn, financial cost). It forces objective comparison across all viable options before code is written.
