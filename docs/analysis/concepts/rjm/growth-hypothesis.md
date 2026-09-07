---
package: rjm
name: growth hypothesis
slug: growth-hypothesis
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/lean-startup.md, sha256: 2dced9a8a71a571271b621d0be2e74299d328252264c6f3cd9f9f81ffa7c91bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# growth hypothesis

## Definition — verbatim
> "growth hypothesis (will adoption spread)." — .claude/skills/business-strategy/references/lean-startup.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/lean-startup.md | 37 | defined here | Core hypothesis testing the mechanism by which new users will discover and adopt the offering. |

## Consumes
A validated value hypothesis and preliminary customer acquisition assumptions.

## Produces
Falsifiable predictions and quantifiable acquisition thresholds governing viral, paid, or organic spread.

## When applied
Tested once value is confirmed to determine whether customer adoption scales sustainably.

## Sub-concepts
none

## Part of
leap-of-faith-assumption, lean-startup

## Implementation status
clean

## Design notes
The growth hypothesis articulates how new customers will discover and adopt a product, testing whether customer acquisition occurs organically, virally, or economically. In rjm, it guarantees that marketing and sales assumptions are held to empirical proof standards.
