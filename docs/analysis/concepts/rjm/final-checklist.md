---
package: rjm
name: final_checklist
slug: final-checklist
kind: checklist
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

# final_checklist

## Definition — verbatim
> "Execution is NOT complete until:" — .claude/skills/planner/scripts/executor.py:468

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 466 | defined here | Final completion criteria checklist verified before generating the execution retrospective. |

## Consumes
TodoWrite task status, quality review results, documentation delegation status, and self-consistency check records.

## Produces
Execution readiness verdict confirming that code, review, documentation, and verification obligations are complete.

## When applied
Evaluated at the conclusion of Step 6 in the executor before transitioning to the Step 7 retrospective.

## Sub-concepts
none

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A terminal execution gate checklist ensuring that all milestones are finished, quality review is resolved without outstanding issues, documentation updates are completed, and self-consistency checks have passed.
