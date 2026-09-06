---
package: addy
name: E2E
slug: e2e
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

# E2E

## Definition — verbatim
> "│   E2E (optional) │  Playwright/Cypress" — skills/ci-cd-and-automation/SKILL.md:43

## Also called — verbatim
`E2E Tests` — skills/ci-cd-and-automation/SKILL.md:139

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 43 | defined here | Optional quality gate running full end-to-end browser workflows via Playwright or Cypress |

## Consumes
Built web application, browser test harness (Playwright or Cypress), and end-to-end user scenario specs.

## Produces
Browser test execution results, failure traces, and Playwright report artifacts.

## When applied
Run in CI following unit and integration tests, optionally gated on changed paths or PR labels.

## Sub-concepts
none

## Part of
quality-gate-pipeline

## Implementation status
clean

## Design notes
In addy, E2E represents the end-to-end browser testing gate within the automated quality pipeline. Unlike unit or integration tests that isolate modules, E2E exercises complete user journeys across frontend rendering, API calls, and backend data stores using headless browsers.
