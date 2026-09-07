---
package: rjm
name: Tools
slug: tools
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tools

## Definition — verbatim
(used, not defined)

> "| Tools | Well-defined tool suite; model decides call order |" — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 50 | defined here | Architectural layer in Mythos-Ready System Architecture specifying well-defined tool suites where the model decides call order. |
| templates/agents/issue-feature-review.shared.md | 149 | defined here | Section heading configuring tool permissions and boundary constraints for issue triage. |
| templates/agents/milestone-planner.shared.md | 169 | defined here | Section heading declaring allowed tools and memory retrieval for epic planning. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A structural section heading in agent templates and architecture layer label in system design reference rather than an operational lifecycle concept.
