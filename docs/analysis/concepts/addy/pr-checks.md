---
package: addy
name: PR Checks
slug: pr-checks
kind: checklist
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# PR Checks

## Definition — verbatim
> "- **Required reviews:** At least 1 approval before merge" — skills/ci-cd-and-automation/SKILL.md:304

## Also called — verbatim
`PR Checks` — skills/ci-cd-and-automation/SKILL.md:302

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 302 | defined here | Repository protection checklist covering review approvals, status checks, and branch protection |

## Consumes
GitHub repository branch protection settings and pull request status checks.

## Produces
Automated merge gates enforcing peer review approval, passing CI status checks, and linear history.

## When applied
Configured in repository settings for main and release branches; evaluated on every pull request.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, PR Checks define the branch protection policies required before any change merges into main. Requiring at least one approval, mandatory passing status checks, prohibition of force pushes, and auto-merge automation, these checks protect repository stability.
