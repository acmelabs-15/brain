---
package: rjm
name: Harmful
slug: harmful
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Harmful

## Definition — verbatim
(used, not defined)

> "Growing, Mature, Proficient, Inert, or Harmful from age, intercept count," — .claude/skills/ai-agents-research-frontier/SKILL.md:222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 222 | used here | Listed as the negative maturity tier for guards causing excessive false positives or blocking valid work. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 171 | used here | Cited among the six guard maturity tiers evaluated from telemetry events. |

## Consumes
Telemetry lines recording frequent false positive blocks, high manual override frequencies, and developer disruption.

## Produces
Immediate deprecation notices, rollbacks, or deactivations removing damaging guard rules from CI and hook pipelines.

## When applied
When guard telemetry indicates that a detector disproportionately blocks valid developer operations rather than preventing genuine defects.

## Sub-concepts
none

## Part of
maturity-tier

## Implementation status
not-implemented

## Design notes
Harmful represents the failure state in rjm's guard maturity hierarchy. When an automated guard generates high false-positive rates, introduces intolerable latency, or repeatedly blocks valid changes, it is classified as Harmful and targeted for immediate disabling or deletion, ensuring governance safeguards do not degrade engineering velocity.
