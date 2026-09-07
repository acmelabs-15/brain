---
package: rjm
name: Any Domain to Chaotic
slug: any-domain-to-chaotic
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

# Any Domain to Chaotic

## Definition — verbatim
> "### Any Domain to Chaotic" — .claude/skills/cynefin-classifier/references/domain-transitions.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 79 | defines | Sudden collapse from any domain into Chaotic caused by black swan events, security breaches, or data loss. |

## Consumes
Severe unforeseen shocks, infrastructure collapse, active data breaches, or cascading service outages.

## Produces
Emergency protocol activation, cessation of non-critical operations, and immediate containment measures.

## When applied
Triggered by the acute emergency condition "Everything is on fire."

## Sub-concepts
none

## Part of
counter-clockwise

## Implementation status
clean

## Design notes
`Any Domain to Chaotic` models sudden catastrophic collapse caused by black swan events or security breaches, instructing teams to suspend all ongoing planned work and execute emergency triage to stabilize the blast radius.
