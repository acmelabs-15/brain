---
package: addy
name: acknowledged risks
slug: acknowledged-risks
kind: artifact
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

# acknowledged risks

## Definition — verbatim
(used, not defined)
> "A pre-launch checklist result with blockers, acknowledged risks, rollback plan, and a go or no-go verdict" — evals/cases/shipping-and-launch.json:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/shipping-and-launch.json | 32 | used here | Specified in expected evaluation output as part of the formal launch assessment. |

## Consumes
Identified non-critical issues, performance edge cases, or partial feature limitations.

## Produces
A documented registry of known risks accepted by stakeholders prior to deployment.

## When applied
Compiled during pre-launch assessment for items that do not warrant halting the release.

## Sub-concepts
none

## Part of
go-or-no-go-verdict, shipping-and-launch

## Implementation status
clean

## Design notes
`acknowledged risks` provides a transparent, formal mechanism for accepting known limitations or residual uncertainties that do not constitute fatal blockers. Documenting them explicitly ensures that engineering and product leadership share conscious ownership of potential failure modes before launch. Without an acknowledged risks record, teams either delay releases seeking impossible perfection or deploy with unstated, unmanaged liabilities.
