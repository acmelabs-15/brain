---
package: rjm
name: MVP
slug: mvp
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/business-strategy/references/lean-startup.md, sha256: 2dced9a8a71a571271b621d0be2e74299d328252264c6f3cd9f9f81ffa7c91bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# MVP

## Definition — verbatim
> "3. Build the minimum viable product. The MVP is the smallest thing that produces" — .claude/skills/business-strategy/references/lean-startup.md:41

## Also called — verbatim
`minimum viable product` — .claude/skills/business-strategy/references/lean-startup.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/lean-startup.md | 41 | defined here | Defined as the smallest build generating authentic signals from prospective customers to test hypotheses. |
| .claude/skills/business-strategy/SKILL.md | 47 | used here | Highlighted in decision tree routing as the core mechanism to deploy when demand has not been proven. |

## Consumes
A clear leap-of-faith hypothesis and pre-defined pass/fail evaluation thresholds.

## Produces
Empirical customer response data validating or refuting core business assumptions.

## When applied
When facing uncertainty regarding whether customers want a product, testing assumptions before full development.

## Sub-concepts
concierge

## Part of
build-measure-learn, lean-startup

## Implementation status
defects: missing-path

## Design notes
MVP is the widely adopted acronym for minimum viable product, shorthand for the simplest prototype or service iteration deployed to extract customer validation. In rjm's business router, it represents the primary counter-measure when founders build products before proving customer demand.
