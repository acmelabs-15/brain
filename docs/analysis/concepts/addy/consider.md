---
package: addy
name: Consider
slug: consider
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Consider

## Definition — verbatim
> "| **Optional:** / **Consider:** | Suggestion | Worth considering but not required |" — skills/code-review-and-quality/SKILL.md:186

## Also called — verbatim
`Optional` — skills/code-review-and-quality/SKILL.md:186

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 186 | defined here | Review finding severity label indicating optional suggestions that authors are not required to adopt |

## Consumes
Reviewer ideas, optimizations, or alternative patterns that are non-blocking.

## Produces
Non-blocking feedback comment prefixed with 'Consider:' or 'Optional:'.

## When applied
When offering constructive suggestions during code review that improve code but should not block merge.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
In addy, Consider is a severity prefix in the review comment taxonomy that designates optional suggestions. Explicitly tagging non-essential ideas prevents authors from mistaking suggestions for mandatory blockers, saving development time while still allowing valuable ideas to be shared.
