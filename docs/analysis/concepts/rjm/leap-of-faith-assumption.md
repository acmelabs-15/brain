---
package: rjm
name: leap-of-faith assumption
slug: leap-of-faith-assumption
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/lean-startup.md, sha256: 2dced9a8a71a571271b621d0be2e74299d328252264c6f3cd9f9f81ffa7c91bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# leap-of-faith assumption

## Definition — verbatim
> "1. State the leap-of-faith assumption. Name the one belief that, if false, sinks" — .claude/skills/business-strategy/references/lean-startup.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/lean-startup.md | 35 | defined here | The primary foundational premise upon which venture viability depends, tested via the first experiment loop. |

## Consumes
Venture thesis, initial product architecture concept, and customer pain assumptions.

## Produces
An explicitly stated, falsifiable core proposition whose truth or falsehood dictates whether the venture survives.

## When applied
At the initiation of the Build-Measure-Learn feedback loop before writing code or building prototypes.

## Sub-concepts
value-hypothesis, growth-hypothesis

## Part of
lean-startup, build-measure-learn

## Implementation status
clean

## Design notes
The leap-of-faith assumption isolates the single critical hypothesis that, if disproven, renders the entire business concept unviable. In rjm's Lean framework, surfacing this assumption directs initial experimentation toward existential risks before secondary features are built.
