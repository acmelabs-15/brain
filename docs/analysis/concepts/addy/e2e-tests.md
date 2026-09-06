---
package: addy
name: E2E Tests
slug: e2e-tests
kind: technique
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

# E2E Tests

## Definition — verbatim
> "### E2E Tests" — skills/ci-cd-and-automation/SKILL.md:139

## Also called — verbatim
`E2E` — skills/ci-cd-and-automation/SKILL.md:43

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 139 | defined here | Dedicated CI job configuration for executing headless browser test suites and capturing failure artifacts |

## Consumes
Production build artifacts, Playwright browser binaries, and end-to-end test specs.

## Produces
E2E test run reports and uploaded test artifact archives (playwright-report/) upon test failure.

## When applied
In CI pipelines to validate full frontend-to-backend workflows before staging or production release.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, E2E Tests specifies the CI workflow configuration for running Playwright browser automation tests. It includes installing browser binaries with OS dependencies, compiling the app, executing end-to-end tests, and automatically preserving diagnostic reports as workflow artifacts when failures occur.
