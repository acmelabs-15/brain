---
package: rjm
name: RED FLAG
slug: red-flag
kind: gate
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

# RED FLAG

## Definition — verbatim
> "recommendation = \"RED FLAG - High risk, consider alternatives\"" — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 202 | defined here | Recommendation status assigned when vendor score is below 50 points, indicating high risk. |

## Consumes
Vendor evaluation score below 50.0 points or critical disqualifying factors.

## Produces
Rejection verdict advising exploration of alternative vendors or custom development.

## When applied
Emitted by score_vendor.py when vendor viability scores are deficient.

## Sub-concepts
none

## Part of
vendorscore

## Implementation status
clean

## Design notes
RED FLAG is a hard rejection gate in vendor evaluation. By disqualifying products scoring below 50 points, it protects the organization from adopting high-risk dependencies that present immediate failure vectors such as financial insolvency, unmaintained software, or critical architectural deficiencies.
