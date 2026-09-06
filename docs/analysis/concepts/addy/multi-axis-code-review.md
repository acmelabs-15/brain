---
package: addy
name: multi-axis code review
slug: multi-axis-code-review
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# multi-axis code review

## Definition — verbatim
> "Conducts multi-axis code review across correctness, readability, architecture, security, and performance." — external/code-review-and-quality.md:5

## Also called — verbatim
> "The Five-Axis Review" — skills/code-review-and-quality/SKILL.md:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 5 | used here | Summarizes the review methodology evaluating code across five specific dimensions |

## Consumes
Code modifications, diffs, unit/integration test results, architectural requirements.

## Produces
Categorized findings and constructive feedback spanning correctness, readability, architecture, security, and performance.

## When applied
Applied before merging any pull request, evaluating changes written by oneself, another agent, or a human.

## Sub-concepts
`change-sizing`, `splitting-strategies`

## Part of
`code-review-and-quality`

## Implementation status
clean

## Design notes
Multi-axis code review ensures code is judged comprehensively across five core software engineering dimensions rather than solely checking whether tests pass, ensuring overall codebase health improves with every change.
