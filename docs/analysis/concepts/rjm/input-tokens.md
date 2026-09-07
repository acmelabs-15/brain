---
package: rjm
name: Input Tokens
slug: input-tokens
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

# Input Tokens

## Definition — verbatim
(used, not defined)

> "1. **Input Tokens**: Your prompts, code context, error messages" — .claude/skills/programming-advisor/references/token-estimates.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/token-estimates.md | 7 | defined here | List item defining input tokens as prompts, context, and error messages that contribute to generation cost. |

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
`Input Tokens` is a cost factor definition describing prompt and context token consumption rather than an independent lifecycle concept.
