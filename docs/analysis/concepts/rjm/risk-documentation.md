---
package: rjm
name: Risk Documentation
slug: risk-documentation
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/milestone-planner.md, sha256: 3b318f4cec16f9f23b32fa66f9fe490789eaece08c39e1e5b9a6ae1c37af762d}
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Risk Documentation

## Definition — verbatim
> "For every milestone, identify the top 2-3 risks. For each risk:" — .claude/agents/milestone-planner.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 96 | defined here | Protocol requiring identification and documentation of top 2-3 risks, triggers, mitigations, and blast radius per milestone. |
| templates/agents/milestone-planner.shared.md | 99 | defined here | Shared template section outlining risk documentation requirements per milestone. |

## Consumes
Milestone technical architecture, external dependencies, and operational uncertainties.

## Produces
Structured risk assessment entries detailing specific failure modes, likelihood, impact, concrete mitigations, observable trigger conditions, and blast radius.

## When applied
Applied for every defined milestone during epic planning.

## Sub-concepts
none

## Part of
milestone-planner

## Implementation status
clean

## Design notes
Risk Documentation mandates structured risk analysis for each milestone rather than treating risk management as an afterthought. By requiring explicit failure modes, actionable trigger conditions, and pre-planned mitigations, it enables autonomous agents and human developers to anticipate pitfalls before code is written.
