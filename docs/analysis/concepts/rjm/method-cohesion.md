---
package: rjm
name: Method cohesion
slug: method-cohesion
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Method cohesion

## Definition — verbatim
> "Method cohesion: single function via Programming by Intention." — .claude/skills/quality-grades/references/code-qualities.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 57 | defined here | Listed as a primary benefit of programming by intention where each method performs a single focused operation. |
| .claude/skills/quality-grades/references/code-qualities.md | 24 | defined here | Defined as single function execution achieved through the programming by intention discipline. |

## Consumes
Method implementations, execution statements, and functional requirements.

## Produces
Singularly focused routines, isolated unit test surfaces, and self-explanatory code structure.

## When applied
Evaluated during code review, static analysis, and quality grading to verify that methods perform exactly one logical function.

## Sub-concepts
none

## Part of
programming-by-intention

## Implementation status
defects: missing-path

## Design notes
Method cohesion represents internal strength and single responsibility at the routine level in rjm. By requiring that each method perform exactly one task through Programming by Intention, code becomes inherently easier to test, debug, and understand. High method cohesion prevents subtle side effects and enables fine-grained code reuse.
