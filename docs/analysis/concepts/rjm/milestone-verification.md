---
package: rjm
name: milestone_verification
slug: milestone-verification
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

# milestone_verification

## Definition — verbatim
> "For EACH milestone, verify:" — .claude/skills/planner/scripts/planner.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 78 | defined here | Checklist verifying file paths, specific behaviors, acceptance criteria, diff blocks, and context anchors per milestone. |

## Consumes
Draft milestone definitions, file paths, behavior descriptions, acceptance criteria, and verbatim diff context anchors.

## Produces
Verified, independently testable milestone definitions containing real codebase anchors and pass/fail criteria.

## When applied
Enforced during final planning verification before the plan file is finalized.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A quality checklist requiring every milestone in an implementation plan to specify exact file paths, testable behaviors, and verbatim context lines from source files, preventing ambiguous instructions and placeholder diffs.
