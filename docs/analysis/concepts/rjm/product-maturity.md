---
package: rjm
name: product maturity
slug: product-maturity
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

# product maturity

## Definition — verbatim
> "Score product maturity (0-25 points)." — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 68 | defined here | Scoring function evaluating product age, enterprise customer base, uptime SLAs, and release cadence. |

## Consumes
Product release history, active enterprise customer counts, public uptime statistics, and changelog velocity.

## Produces
Product maturity score (0-25 points) and flags identifying unproven or experimental offerings.

## When applied
Executed within score_vendor.py when evaluating third-party solutions.

## Sub-concepts
none

## Part of
vendorscore

## Implementation status
clean

## Design notes
product maturity evaluates whether a vendor product has attained enterprise reliability and stability. Scoring product lifespan, customer volume, and verified uptime, it filters out brittle, rapidly churning, or untested software before it can compromise production systems.
