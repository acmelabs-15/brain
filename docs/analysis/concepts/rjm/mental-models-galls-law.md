---
package: rjm
name: mental-models-galls-law
slug: mental-models-galls-law
kind: reference
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mental-models-galls-law

## Definition — verbatim
(used, not defined)

> "| `references/mental-models-galls-law.md` | Validate milestone decomposition against incremental complexity |" — .claude/skills/planner/SKILL.md:290

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 290 | used here | Reference document validating milestone decomposition against incremental complexity principles. |

## Consumes
Proposed milestone breakdown and architectural scope.

## Produces
Validation that the plan develops from a simple working system into complexity rather than designing complex systems from scratch.

## When applied
Applied during milestone decomposition to verify that system increments build upon working baselines.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift

## Design notes
A systems thinking reference establishing Gall's Law—that complex systems designed from scratch never work and must evolve from simple working systems—to govern agent milestone decomposition.
