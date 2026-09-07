---
package: rjm
name: Chaotic to Complex
slug: chaotic-to-complex
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

# Chaotic to Complex

## Definition — verbatim
> "### Chaotic to Complex" — .claude/skills/cynefin-classifier/references/domain-transitions.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 7 | defined here | Clockwise transition when initial crisis is stabilized and teams shift from pure action to structured experimentation. |

## Consumes
Stabilized crisis state where immediate failure modes have been mitigated.

## Produces
Transition to safe-to-fail probes, diagnostic experiments, and root-cause exploration.

## When applied
Triggered by the operational signal "We stopped the bleeding, now what?" after an emergency.

## Sub-concepts
none

## Part of
clockwise

## Implementation status
clean

## Design notes
`Chaotic to Complex` marks the crucial shift from emergency triage to empirical exploration. Once an immediate crisis is stabilized, teams must not lapse into premature certainty, but instead establish safe-to-fail probes to discover underlying emergent patterns.
