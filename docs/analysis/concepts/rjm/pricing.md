---
package: rjm
name: pricing
slug: pricing
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

# pricing

## Definition — verbatim
> "Score vendor stability, pricing, feature fit, and support quality." — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 3 | defined here | Core dimension evaluated by the vendor scoring script to quantify contract costs, licensing tiers, and model clarity. |

## Consumes
Vendor pricing schedules, licensing structures, tier limits, and projected usage growth metrics.

## Produces
Numerical pricing score (0-25 points) and cost-risk warning flags.

## When applied
Applied when analyzing commercial proposals during the procurement evaluation stage.

## Sub-concepts
none

## Part of
vendorscore

## Implementation status
clean

## Design notes
pricing evaluates the cost model, predictability, and contract terms of commercial software vendors. It scrutinizes seat-based, usage-based, and enterprise pricing tiers to ensure long-term budget predictability and prevent predatory escalation as adoption scales.
