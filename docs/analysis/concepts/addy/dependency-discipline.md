---
package: addy
name: Dependency Discipline
slug: dependency-discipline
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Dependency Discipline

## Definition — verbatim
> "Part of code review is dependency review:" — skills/code-review-and-quality/SKILL.md:279-281

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 279 | defined here | Sets rules for vetting newly introduced third-party dependencies and safely managing package upgrades. |

## Consumes
Proposed additions or updates to `package.json`, lockfile diffs, vulnerability reports (`npm audit`), and changelogs.

## Produces
Vetted dependency selections, isolated single-package version upgrade PRs, and committed lockfile diff validations.

## When applied
Whenever evaluating new dependencies, updating existing libraries, or auditing supply-chain risk.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
A governance discipline recognizing that every dependency is an enduring liability, enforcing strict pre-addition vetting (existing stack alternatives, bundle impact, maintenance status, license) and requiring isolated single-package bumps verified by test suites and lockfile diffs.
