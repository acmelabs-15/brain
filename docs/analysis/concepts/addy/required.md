---
package: addy
name: Required
slug: required
kind: gate
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Required

## Definition — verbatim
> "**Required** — Must address before merge (missing test, wrong abstraction, poor error handling)" — agents/code-reviewer.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/code-reviewer.md | 53 | defines | Defines the blocking review severity tier requiring mandatory resolution before merge |
| external/code-review-and-quality.md | 5 | references | Mentions required review standards in external catalog summary |

## Consumes
Review findings identified by code review personas.

## Produces
Merge blocker requiring author remediation.

## When applied
Applied to review findings that represent missing tests, improper abstractions, or flawed error handling.

## Sub-concepts
none

## Part of
review-framework, senior-code-reviewer

## Implementation status
defects: doc-drift, orphan

## Design notes
Represents an enforceable review gate level that blocks merging until critical defects, absent tests, or architectural violations are corrected.
