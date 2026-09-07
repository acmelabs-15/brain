---
package: rjm
name: OODA stages
slug: ooda-stages
kind: pattern
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

# OODA stages

## Definition — verbatim
(used, not defined)

> "| `references/strategy-ooda-loop.md` | Map planning and execution phases to OODA stages |" — .claude/skills/planner/SKILL.md:288

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 288 | used here | References mapping the planning and execution workflow phases to military OODA loop cognitive stages. |

## Consumes
Environmental signals, project constraints, and architectural observations.

## Produces
Structured phase progression aligning agent behavior with Observe, Orient, Decide, and Act cognitive stages.

## When applied
Applied conceptually during planning and execution to maintain situational awareness and prevent premature action.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift

## Design notes
A strategic cognitive pattern mapping planner workflows to the Observe-Orient-Decide-Act loop to ensure agents thoroughly observe constraints and evaluate orientations before committing to decisions and implementation actions.
