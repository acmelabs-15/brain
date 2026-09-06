---
package: addy
name: Senior Code Reviewer
slug: senior-code-reviewer
kind: role
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Senior Code Reviewer

## Definition — verbatim
> "You are an experienced Staff Engineer conducting a thorough code review. Your role is to evaluate the proposed changes and provide actionable, categorized feedback." — agents/code-reviewer.md:8

## Also called — verbatim
> "# Senior Code Reviewer" — agents/code-reviewer.md:6

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/code-reviewer.md | 6 | defines | Defines the persona role title, perspective, and review mandate |

## Consumes
Code diffs, commit messages, and verification results.

## Produces
Categorized review summary and actionable feedback adhering to the review output template.

## When applied
Invoked during `/review` or `/ship` to evaluate proposed code changes before merge.

## Sub-concepts
review-framework, required, optional, nit, verification-story

## Part of
personas, parallel-fan-out-with-a-merge-step

## Implementation status
clean

## Design notes
The Senior Code Reviewer persona establishes an objective, senior-engineer standard for pull request reviews, evaluating correctness, readability, architecture, and verification stories.
