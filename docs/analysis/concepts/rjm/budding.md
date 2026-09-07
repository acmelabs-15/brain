---
package: rjm
name: Budding
slug: budding
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

# Budding

## Definition — verbatim
(used, not defined)

> "classified guards as Budding, Growing, Mature, Proficient, Inert, or Harmful from age, intercept count, and fitness, with explicit prune/promote actions." — .claude/skills/ai-agents-research-frontier/SKILL.md:220-223

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 221 | used here | Cited as the initial guard maturity tier in the telemetry-based classifier lifecycle. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 171 | used here | Listed as the entry maturity tier for evaluating guard effectiveness and survival. |

## Consumes
Initial guard deployment telemetry lines (`EVENT=`) recording early intercepts and age metrics.

## Produces
Baseline telemetry evaluation determining whether a newly introduced guard graduates to Growing or remains unproven.

## When applied
During automated guard lifecycle analysis to classify newly created enforcement guards based on initial intercept counts and fitness.

## Sub-concepts
none

## Part of
maturity-tier

## Implementation status
not-implemented

## Design notes
Budding designates the earliest lifecycle maturity tier for repository enforcement guards and detectors in rjm. Under the historical telemetry aggregation pipeline (retired under ADR-084), new guards entered at the Budding stage where their firing fitness and intercept accuracy were monitored before being promoted to higher maturity tiers or pruned if found inert.
