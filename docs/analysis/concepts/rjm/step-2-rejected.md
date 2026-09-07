---
package: rjm
name: step_2_rejected
slug: step-2-rejected
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

# step_2_rejected

## Definition — verbatim
> "Document rejected alternatives with CONCRETE reasons." — .claude/skills/planner/scripts/planner.py:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 244 | defined here | Section documenting rejected alternatives with concrete disqualification rationales. |

## Consumes
Candidate approaches and design alternatives ruled out during evaluation.

## Produces
Documented Rejected Alternatives section within the plan recording concrete disqualification rationales.

## When applied
Enforced during Step 2 of planning once the primary approach is chosen.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A planning requirement to explicitly record discarded alternatives and the concrete technical reasons they were rejected, preventing accidental re-exploration and supplying context for "why not X" code comments.
