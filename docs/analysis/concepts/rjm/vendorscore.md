---
package: rjm
name: VendorScore
slug: vendorscore
kind: artifact
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

# VendorScore

## Definition — verbatim
> "class VendorScore:" — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 18 | defined here | Dataclass encapsulating aggregated vendor evaluation scores, category subtotals, risk flags, and recommendation status. |

## Consumes
Evaluated vendor data across financial stability, product maturity, pricing structure, and support quality.

## Produces
Structured evaluation record including numerical score, warning flags, and recommendation verdict (PASS, YELLOW FLAG, RED FLAG).

## When applied
Instantiated and returned upon completion of the vendor evaluation script.

## Sub-concepts
vendor-stability, pricing, feature-fit, support-quality, financial-stability, product-maturity

## Part of
buy-vs-build-framework

## Implementation status
clean

## Design notes
VendorScore is the structured dataclass representing the complete analytical assessment of an external vendor. By combining individual sub-scores across financial health, technical maturity, pricing, and support into a single validated result, it provides a transparent and automated foundation for vendor qualification.
