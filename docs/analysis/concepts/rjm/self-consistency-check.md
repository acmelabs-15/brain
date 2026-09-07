---
package: rjm
name: Self-consistency check
slug: self-consistency-check
kind: technique
package_phase: rjm:execution
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Self-consistency check

## Definition — verbatim
> "All three must align. Discrepancy = investigate before proceeding." — .claude/skills/planner/scripts/executor.py:310

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 305 | defined here | Triangulation check reconciling developer notes, test results, and acceptance criteria for complex milestones. |

## Consumes
Developer implementation notes, automated test verification evidence, and plan acceptance criteria for milestones affecting more than 3 files.

## Produces
Triangulated consistency assessment; triggers an investigation if claims, test results, and criteria disagree.

## When applied
Enforced during Step 3 milestone execution for any milestone modifying more than three files.

## Sub-concepts
none

## Part of
acceptance-testing, executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A multi-perspective validation technique requiring developer claims, demonstrated test behaviors, and explicit plan acceptance criteria to be fully reconciled for complex multi-file changes.
