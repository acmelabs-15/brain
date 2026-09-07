---
package: rjm
name: plan-annotation
slug: plan-annotation
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

# plan-annotation

## Definition — verbatim
(used, not defined)

> "|-- Step 1: @agent-technical-writer (plan-annotation)" — .claude/skills/planner/SKILL.md:113

## Also called — verbatim
> "<mode>plan-scrub</mode>" — .claude/skills/planner/scripts/planner.py:412

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 113 | used here | Defines step 1 review delegation mode for @agent-technical-writer to annotate draft plans. |

## Consumes
Draft implementation plan file with Planning Context section.

## Produces
Plan annotated with rationale, WHY comments in code snippets, and documentation milestones.

## When applied
Applied during step 1 of the review phase in the planner workflow.

## Sub-concepts
none

## Part of
review-phase

## Implementation status
defects: missing-path, doc-drift

## Design notes
Technical writer delegation mode specified in SKILL.md for adding rationale annotations and WHY comments to an implementation plan before quality review.
