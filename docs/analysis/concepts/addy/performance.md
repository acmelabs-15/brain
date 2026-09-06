---
package: addy
name: Performance
slug: performance
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
  - {path: commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Performance

## Definition — verbatim
> "No N+1 queries? No unbounded ops? (Use performance-optimization skill)" — .gemini/commands/review.toml:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/review.toml | 12 | defines | Fifth review axis checking N+1 queries, unbounded operations, allocations |
| agents/code-reviewer.md | 40 | defines | Reviewer persona section detailing performance evaluation criteria |
| commands/review.toml | 12 | defines | Fifth review axis checking N+1 queries, unbounded operations, allocations |
| external/code-review-and-quality.md | 5 | references | Web catalog summary listing performance among review dimensions |
| external/performance-optimization.md | 5 | references | Web catalog overview of application performance optimization |
| skills/code-review-and-quality/SKILL.md | 77 | defines | Skill section detailing Axis 5 performance checks and profiling rules |

## Consumes
Code diff, database query patterns, loops, allocations, and data-access structures.

## Produces
Performance defect notices, algorithmic complexity warnings, N+1 query flags, and delegation to `performance-optimization`.

## When applied
Evaluated as Axis 5 during code review on all pull requests.

## Sub-concepts
none

## Part of
five-axis-code-review

## Implementation status
clean

## Design notes
`Performance` review inspects changes for computational and data-access bottlenecks before code reaches production. It specifically detects N+1 database queries, unbounded in-memory data processing, unnecessary heap allocations, and missing indexes, ensuring changes do not cause latency regressions or resource exhaustion.
