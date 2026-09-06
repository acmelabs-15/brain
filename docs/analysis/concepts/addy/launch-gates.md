---
package: addy
name: launch gates
slug: launch-gates
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/shipping-and-launch.json, sha256: 951445b40249b014e0daab37343fdbd18e9bc54fd3b0b8f30d7260fda6931436}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# launch gates

## Definition — verbatim
(used, not defined)
> "Authority pressure does not override failed launch gates" — evals/cases/shipping-and-launch.json:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/shipping-and-launch.json | 50 | applies | Used in an evaluation expectation asserting that authority pressure cannot override failed release verification gates. |

## Consumes
Passing test suites, verification evidence, and operational checklist sign-offs.

## Produces
A formal go/no-go deployment decision or explicit list of blocking criteria.

## When applied
Applied during the shipping and launch phase when assessing whether a release candidate meets production standards.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
In Addy's lifecycle, launch gates establish objective operational criteria that resist managerial or authority pressure to deploy unverified code.
