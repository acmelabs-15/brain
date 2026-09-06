---
package: addy
name: Architecture
slug: architecture
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
  - {path: commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Architecture

## Definition — verbatim
> "Follows existing patterns? Clean boundaries? Right abstraction level?" — .gemini/commands/review.toml:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/review.toml | 10 | defines | Third review axis checking patterns, boundaries, abstraction level |
| agents/code-reviewer.md | 26 | defines | Reviewer persona section detailing architecture and design checks |
| commands/review.toml | 10 | defines | Third review axis checking patterns, boundaries, abstraction level |
| external/code-review-and-quality.md | 5 | references | Web catalog summary listing architecture among review dimensions |
| skills/code-review-and-quality/SKILL.md | 51 | defines | Skill section detailing Axis 3 architectural rules and boundaries |

## Consumes
Code diff, system component boundaries, domain models, and established codebase patterns.

## Produces
Critique on interface boundaries, coupling, cohesion, and abstraction appropriateness.

## When applied
Evaluated as Axis 3 during code review on all proposed changes.

## Sub-concepts
none

## Part of
five-axis-code-review

## Implementation status
clean

## Design notes
`Architecture` review focuses on long-term system health by assessing separation of concerns, single responsibility, consistency with established patterns, and appropriate levels of abstraction. It prevents architectural rot, unintended tight coupling between subsystems, and leaking of internal implementation details.
