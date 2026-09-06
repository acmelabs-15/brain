---
package: addy
name: Critical
slug: critical
kind: name-only
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
  - {path: commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Critical

## Definition — verbatim
(used, not defined)
> "Categorize findings as Critical, Important, or Suggestion." — .gemini/commands/review.toml:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/review.toml | 14 | defines | Merge-blocking severity tier in /review command |
| agents/code-reviewer.md | 51 | defines | Merge-blocking severity level for code reviewer persona |
| agents/security-auditor.md | 61 | defines | Critical security severity tier blocking release immediately |
| agents/web-performance-auditor.md | 118 | defines | Critical performance severity tier for direct Core Web Vital failures |
| commands/review.toml | 14 | defines | Merge-blocking severity tier in /review command |
| external/code-review-and-quality.md | 5 | references | Web catalog summary citing Critical as a review severity label |
| skills/code-review-and-quality/SKILL.md | 184 | defines | Checklist severity prefix designating merge-blocking defects |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`Critical` is a severity classification label designating defects that block merge or deployment (such as security vulnerabilities, data loss risks, or broken functionality), rather than an independent lifecycle concept.
