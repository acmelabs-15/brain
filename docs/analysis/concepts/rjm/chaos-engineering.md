---
package: rjm
name: Chaos Engineering
slug: chaos-engineering
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/cynefin-classifier/references/domain-transitions.md, sha256: 1823ee0f7fa344196f64b2288320ec3430976256773d7d559f0f12b61b845eec}
  - {path: .claude/skills/observability/references/three-pillars-reference.md, sha256: 63be0738d54cfdc95c4c4190a3f4bf85375759061d8b4d32deed110f28d5526b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Chaos Engineering

## Definition — verbatim
(used, not defined)

> "| Chaos Engineering | All three pillars validate resilience |" — .claude/skills/observability/references/three-pillars-reference.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 78 | defined here | Cataloged in Problem Domain Cross-Reference table as a Tier 4 (Staff) reliability practice. |
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 114 | used here | Recommended as a proactive prevention technique against complacency and domain collapse into chaos. |
| .claude/skills/observability/references/three-pillars-reference.md | 91 | used here | Listed in SRE relationship table noting all three observability pillars validate resilience during experiments. |

## Consumes
Steady-state telemetry hypotheses, error budget margins, blast-radius boundaries.

## Produces
Empirical fault-injection experiments, validation of automated failovers, and incident response verification.

## When applied
Applied at Tier 4 engineering complexity to proactively inject controlled failures and test system resilience.

## Sub-concepts
none

## Part of
chaos-experiment

## Implementation status
defects: missing-path

## Design notes
Chaos Engineering in rjm is a Tier 4 reliability discipline that validates system resilience hypotheses by injecting controlled failures, relying on observability pillars and error budgets to safeguard production while revealing hidden failure modes before real incidents occur.
