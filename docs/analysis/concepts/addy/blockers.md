---
package: addy
name: blockers
slug: blockers
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

# blockers

## Definition — verbatim
(used, not defined)
> "A pre-launch checklist result with blockers, acknowledged risks, rollback plan, and a go or no-go verdict" — evals/cases/shipping-and-launch.json:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/shipping-and-launch.json | 32 | used here | Listed in expected output as an essential component of the pre-launch checklist results. |

## Consumes
Failed quality checks, missing rollback procedures, unhandled critical errors, or unverified gates.

## Produces
A prioritized list of fatal defects that strictly prevent a GO verdict.

## When applied
Cataloged during pre-launch audit whenever mandatory release criteria are unmet.

## Sub-concepts
none

## Part of
go-or-no-go-verdict, shipping-and-launch

## Implementation status
clean

## Design notes
`blockers` are failed conditions or missing safeguards of such severity that shipping to production is prohibited regardless of schedule pressure. By explicitly segregating blockers from acknowledged non-fatal risks, Addy prevents critical safety violations (e.g., missing rollback paths or failing end-to-end tests) from being negotiated away. Without an explicit blockers concept, teams conflate fatal defects with minor issues, leading to dangerous deployment compromises.
