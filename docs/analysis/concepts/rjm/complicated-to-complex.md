---
package: rjm
name: Complicated to Complex
slug: complicated-to-complex
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

# Complicated to Complex

## Definition — verbatim
> "### Complicated to Complex" — .claude/skills/cynefin-classifier/references/domain-transitions.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 65 | defines | Disruptive transition when expert analysis reveals unpredictable emergent factors or cascading effects. |

## Consumes
Failed analytical models, cascading unintended consequences, or unresolvable trade-off deadlocks.

## Produces
Suspension of predictive planning in favor of empirical probes and safe-to-fail experimentation.

## When applied
Triggered by the indicator "Every time we think we understand, something new emerges."

## Sub-concepts
none

## Part of
counter-clockwise

## Implementation status
clean

## Design notes
`Complicated to Complex` marks the realization that a problem cannot be solved by analytical deduction or expert debate alone. Recognizing this transition halts analysis paralysis and redirects effort into iterative, empirical probing.
