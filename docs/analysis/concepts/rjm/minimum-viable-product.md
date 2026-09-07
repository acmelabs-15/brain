---
package: rjm
name: minimum viable product
slug: minimum-viable-product
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

# minimum viable product

## Definition — verbatim
> "3. Build the minimum viable product. The MVP is the smallest thing that produces" — .claude/skills/business-strategy/references/lean-startup.md:41

## Also called — verbatim
`MVP` — .claude/skills/business-strategy/references/lean-startup.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/lean-startup.md | 41 | defined here | Defined as the smallest build that produces a real signal from real customers to test assumptions. |

## Consumes
Leap-of-faith assumption and pre-set pass/fail experimental evaluation thresholds.

## Produces
Smallest viable testing vehicle (landing page, prototype, concierge execution, or single feature) for user testing.

## When applied
"Build only what the experiment needs." — .claude/skills/business-strategy/references/lean-startup.md:43

## Sub-concepts
concierge

## Part of
build-measure-learn, lean-startup

## Implementation status
clean

## Design notes
The minimum viable product is the simplest artifact or process that allows a team to gather validated learning about customers with the least effort. In rjm's lifecycle, it serves to constrain initial engineering scope exclusively to what is required to test critical hypotheses.
