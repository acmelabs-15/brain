---
package: addy
name: Verification Story
slug: verification-story
kind: artifact
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

# Verification Story

## Definition — verbatim
> "### Verification Story" — agents/code-reviewer.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/code-reviewer.md | 83 | defines | Defines the required verification story section within the review output template |

## Consumes
Test review results, build verification status, and security inspection records.

## Produces
Explicit report section documenting evidence of testing, build integrity, and critical path checks.

## When applied
Included in every completed code review report.

## Sub-concepts
none

## Part of
review-output-template, senior-code-reviewer

## Implementation status
clean

## Design notes
The Verification Story requires reviewers to explicitly document the concrete steps taken to test and verify changes, preventing reviews from passing code without confirmed empirical evidence.
