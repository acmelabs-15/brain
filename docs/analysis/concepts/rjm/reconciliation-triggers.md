---
package: rjm
name: reconciliation triggers
slug: reconciliation-triggers
kind: pattern
package_phase: rjm:plan
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

# reconciliation triggers

## Definition — verbatim
> "Check if user's thoughts contain reconciliation triggers." — .claude/skills/planner/scripts/executor.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 24 | defined here | Docstring defining regex triggers that detect whether existing work must be validated before execution. |

## Consumes
User input thoughts and session prompt strings.

## Produces
Boolean detection flag indicating whether a reconciliation step is needed.

## When applied
Applied during Step 1 (Execution Planning) to determine whether existing progress must be audited.

## Sub-concepts
none

## Part of
detect-reconciliation-signals

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
Reconciliation triggers are textual patterns (such as "already implemented", "partially complete", or "resume") that signal pre-existing or interrupted work. Detecting these triggers prompts the executor to audit the current codebase state against the plan before initiating redundant changes.
