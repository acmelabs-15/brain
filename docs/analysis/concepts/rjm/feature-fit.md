---
package: rjm
name: feature fit
slug: feature-fit
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

# feature fit

## Definition — verbatim
> "Score vendor stability, pricing, feature fit, and support quality." — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 3 | defined here | Dimension evaluated in vendor scoring measuring the percentage of requirements fulfilled without custom modification. |

## Consumes
System functional specifications, architectural interface requirements, and vendor product feature lists.

## Produces
Feature fit rating (0-25 points) and gap analysis flags.

## When applied
Applied when assessing candidate off-the-shelf software against required system capabilities.

## Sub-concepts
none

## Part of
vendorscore

## Implementation status
clean

## Design notes
feature fit measures how completely an external vendor solution satisfies required system functionality out of the box. High feature fit minimizes the need for complex internal adapter layers or compensatory custom coding, ensuring the purchased solution genuinely accelerates delivery.
