---
package: addy
name: Correctness
slug: correctness
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
  - {path: commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Correctness

## Definition — verbatim
> "Does it match the spec? Edge cases handled? Tests adequate?" — .gemini/commands/review.toml:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/review.toml | 8 | defines | First review axis checking spec compliance, edge cases, tests |
| agents/code-reviewer.md | 14 | defines | Code reviewer persona section detailing correctness evaluation criteria |
| commands/review.toml | 8 | defines | First review axis checking spec compliance, edge cases, tests |
| external/code-review-and-quality.md | 5 | references | Web catalog summary listing correctness among review dimensions |
| external/source-driven-development.md | 5 | references | Web catalog note on framework/library correctness triggering skill |
| references/definition-of-done.md | 21 | applies | DoD checklist item requiring correctness verification |
| skills/code-review-and-quality/SKILL.md | 26 | defines | Skill section defining Axis 1 checks, common errors, and verification methods |

## Consumes
Code diff, feature requirements/spec, test execution results, and boundary conditions.

## Produces
Findings on functional flaws, logic bugs, off-by-one errors, and missing test coverage.

## When applied
Evaluated as Axis 1 during code review on every pull request or diff.

## Sub-concepts
none

## Part of
five-axis-code-review

## Implementation status
clean

## Design notes
`Correctness` is the foundational axis of code review in Addy's lifecycle. It answers whether the implementation faithfully satisfies the specification without behavioral flaws, focusing on boundary values, null/undefined handling, off-by-one errors, and regression test adequacy. Flaws found in this axis typically carry Critical or Important severity.
