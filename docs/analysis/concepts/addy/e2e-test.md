---
package: addy
name: E2E test
slug: e2e-test
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# E2E test

## Definition — verbatim
> "Is it a critical user flow that must work end-to-end? → E2E test (large) — limit these to critical paths" — skills/test-driven-development/SKILL.md:184-185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 185 | defined here | Decision guide rule selecting an E2E test (large size) for critical user flows, recommending limiting them to critical paths. |

## Consumes
Fully integrated application stack, browser runtime or full service dependencies, critical user flow specifications.

## Produces
End-to-end verification report ensuring that complete user journeys function properly from entry point to backend storage.

## When applied
Applied strictly to critical user journeys and essential business paths (~5% of the overall test pyramid).

## Sub-concepts
large

## Part of
test-pyramid, test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
An E2E test represents the top tier of Addy's test pyramid (~5% of tests), classified as a Large test size that verifies complete end-to-end user flows across the full stack while being strictly limited to critical paths to prevent flaky, slow execution suites.
