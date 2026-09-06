---
package: addy
name: Quality Gate Pipeline
slug: quality-gate-pipeline
kind: gate
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

# Quality Gate Pipeline

## Definition — verbatim
> "Every change goes through these gates before merge:" — skills/ci-cd-and-automation/SKILL.md:26

## Also called — verbatim
`The Quality Gate Pipeline` — skills/ci-cd-and-automation/SKILL.md:24

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 24 | defined here | Section heading introducing the sequential automated quality gate pipeline before merge |

## Consumes
Pull request or committed code changes, test suites, linter and type checker configurations.

## Produces
Automated verification verdict determining if a pull request is ready for review and merge.

## When applied
Triggered automatically upon pull request creation or update against main.

## Sub-concepts
lint-check, type-check, e2e, security-audit, bundle-size

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, the Quality Gate Pipeline is the automated enforcement mechanism ensuring no change reaches production without passing a sequential ladder of checks: lint, type check, unit tests, build, integration, optional e2e, security audit, and bundle size. It operationalizes the 'Shift Left' principle by preventing defects from advancing to human review or production.
