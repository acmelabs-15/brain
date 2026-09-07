---
package: rjm
name: financial stability
slug: financial-stability
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

# financial stability

## Definition — verbatim
> "Score financial stability (0-25 points)." — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 26 | defined here | Scoring function evaluating vendor funding runway, profitability, revenue growth, and debt health. |

## Consumes
Balance sheet metrics, funding rounds, cash runway in months, and revenue indicators.

## Produces
Financial stability score (0-25 points) and warning flags for runway under 12 months or debt defaults.

## When applied
Executed within score_vendor.py during vendor screening.

## Sub-concepts
none

## Part of
vendorscore, vendor-stability

## Implementation status
clean

## Design notes
financial stability is a targeted evaluation technique measuring vendor capitalization, solvency, and revenue durability. It assigns up to 25 points based on cash runway and profitability, flagging companies with inadequate reserves to prevent adoption of tools that could suddenly cease operations.
