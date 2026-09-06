---
package: addy
name: no-go
slug: no-go
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

# no-go

## Definition — verbatim
(used, not defined)
> "An evidence-based no-go or hold decision that identifies the required rollback, monitoring, and test gates" — evals/cases/shipping-and-launch.json:45

## Also called — verbatim
"hold decision" — evals/cases/shipping-and-launch.json:45

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/shipping-and-launch.json | 45 | used here | Defined in evaluation expected output as the correct verdict when launch gates fail. |

## Consumes
Unresolved blockers, failing test gates, or missing operational/rollback controls.

## Produces
A release rejection or hold decision accompanied by explicit remediation criteria for future release.

## When applied
Triggered automatically whenever any mandatory pre-launch gate fails.

## Sub-concepts
none

## Part of
go-or-no-go-verdict, shipping-and-launch

## Implementation status
clean

## Design notes
A `no-go` decision protects production stability by halting deployment when critical quality, monitoring, or rollback standards are unmet. Addy requires that a no-go verdict be evidence-based and paired with a constructive path forward, detailing the exact blockers that must be resolved to achieve a future GO. Without an enforced no-go gate, software is shipped despite known risks, shifting the burden of failure onto end users and on-call engineers.
