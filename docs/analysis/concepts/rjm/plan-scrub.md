---
package: rjm
name: plan-scrub
slug: plan-scrub
kind: technique
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

# plan-scrub

## Definition — verbatim
(used, not defined)

> "<mode>plan-scrub</mode>" — .claude/skills/planner/scripts/planner.py:412

## Also called — verbatim
> "|-- Step 1: @agent-technical-writer (plan-annotation)" — .claude/skills/planner/SKILL.md:113

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 412 | defined here | Delegation mode specifying technical writer scrub task to enrich plan prose and add WHY comments. |

## Consumes
Draft implementation plan with a Planning Context section containing constraints, decisions, and known risks.

## Produces
Scrubbed plan enriched with rationale prose, WHY comments in code snippets, and explicit documentation milestones.

## When applied
Applied during step 1 of the review phase in the planner workflow.

## Sub-concepts
none

## Part of
review-phase

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A specialized technical review pass where a technical writer reviews draft plan files to enrich design rationales, add explanatory WHY comments to code snippets, and ensure all necessary documentation milestones are included before adversarial quality review.
