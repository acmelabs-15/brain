---
package: addy
name: Review Framework
slug: review-framework
kind: checklist
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

# Review Framework

## Definition — verbatim
> "## Review Framework" — agents/code-reviewer.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/code-reviewer.md | 10 | defines | Section heading detailing the five-dimensional framework for evaluating code changes |

## Consumes
Proposed code diffs, requirements, and test artifacts.

## Produces
Structured assessment across correctness, readability, edge cases, maintainability, and test adequacy.

## When applied
Applied during every code review executed by the `code-reviewer` persona.

## Sub-concepts
required, optional, nit

## Part of
senior-code-reviewer

## Implementation status
clean

## Design notes
The Review Framework establishes a five-dimensional evaluation checklist (Correctness, Readability, Architecture, Performance, Security) to ensure reviews assess structural quality beyond superficial linting.
