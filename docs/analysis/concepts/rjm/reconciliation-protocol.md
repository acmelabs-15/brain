---
package: rjm
name: reconciliation_protocol
slug: reconciliation-protocol
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

# reconciliation_protocol

## Definition — verbatim
> "Validate existing code against plan requirements BEFORE executing." — .claude/skills/planner/scripts/executor.py:197

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 199 | defined here | Protocol for validating existing code against plan requirements prior to milestone execution. |

## Consumes
User thoughts indicating prior implementation, approved plan file, and current repository state.

## Produces
Reconciliation evaluation verdicts (`SATISFIED`, `NOT_SATISFIED`, `PARTIALLY_SATISFIED`) determining whether milestones are skipped, executed normally, or executed partially.

## When applied
Triggered during Step 2 of the executor when reconciliation signals (such as "already implemented" or "prior work") are detected in user thoughts.

## Sub-concepts
none

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A pre-execution validation technique in rjm that tests whether planned acceptance criteria are already satisfied in the target codebase before running milestones. By focusing on requirements rather than diff matching, it catches partial, incorrect, or alternative pre-existing implementations.
