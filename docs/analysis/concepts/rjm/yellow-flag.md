---
package: rjm
name: YELLOW FLAG
slug: yellow-flag
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

# YELLOW FLAG

## Definition — verbatim
> "recommendation = \"YELLOW FLAG - Proceed with caution, mitigate risks\"" — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 200 | defined here | Recommendation status assigned when vendor score is between 50 and 70 points. |

## Consumes
Vendor scoring result between 50.0 and 70.0 points.

## Produces
Cautionary recommendation verdict requiring documented risk mitigations prior to procurement.

## When applied
Triggered by score_vendor.py when vendor evaluation indicates notable risks that do not warrant outright disqualification.

## Sub-concepts
none

## Part of
vendorscore

## Implementation status
clean

## Design notes
YELLOW FLAG is a threshold gate verdict in vendor due diligence. Assigned when a candidate scores between 50 and 70, it allows progression only under explicit risk mitigation covenants (such as escrow arrangements, SLA penalty clauses, or architectural decoupling), balancing pragmatic sourcing against operational hazard.
