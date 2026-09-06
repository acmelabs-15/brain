---
package: addy
name: Readability
slug: readability
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
  - {path: commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Readability

## Definition — verbatim
> "Clear names? Straightforward logic? Well-organized?" — .gemini/commands/review.toml:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/review.toml | 9 | defines | Second review axis checking naming, clarity, simplicity |
| agents/code-reviewer.md | 20 | defines | Reviewer persona section detailing readability checklist |
| commands/review.toml | 9 | defines | Second review axis checking naming, clarity, simplicity |
| external/code-review-and-quality.md | 5 | references | Web catalog summary listing readability among review dimensions |

## Consumes
Code diff, identifier conventions, and surrounding module context.

## Produces
Feedback and recommendations on variable naming, control flow simplification, and cognitive load reduction.

## When applied
Evaluated as Axis 2 during code review on every code submission.

## Sub-concepts
none

## Part of
five-axis-code-review

## Implementation status
clean

## Design notes
`Readability` evaluates how easily human engineers and subsequent AI agents can comprehend and maintain modified code. By scrutinizing naming clarity, nesting depth, cognitive complexity, and unnecessary indirection, it keeps code straightforward and prevents technical debt accumulation.
