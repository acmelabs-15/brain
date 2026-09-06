---
package: addy
name: surviving doubts
slug: surviving-doubts
kind: artifact
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/doubt-driven-development.json, sha256: c92769c979e81afa55f9f937eff6a952e60599792e59d8a38ed8e68d7b7abeba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# surviving doubts

## Definition — verbatim
(used, not defined)
> "The verdict distinguishes verified claims from surviving doubts" — evals/cases/doubt-driven-development.json:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/doubt-driven-development.json | 38 | used here | Behavioral expectation requiring the verdict to clearly distinguish verified claims from surviving doubts. |

## Consumes
Adversarial review findings that could not be verified, reconciled, or disproven.

## Produces
An explicit list of unresolved doubts, highlighted risks, and residual uncertainties attached to the verdict.

## When applied
During the reconciliation step of doubt-driven development when assessing remaining unverified claims.

## Sub-concepts
none

## Part of
- doubt-driven-development
- go-or-stop-verdict

## Implementation status
clean

## Design notes
Surviving doubts represent the residual risks and valid criticisms that remain unrefuted after an adversarial review. Requiring verdicts to explicitly distinguish verified assertions from surviving doubts prevents unresolved risks from being hidden or treated as verified truth.
