---
package: rjm
name: Counter-Clockwise
slug: counter-clockwise
kind: pattern
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

# Counter-Clockwise

## Definition — verbatim
> "## Disruption (Counter-Clockwise)" — .claude/skills/cynefin-classifier/references/domain-transitions.md:49

## Also called — verbatim
`Disruption` — .claude/skills/cynefin-classifier/references/domain-transitions.md:49

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 49 | defines | The counter-clockwise direction representing disruption, assumption invalidation, and escalation toward chaos. |

## Consumes
Contextual shifts, dependency breaks, unexpected scaling bottlenecks, and black swan events.

## Produces
Invalidation of existing procedures, escalation to higher cognitive approaches, and crisis response.

## When applied
Observed when changing external or internal context breaks previously working models.

## Sub-concepts
clear-to-complicated, complicated-to-complex, any-domain-to-chaotic

## Part of
domain-transitions

## Implementation status
clean

## Design notes
`Counter-Clockwise` describes the disruptive trajectory in Cynefin where environmental turbulence invalidates existing best practices, forcing organizations to de-automate and re-engage higher cognitive modes of analysis and experimentation.
