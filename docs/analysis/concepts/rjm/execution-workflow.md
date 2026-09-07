---
package: rjm
name: Execution workflow
slug: execution-workflow
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Execution workflow

## Definition — verbatim
> "2. **Execution workflow** (executor.py): Execute approved plans through delegation" — .claude/skills/planner/SKILL.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 16 | defined here | Defines the second core workflow in the planner skill, executing approved plans through milestone delegation. |
| docs/autonomous-pr-monitor.md | 346 | defined here | Operational sequence detailing autonomous session steps after session analysis completes. |

## Consumes
An approved implementation plan document that has passed review gates, or PR triage context in autonomous monitoring sessions.

## Produces
Implemented code across milestones, automated test executions, post-implementation reviews, documentation updates, and retrospectives.

## When applied
Triggered when executing, implementing, running, or resuming approved plans, or executing autonomous monitoring workflows.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
An operational execution framework coordinating milestone-based agent delegation, test validation, post-implementation quality review, and retrospective reporting across complex software implementations and autonomous monitoring sessions.
