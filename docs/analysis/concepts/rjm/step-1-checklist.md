---
package: rjm
name: step_1_checklist
slug: step-1-checklist
kind: checklist
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

# step_1_checklist

## Definition — verbatim
> "Complete ALL items before invoking step 2:" — .claude/skills/planner/scripts/planner.py:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 174 | defined here | Checklist covering context analysis, scope boundaries, approach options, constraint discovery, and success criteria. |

## Consumes
Problem statement, plan file path, and codebase context.

## Produces
Documented context analysis, explicit in-scope and out-of-scope boundaries, candidate approach options with pros/cons, discovered constraints, and testable acceptance criteria.

## When applied
Mandatory starting checklist in Step 1 of the planning phase before proceeding to evaluation in Step 2.

## Sub-concepts
constraint-discovery

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
The initial checklist executed during planning that guides the agent through context discovery, boundary scoping, approach ideation, constraint extraction, and acceptance criteria definition.
