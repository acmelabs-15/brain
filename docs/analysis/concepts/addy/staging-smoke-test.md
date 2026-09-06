---
package: addy
name: Staging smoke test
slug: staging-smoke-test
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/shipping-and-launch/launch-status.md, sha256: da89bcc77b0b92c56452db2138e9518ac46af79ee74f65ec4b4f4885cd49d6e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Staging smoke test

## Definition — verbatim
(used, not defined)
> "- Staging smoke test: not run since the last payment-provider change." — evals/fixtures/shipping-and-launch/launch-status.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/shipping-and-launch/launch-status.md | 5 | references | Checklist verification item noted as not run since the latest payment integration change |

## Consumes
Release candidate build deployed to a staging environment mirroring production dependencies

## Produces
Smoke test execution report establishing baseline functional operability in staging

## When applied
Executed on staging after changes to critical dependencies or integrations prior to production rollout

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A high-level integration check run against staging to ensure core application flows remain operational after changes; an outdated or skipped staging smoke test represents an unverified dependency state that blocks production release.
