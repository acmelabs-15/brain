---
package: rjm
name: RULE 1
slug: rule-1
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RULE 1

## Definition — verbatim
(used, not defined)

> "4. Apply RULE 1 (project conformance)" — .claude/skills/planner/scripts/planner.py:448

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 448 | used here | Checklist step directing quality reviewer to apply Rule 1 for project conformance during plan review. |

## Consumes
Draft implementation plan and established project conventions, architectural patterns, and coding standards.

## Produces
Validation assessment determining whether the proposed plan adheres to project conventions and architecture.

## When applied
Applied by @agent-quality-reviewer during step 2 of the review phase in planner.py.

## Sub-concepts
none

## Part of
plan-review

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A quality review gate in planner.py requiring plans to conform strictly to project-specific conventions, existing architecture patterns, and standard practices before receiving approval.
