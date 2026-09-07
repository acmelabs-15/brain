---
package: rjm
name: Planning workflow
slug: planning-workflow
kind: technique
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

# Planning workflow

## Definition — verbatim
> "1. **Planning workflow** (planner.py): Create and review implementation plans" — .claude/skills/planner/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 15 | defined here | Defines the first of two primary workflows for managing complex tasks, focused on plan creation and review. |

## Consumes
User feature request or problem statement, project requirements, architectural context, and target plan file path.

## Produces
An approved implementation plan document written to disk following resources/plan-format.md with embedded decisions and verified risks.

## When applied
Triggered when breaking down multi-step projects, designing or architecting features, or creating implementation plans.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift

## Design notes
An interactive sequential planning technique driven by planner.py that enforces structured reflection pauses, constraint discovery, explicit decision logs, and independent two-phase reviews before implementation begins.
