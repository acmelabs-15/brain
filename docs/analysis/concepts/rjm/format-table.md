---
package: rjm
name: format_table
slug: format-table
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/scripts/query_logs.py, sha256: 52b5d64d98daf4538a5dae49954b3d548feb8e0f606cc81ab8b991f0f17e909b}
  - {path: scripts/validation/instruction_budget.py, sha256: c57feaeaba07cea56c524e40fcef7945cc51684df1a4f69733a85e65ae241183}
  - {path: scripts/validation/passive_context_budget.py, sha256: 1eb3cf2167b042b03dea6986c67b3e87ac6e84062453a3840384ea9d5ff07cff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# format_table

## Definition — verbatim
> "def format_table(events: list[dict]) -> str:" — .claude/skills/observability/scripts/query_logs.py:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/observability/scripts/query_logs.py | 167 | defined here | Primary definition of `format_table` within query_logs.py. |
| scripts/validation/instruction_budget.py | 77 | defined here | Primary definition of `format_table` within instruction_budget.py. |
| scripts/validation/passive_context_budget.py | 113 | defined here | Primary definition of `format_table` within passive_context_budget.py. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: exit-code-mismatch

## Design notes
An operational technique or artifact (format_table) utilized within the rjm ecosystem to ensure consistency and systematic execution.
