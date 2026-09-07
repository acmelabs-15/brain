---
package: rjm
name: Complex to Complicated
slug: complex-to-complicated
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

# Complex to Complicated

## Definition — verbatim
> "### Complex to Complicated" — .claude/skills/cynefin-classifier/references/domain-transitions.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 21 | defined here | Clockwise transition when repeated experimental patterns allow formalization through expert analysis. |

## Consumes
Reproducible patterns emerged from multiple safe-to-fail experiments.

## Produces
Systematic expert analysis, formal architectural design, and comparative trade-off evaluations.

## When applied
Triggered by the diagnostic signal "We've seen this pattern three times now."

## Sub-concepts
none

## Part of
clockwise

## Implementation status
clean

## Design notes
`Complex to Complicated` captures the milestone where experimental probes have revealed stable, repeatable patterns. At this juncture, teams bring in subject-matter experts to formalize principles, analyze edge cases, and design engineered architectures.
