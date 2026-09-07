---
package: rjm
name: Token Burn
slug: token-burn
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
  - {path: .claude/skills/programming-advisor/references/token-estimates.md, sha256: 96553695fca4e95210b4891b11a1a8b3062a1c4ba27ef63f8d2fb02aa903671a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Token Burn

## Definition — verbatim
(used, not defined)

> "# Token Burn Estimation Guide" — .claude/skills/programming-advisor/references/token-estimates.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/token-estimates.md | 1 | defined here | Document title heading framing guidelines for calculating token consumption during custom code generation. |
| .claude/skills/programming-advisor/SKILL.md | 79 | defined here | Table row header defining token burn estimation bands across low, medium, and high task complexity. |

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
`Token Burn` is a document title and cost estimation metric denoting LLM token consumption rather than an independent lifecycle concept.
