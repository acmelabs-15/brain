---
package: rjm
name: plan-review
slug: plan-review
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# plan-review

## Definition — verbatim
(used, not defined)

> "<mode>plan-review</mode>" — .claude/skills/planner/scripts/planner.py:442

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 442 | defined here | Delegation mode specifying the quality reviewer task for adversarial plan evaluation. |
| .claude/skills/planner/SKILL.md | 114 | used here | Diagrams step 2 of the review phase delegating plan evaluation to @agent-quality-reviewer. |

## Consumes
A scrubbed implementation plan containing Planning Context, constraints, known risks, and milestone specifications.

## Produces
A quality review verdict (PASS, PASS_WITH_CONCERNS, or NEEDS_CHANGES) along with documented findings or accepted risks.

## When applied
Applied during step 2 of the review phase after technical writer plan scrubbing completes.

## Sub-concepts
none

## Part of
review-phase

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
An adversarial review technique in the planner workflow where an independent quality review agent scrutinizes implementation plans against production reliability rules and project constraints before approving execution.
