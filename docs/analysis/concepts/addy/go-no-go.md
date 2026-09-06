---
package: addy
name: "go/no-go"
slug: go-no-go
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# go/no-go

## Definition — verbatim
(used, not defined)

> "Run via /ship to fan out review personas, then merge into a go/no-go." — external/shipping-and-launch.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/shipping-and-launch.md | 1 | defined here | Defined as the synthesized decision gate combining review persona evaluations into a final deployment verdict. |

## Consumes
Synthesized findings from review personas, pre-launch checklist status, and CI verification results.

## Produces
Binary go/no-go decision authorizing production rollout or blocking deployment for remediation.

## When applied
Evaluated at the conclusion of the `/ship` command immediately before deployment execution.

## Sub-concepts
none

## Part of
shipping-and-launch

## Implementation status
defects: doc-drift

## Design notes
The final release gate in Addy's Ship phase. It merges multi-persona review findings, checklist verifications, and automated tests into an explicit decision to proceed with deployment or abort.
