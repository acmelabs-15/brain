---
package: addy
name: Nit
slug: nit
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Nit

## Definition — verbatim
> "**Nit** — Minor and optional; the author may ignore (formatting, naming, style preferences)" — agents/code-reviewer.md:57

## Also called — verbatim
> "| **Nit:** | Minor, optional | Author may ignore — formatting, style preferences |" — skills/code-review-and-quality/SKILL.md:185

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/code-reviewer.md | 57 | defines | Defines the trivial review feedback tier for minor styling and naming preferences |
| external/code-review-and-quality.md | 5 | references | References comment tagging conventions in external review docs |
| skills/code-review-and-quality/SKILL.md | 185 | defines | Defines Nit prefix in the code review feedback prefix table |

## Consumes
Minor stylistic, formatting, or naming observations made during review.

## Produces
Explicitly optional comment prefix that grants the author full discretion to ignore.

## When applied
Applied to minor polish suggestions that do not affect functionality or maintainability.

## Sub-concepts
none

## Part of
review-framework, senior-code-reviewer

## Implementation status
defects: doc-drift, orphan

## Design notes
Prevents bike-shedding in pull request discussions by explicitly tagging minor stylistic preferences so authors know they can safely proceed without debating trivial details.
