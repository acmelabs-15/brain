---
package: rjm
name: NEEDS_CHANGES
slug: needs-changes
kind: gate
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

# NEEDS_CHANGES

## Definition — verbatim
(used, not defined)

> "- **NEEDS_CHANGES**: Return to planning phase to address issues" — .claude/skills/planner/SKILL.md:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 455 | used here | Rejection verdict from the quality reviewer requiring plan revisions and restarting review from step 1. |
| .claude/skills/planner/SKILL.md | 196 | used here | Outcome condition mandating return to the planning phase to resolve identified deficiencies. |

## Consumes
Quality reviewer findings highlighting critical defects, missing rationales, unanchored assumptions, or policy violations.

## Produces
Rejection of the current plan draft and directive to remediate issues before re-initiating review.

## When applied
Returned by @agent-quality-reviewer when a plan fails Rule 0, Rule 1, or structural review checks.

## Sub-concepts
none

## Part of
plan-review

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A blocking review gate verdict that halts progression to the execution workflow when significant defects or unanchored assumptions are identified, requiring the planner to address deficiencies and restart review from step 1.
