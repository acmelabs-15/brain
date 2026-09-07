---
package: rjm
name: bare rolling alias
slug: bare-rolling-alias
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# bare rolling alias

## Definition — verbatim
> "A bare rolling alias that prices below the harness default, with a `model-rationale:` line." — docs/SKILL-AUTHORING.md:102-103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/SKILL-AUTHORING.md | 102 | defined here | Defined as the only allowable non-default model configuration form in skill frontmatter. |

## Consumes
ADR-080 model selection policy and platform `model_tiers` pricing mappings.

## Produces
Cost-conscious model override configuration (`haiku`) with required `model-rationale`.

## When applied
> "where the cheaper tier suffices (ADR-080 rule 3)." — docs/SKILL-AUTHORING.md:110

## Sub-concepts
none

## Part of
skill-authoring-guide

## Implementation status
clean

## Design notes
A bare rolling alias (specifically `haiku`) represents the only permitted model pin in rjm skill frontmatter. By strictly forbidding pinned version IDs and higher pricing tiers, rjm optimizes inference costs for mechanical or routing tasks while preventing version drift.
