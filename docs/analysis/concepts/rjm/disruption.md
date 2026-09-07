---
package: rjm
name: Disruption
slug: disruption
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
  - {path: .claude/skills/cynefin-classifier/references/domain-transitions.md, sha256: 1823ee0f7fa344196f64b2288320ec3430976256773d7d559f0f12b61b845eec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Disruption

## Definition — verbatim
> "### Counter-Clockwise (Disruption)" — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:79

## Also called — verbatim
`Counter-Clockwise` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:79

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 79 | defined here | Counter-clockwise movement of problems across Cynefin domains triggered by changing context or black swan events. |
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 49 | defined here | Section detailing counter-clockwise domain transitions caused by invalidated assumptions and shocks. |

## Consumes
Shifting operational context, architectural invalidations, unexpected complexities, or external shocks.

## Produces
Re-evaluation triggers, escalation to expert analysis or experimentation, and emergency interventions.

## When applied
Triggered when established best practices or architectures break down due to changing circumstances.

## Sub-concepts
clear-to-complicated, complicated-to-complex, any-domain-to-chaotic

## Part of
domain-transitions

## Implementation status
clean

## Design notes
`Disruption` captures counter-clockwise shifts across Cynefin domains when changes in environment, scale, or technology invalidate established assumptions, requiring teams to retreat from automation into expert analysis, experimentation, or crisis response.
