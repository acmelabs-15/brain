---
package: rjm
name: Planner skill
slug: planner-skill
kind: role
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/execution-plans/SKILL.md, sha256: 5fce18066fe388549f310b14e86f36e023853679c1954c76d5b4400fe0c1c472}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Planner skill

## Definition — verbatim
> "- Planner skill creates plans here when executing complex work" — .claude/skills/execution-plans/SKILL.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 96 | used here | Integration reference designating the planner skill as an authorized creator of execution plan artifacts. |

## Consumes
Complex task requirements, architectural objectives, and milestone definitions.

## Produces
Execution plan artifacts created under `.agents/plans/active/`.

## When applied
Referenced in integration documentation when complex multi-step work requires milestone breakdown and plan creation.

## Sub-concepts
none

## Part of
execution-plans

## Implementation status
clean

## Design notes
The Planner skill represents the upstream planning capability responsible for breaking complex initiatives into milestones. The `execution-plans` integration establishes that while `planner` creates plan files, `execution-plans` manages their lifecycle transitions, progress updates, and decision logging.
