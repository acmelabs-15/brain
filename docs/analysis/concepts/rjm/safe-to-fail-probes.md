---
package: rjm
name: safe-to-fail probes
slug: safe-to-fail-probes
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/domain-transitions.md, sha256: 1823ee0f7fa344196f64b2288320ec3430976256773d7d559f0f12b61b845eec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# safe-to-fail probes

## Definition — verbatim
(used, not defined)

> "- [ ] Design safe-to-fail probes" — .claude/skills/cynefin-classifier/references/domain-transitions.md:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 175 | used here | Action checklist item executed when transitioning from Chaotic to Complex to explore system dynamics without catastrophic consequences. |

## Consumes
Stabilized incident state, identified unknowns, observability instrumentation, blast-radius boundaries.

## Produces
Empirical feedback, emergent system behavior observations, dampening or amplification decisions.

## When applied
When entering the Complex domain after stabilizing a Chaotic crisis, or when operating in Complex spaces where outcomes cannot be predicted upfront.

## Sub-concepts
none

## Part of
cynefin-classifier

## Implementation status
clean

## Design notes
Safe-to-fail probes are low-blast-radius experiments deployed in complex software domains where cause-and-effect relationships are non-linear and only visible in retrospect. Instead of executing large-scale speculative architectures or risky unilateral changes, teams deploy multiple diverse probes designed to fail harmlessly, illuminating system dynamics and enabling data-driven amplification or dampening.
