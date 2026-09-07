---
package: rjm
name: progress tracking
slug: progress-tracking
kind: technique
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

# progress tracking

## Definition — verbatim
> "Manage execution plans as versioned artifacts with progress tracking and decision logs." — .claude/skills/execution-plans/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 4 | defined here | Declared core responsibility of the execution-plans skill for maintaining plan momentum and state. |

## Consumes
Completed objectives, timestamped execution events, blocker discoveries, and agent attribution metadata.

## Produces
Checked-off task checkboxes and append-only entries in the Progress Log table of an active plan.

## When applied
Invoked continuously during task execution whenever milestones are reached or work progress is updated.

## Sub-concepts
progress-log

## Part of
execution-plans

## Implementation status
clean

## Design notes
Progress tracking is the discipline of maintaining an explicit, timestamped record of execution advances and impediments in plan artifacts. It ensures distributed or sequential agent sessions can immediately resume work without guessing prior progress or duplicating completed steps.
