---
package: addy
name: Optional
slug: optional
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Optional

## Definition — verbatim
> "**Optional** — Worth considering but not required (a simpler design, a useful refactor)" — agents/code-reviewer.md:55

## Also called — verbatim
> "| **Optional:** / **Consider:** | Suggestion | Worth considering but not required |" — skills/code-review-and-quality/SKILL.md:186

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/code-reviewer.md | 55 | defines | Defines non-blocking review feedback for alternative designs or opportunistic refactoring |
| external/code-review-and-quality.md | 5 | references | References review feedback classification tiers in external documentation |
| skills/code-review-and-quality/SKILL.md | 186 | defines | Categorizes Optional/Consider suggestions in the comment prefix convention table |

## Consumes
Suggestions identified during code review that improve code quality without impacting correctness.

## Produces
Advisory feedback that the author may adopt or decline without blocking merge.

## When applied
Applied during code review for beneficial ideas that are not strictly required for approval.

## Sub-concepts
none

## Part of
review-framework, senior-code-reviewer

## Implementation status
defects: doc-drift, orphan

## Design notes
Separates non-blocking architectural suggestions from mandatory fixes, preserving author velocity while sharing constructive recommendations.
