---
package: rjm
name: retrospective_format
slug: retrospective-format
kind: template
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

# retrospective_format

## Definition — verbatim
> "Do NOT write to a file -- present it directly so the user sees it." — .claude/skills/planner/scripts/executor.py:495

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 497 | defined here | Structured template for presenting execution retrospectives directly to the user. |

## Consumes
Plan file path, milestone execution outcomes, reconciliation metrics, plan accuracy observations, approved deviations, and quality review summaries.

## Produces
Terminal-presented retrospective report directly rendered to stdout for user inspection.

## When applied
Applied during Step 7 of the executor upon completing all milestones, reviews, and documentation tasks.

## Sub-concepts
none

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A presentation template designed to report milestone results, reconciliation savings, plan accuracy drift, approved deviations, and quality metrics directly in the terminal interface rather than burying them in disk artifacts.
