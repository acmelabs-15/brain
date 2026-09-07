---
package: rjm
name: Issue Resolution
slug: issue-resolution
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

# Issue Resolution

## Definition — verbatim
> "QR issues? --YES--> Step 5: Issue Resolution --> delegate fixes --> Step 4" — .claude/skills/planner/SKILL.md:217

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 217 | defined here | Conditional step 5 in the execution workflow diagram resolving quality review issues through delegated fixes. |

## Consumes
Quality review defect reports, failing test traces, or implementation discrepancies identified in step 4.

## Produces
Delegated bug fixes, corrected code modifications, and resubmission to post-implementation review.

## When applied
Triggered conditionally when post-implementation quality review detects issues in executed milestones.

## Sub-concepts
none

## Part of
execution-workflow

## Implementation status
defects: missing-path, doc-drift

## Design notes
A conditional remediation technique within the plan execution workflow that triages defects identified during quality review and delegates targeted fixes back to implementation agents before allowing progression to documentation.
