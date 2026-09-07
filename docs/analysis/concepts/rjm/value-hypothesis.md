---
package: rjm
name: value hypothesis
slug: value-hypothesis
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

# value hypothesis

## Definition — verbatim
> "the idea. Usually it is the value hypothesis (do customers get value) or the" — .claude/skills/business-strategy/references/lean-startup.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/lean-startup.md | 36 | defined here | Core hypothesis testing whether users actually experience meaningful value when using the product. |

## Consumes
Product value proposition, target user persona, and observed user pain points.

## Produces
Falsifiable proposition and quantifiable retention/engagement thresholds to test real value delivery.

## When applied
Formulated during initial hypothesis definition to confirm that the product solves an authentic problem before optimizing growth.

## Sub-concepts
none

## Part of
leap-of-faith-assumption, lean-startup

## Implementation status
clean

## Design notes
The value hypothesis tests whether a product or service genuinely delivers value to the customer once they begin using it. In rjm's strategy taxonomy, validating the value hypothesis takes precedence over growth experiments because scaling a product that fails to create value is fatal.
