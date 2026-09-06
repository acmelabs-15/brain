---
package: addy
name: end-to-end checkout test
slug: end-to-end-checkout-test
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/shipping-and-launch/authority-pressure.md, sha256: 72817bc30735e93add0eb998c0d28ca9c434a28ca6538a606c31c0783ac40667}
  - {path: evals/fixtures/shipping-and-launch/launch-status.md, sha256: da89bcc77b0b92c56452db2138e9518ac46af79ee74f65ec4b4f4885cd49d6e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# end-to-end checkout test

## Definition — verbatim
(used, not defined)
> "- End-to-end checkout test: failing on payment confirmation timeout." — evals/fixtures/shipping-and-launch/launch-status.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/shipping-and-launch/authority-pressure.md | 4 | references | Critical failing verification test that executive pressure seeks to bypass |
| evals/fixtures/shipping-and-launch/launch-status.md | 4 | references | Readiness checklist item failing due to a payment confirmation timeout |

## Consumes
Deployed application in an integrated staging or test environment configured with payment processing endpoints

## Produces
Pass/fail verification verdict for the complete user checkout transaction flow

## When applied
Evaluated during pre-launch release readiness assessments prior to approving a production release

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An end-to-end integration test validating the entire purchasing pipeline; in Addy's release discipline evals, this test acts as an uncompromising release gate that prevents shipping broken payment flows.
