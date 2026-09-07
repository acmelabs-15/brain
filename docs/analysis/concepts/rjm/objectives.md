---
package: rjm
name: Objectives
slug: objectives
kind: artifact
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

# Objectives

## Definition — verbatim
> "| Objectives | Checkboxes for trackable goals |" — .claude/skills/execution-plans/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 45 | defined here | Required plan template section specifying interactive checkbox goals for tracking completion. |

## Consumes
Task breakdown, epic requirements, and acceptance criteria.

## Produces
List of binary-verifiable markdown checkboxes defining discrete, trackable goals within an execution plan.

## When applied
Populated when creating a plan and checked off interactively as goals are achieved.

## Sub-concepts
none

## Part of
execution-plans

## Implementation status
clean

## Design notes
Objectives define the explicit, binary deliverables of an execution plan. Using markdown checkboxes rather than vague narrative summaries ensures that progress is deterministically verifiable and completion criteria are unambiguous.
