---
package: rjm
name: Buy-vs-build decision
slug: buy-vs-build-decision
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Buy-vs-build decision

## Definition — verbatim
> "- **Output schema**: Include a `Buy-vs-build decision` section recording: core-vs-context classification, alternatives evaluated, recommendation (build/buy/partner/defer), and rationale." — .claude/commands/spec.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/spec.md | 154 | defined here | Mandatory PRD section documenting core-vs-context evaluation and commercial/open-source alternative analysis. |

## Consumes
Capability requirements, market alternative evaluations, and core-vs-context strategic classifications.

## Produces
A documented strategic recommendation (build, buy, partner, or defer) with supporting trade-off rationale.

## When applied
Required in the output PRD for any specification introducing a new system capability.

## Sub-concepts
none

## Part of
spec

## Implementation status
defects: doc-drift

## Design notes
The Buy-vs-build decision section forces spec authors to justify in-house development before engineering resources are committed. By mandating an explicit core-vs-context evaluation and review of existing alternatives, it prevents teams from reinventing commoditized capabilities and keeps engineering focused on core competitive differentiation.
