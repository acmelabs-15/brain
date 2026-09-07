---
package: rjm
name: Iteration Multiplier
slug: iteration-multiplier
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/token-estimates.md, sha256: 96553695fca4e95210b4891b11a1a8b3062a1c4ba27ef63f8d2fb02aa903671a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Iteration Multiplier

## Definition — verbatim
(used, not defined)

> "3. **Iteration Multiplier**: Rarely works first try - multiply by 2-5x" — .claude/skills/programming-advisor/references/token-estimates.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/token-estimates.md | 9 | defined here | List item defining the iteration multiplier scaling factor (2-5x) for multi-turn development attempts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`Iteration Multiplier` is an estimation scaling factor used to adjust token predictions for multi-turn development cycles rather than an independent lifecycle concept.
