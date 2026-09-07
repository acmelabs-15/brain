---
package: rjm
name: design-pit-of-success
slug: design-pit-of-success
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

# design-pit-of-success

## Definition — verbatim
(used, not defined)

> "| `references/design-pit-of-success.md` | Design milestones so the obvious path produces correct results |" — .claude/skills/planner/SKILL.md:289

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 289 | used here | Reference document guiding milestone design so that the obvious path produces correct results. |

## Consumes
Candidate architectural designs and milestone breakdown proposals.

## Produces
Milestone and interface designs structured so the path of least resistance naturally yields correct software.

## When applied
Consulted during step 2 and step 3 of the planning workflow when shaping milestone structures.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift

## Design notes
An architectural reference document instructing planners to structure system boundaries and milestone requirements such that developers and agents naturally fall into correct implementations without requiring heroic error-checking.
