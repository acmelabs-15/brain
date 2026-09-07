---
package: rjm
name: Second-Order Effect Analysis
slug: second-order-effect-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Second-Order Effect Analysis

## Definition — verbatim
> "For each proposed decision, trace effects through at least two levels:" — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 47 | defined here | Subsection defining the 3-tier tracing schema from proposed action through downstream and ripple effects. |

## Consumes
Proposed architectural decisions or system changes with stated first-order intents.

## Produces
A multi-tiered causal chain mapping immediate effects to downstream consequences and indirect systemic ripples.

## When applied
During Challenge (Steps 5-6) when testing whether an apparently beneficial fix causes worse problems elsewhere in the system.

## Sub-concepts
none

## Part of
strategic-thinking-systems-thinking

## Implementation status
defects: missing-path

## Design notes
A structured reasoning technique that compels evaluators to look beyond immediate, intended outcomes by tracing secondary downstream impacts and tertiary ripple effects across interrelated system components.
