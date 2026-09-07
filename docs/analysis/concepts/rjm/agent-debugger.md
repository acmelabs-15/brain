---
package: rjm
name: @agent-debugger
slug: agent-debugger
kind: role
package_phase: rjm:build
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

# @agent-debugger

## Definition — verbatim
(used, not defined)

> "Fix a bug -> STOP. Delegate to @agent-debugger then @agent-developer" — .claude/skills/planner/scripts/executor.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 63 | used here | Designated target agent role for diagnosing defects and bugs before handing off to developer. |

## Consumes
Bug reports, test failures, and unexpected runtime errors.

## Produces
Root cause analysis and defect isolation findings.

## When applied
Applied when a bug or test failure is encountered during milestone execution.

## Sub-concepts
none

## Part of
milestone-execution

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
`@agent-debugger` is an analytical specialist role designated to diagnose bugs and determine root causes during plan execution prior to code modification.
