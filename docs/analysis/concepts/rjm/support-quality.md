---
package: rjm
name: support quality
slug: support-quality
kind: technique
package_phase: rjm:Evaluate
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_vendor.py, sha256: 061027f393d2466c4024469e1804be4c726a1aa7e66475037f83ae4fd8eee157}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# support quality

## Definition — verbatim
> "Score vendor stability, pricing, feature fit, and support quality." — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 3 | defined here | Dimension evaluated in vendor scoring assessing SLA commitments, technical documentation, and support responsiveness. |

## Consumes
Vendor SLA terms, support tier specifications, ticket resolution benchmarks, and documentation resources.

## Produces
Support quality score (0-25 points) and operational hazard flags.

## When applied
Evaluated during vendor due diligence when assessing enterprise readiness for production dependencies.

## Sub-concepts
none

## Part of
vendorscore

## Implementation status
clean

## Design notes
support quality examines the operational responsiveness, escalation pathways, and documentation rigor provided by external vendors. It ensures that critical dependencies are backed by enterprise-grade support, preventing engineering teams from becoming paralyzed during production incidents.
