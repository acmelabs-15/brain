---
package: rjm
name: vendor stability
slug: vendor-stability
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

# vendor stability

## Definition — verbatim
> "Score vendor stability, pricing, feature fit, and support quality." — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 3 | defined here | Evaluated as one of four key assessment dimensions in the vendor scoring script docstring. |

## Consumes
Vendor operational history, market capitalization or funding rounds, company age, and leadership stability data.

## Produces
Quantitative stability rating and risk flags highlighting corporate vulnerability or volatility.

## When applied
Evaluated during third-party vendor due diligence prior to purchasing commercial software.

## Sub-concepts
financial-stability

## Part of
vendorscore

## Implementation status
clean

## Design notes
vendor stability is a due diligence evaluation technique that assesses the viability and longevity of commercial vendors. It protects engineering investments from being stranded on third-party dependencies that face sudden bankruptcy, abrupt corporate restructuring, or unexpected service sunsetting.
