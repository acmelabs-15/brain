---
package: addy
name: Security
slug: security
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
  - {path: commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Security

## Definition — verbatim
> "Input validated? Secrets safe? Auth checked? (Use security-and-hardening skill)" — .gemini/commands/review.toml:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/review.toml | 11 | defines | Fourth review axis checking input validation, secrets, auth |
| agents/code-reviewer.md | 33 | defines | Reviewer persona section detailing security evaluation criteria |
| commands/review.toml | 11 | defines | Fourth review axis checking input validation, secrets, auth |
| external/code-review-and-quality.md | 5 | references | Web catalog summary listing security among review dimensions |
| external/security-and-hardening.md | 5 | references | Web catalog overview of security hardening practices |
| skills/code-review-and-quality/SKILL.md | 64 | defines | Skill section detailing Axis 4 security checks and delegation |

## Consumes
Code diff, external input channels, authentication/authorization boundaries, secrets references.

## Produces
Vulnerability alerts, threat boundary warnings, and delegation to `security-and-hardening` for deep analysis.

## When applied
Evaluated as Axis 4 during code review on all pull requests.

## Sub-concepts
owasp-top-10

## Part of
five-axis-code-review

## Implementation status
clean

## Design notes
`Security` provides baseline defensive verification during standard code reviews. It checks that user input is validated and sanitized, authorization checks cannot be bypassed, secrets are not committed, and OWASP Top 10 risks are mitigated, while delegating comprehensive threat modeling to the specialized `security-and-hardening` skill.
