---
package: rjm
name: delegation_format
slug: delegation-format
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

# delegation_format

## Definition — verbatim
> "EVERY delegation MUST use this structure:" — .claude/skills/planner/scripts/executor.py:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 132 | defined here | Defines the mandatory XML schema and tag structure for milestone delegation to subagents. |

## Consumes
Approved plan files, milestone boundaries, target file paths, specific tasks, and acceptance criteria.

## Produces
Formatted `<delegation>` XML blocks specifying agent roles, execution modes, plan sources, milestones, files, tasks, and acceptance criteria.

## When applied
Applied during Step 3 (Milestone Execution) whenever the executor delegates a milestone to a specialized subagent.

## Sub-concepts
none

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A structured XML prompt schema enforced by the plan executor to standardise task delegation across developer, debugger, technical writer, and quality reviewer agents. It establishes explicit parameters for plan context, target files, and acceptance criteria while bounding agent parallelism.
