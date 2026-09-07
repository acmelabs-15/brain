---
package: rjm
name: Hidden Token Costs
slug: hidden-token-costs
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

# Hidden Token Costs

## Definition — verbatim
(used, not defined)

> "## Hidden Token Costs" — .claude/skills/programming-advisor/references/token-estimates.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/token-estimates.md | 71 | defined here | Section heading enumerating overlooked token overheads such as debugging, refactoring, documentation, and test authoring. |

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
`Hidden Token Costs` is a section heading in `token-estimates.md` cataloging unbudgeted token consumption sources rather than an independent lifecycle concept.
