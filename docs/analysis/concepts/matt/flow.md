---
package: matt
name: flow
slug: flow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# flow

## Definition — verbatim
> "A **flow** is a path through the skills. Most paths run along one **main flow**, and two **on-ramps** merge onto it." — skills/engineering/ask-matt/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 27 | defined here | Introduces flow as the conceptual unit of navigation across skills rather than isolated commands. |
| external/ask-matt.md | 34 | defined here | External catalog documentation describing skill orchestration sequences as navigable flows. |
| skills/engineering/ask-matt/SKILL.md | 11 | defined here | Router skill definition establishing flows through skills, including main flow, on-ramps, and standalones. |

## Consumes
A developer's operational context or situation requiring assistance.

## Produces
An ordered sequence of skills and human decision points to execute.

## When applied
When deciding how to navigate and orchestrate skills for a given engineering challenge.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift (router map lags new skills, false not installed bug due to disable-model-invocation)

## Design notes
The macro-level organizational structure in matt grouping individual agent skills into purposeful, interconnected trajectories. By focusing on flows (e.g. main flow, on-ramps, and standalones) rather than isolated skills, matt ensures that transitions, branching heuristics, and context resets between steps are explicitly managed throughout the development lifecycle.
