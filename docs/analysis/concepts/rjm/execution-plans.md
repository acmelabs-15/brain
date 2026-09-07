---
package: rjm
name: execution-plans
slug: execution-plans
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

# execution-plans

## Definition — verbatim
> "Manage execution plans as versioned artifacts with progress tracking and decision logs." — .claude/skills/execution-plans/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 2 | defined here | Skill frontmatter name identifier for the execution plans skill. |
| .claude/skills/execution-plans/SKILL.md | 4 | defined here | Description defining execution plans as versioned repository artifacts with progress tracking and decision logging. |

## Consumes
User requests to plan, track, or record work, task descriptions, and `.agents/plans/TEMPLATE.md`.

## Produces
Committed execution plan files managed across `.agents/plans/active/`, `.agents/plans/completed/`, and `.agents/plans/abandoned/`.

## When applied
Triggered when an agent initiates complex work via "create execution plan", "update plan progress", "log decision", "complete plan", or "abandon plan".

## Sub-concepts
progress-tracking, decision-logs, first-class-artifacts, objectives, progress-log, decision-log, blockers, related

## Part of
rjm:plan

## Implementation status
clean

## Design notes
The `execution-plans` skill establishes execution plans as versioned, first-class repository artifacts. By standardizing structured templates, progress logs, decision tracking, and explicit lifecycle directories (`active/`, `completed/`, `abandoned/`), it preserves institutional memory and operational state across multi-session agent workflows.
