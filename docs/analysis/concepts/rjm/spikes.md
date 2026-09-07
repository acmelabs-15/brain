---
package: rjm
name: Spikes
slug: spikes
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/software-applications.md, sha256: f7e15c1b5144a4af053fd201bf675d5648e67d04787b8e4b24dad09104cdebdc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Spikes

## Definition — verbatim
(used, not defined)

> "| Spikes | Explicitly for Complex domain items |" — .claude/skills/cynefin-classifier/references/software-applications.md:190

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/software-applications.md | 190 | used here | Specified as an Agile technique dedicated to exploring Complex and uncertain domain backlog items. |

## Consumes
Research questions, timeboxed budget, disposable prototype environment.

## Produces
Architectural clarity, empirical feasibility data, risk reduction, refined story estimates.

## When applied
Applied when a backlog item involves technical uncertainty or novel technology before committing to delivery estimates.

## Sub-concepts
none

## Part of
integration-with-agile

## Implementation status
clean

## Design notes
Spikes are time-boxed exploratory investigations used in Agile workflows to resolve technical uncertainty and probe complex system boundaries. Rather than committing to delivering shippable features when dependencies or approaches are unknown, teams execute a spike to build prototypes and gather empirical data, transitioning the problem from Complex into Complicated or Clear.
