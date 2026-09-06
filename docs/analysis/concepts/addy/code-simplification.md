---
package: addy
name: code-simplification
slug: code-simplification
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/code-simplify.toml, sha256: 5216ae4dc14077d1ac7f9b1d201972955909302eb7c0b63682e057f86a49c745}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/code-simplification.json, sha256: 42c97aefd638fc08eb275c393ef5bcfaac056ac12cb2767fbb1db9fc94b6c84c}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# code-simplification

## Definition — verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .gemini/commands/code-simplify.toml:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/code-simplify.toml | 4 | used here | Invoked by /code-simplify slash command to reduce complexity while preserving behavior. |
| evals/cases/code-simplification.json | 2 | used here | Evaluation test case for code simplification skill. |
| external/code-review-and-quality.md | 12 | used here | Linked as related skill under Review phase in external documentation. |
| external/performance-optimization.md | 12 | used here | Linked as related skill under Review phase in external documentation. |
| external/security-and-hardening.md | 12 | used here | Linked as related skill under Review phase in external documentation. |
| README.md | 269 | used here | Catalog entry citing Chesterton's fence and rule of 500 for cutting complexity. |
| references/definition-of-done.md | 35 | used here | Referenced as providing depth for reducing complexity without altering behavior. |

## Consumes
Working, tested code that exhibits unnecessary complexity, deep nesting, or duplication.

## Produces
Refactored, simplified code verified against passing test suites.

## When applied
During the Review phase or when code is functional but hard to read or maintain.

## Sub-concepts
guard-clauses, extracted-helpers

## Part of
review

## Implementation status
clean

## Design notes
A refactoring technique that systematically reduces cognitive complexity, nesting, and dead code while strictly maintaining existing behavior and test coverage.
