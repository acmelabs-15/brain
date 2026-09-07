---
package: rjm
name: RULE 1: Execution Protocol
slug: rule-1-execution-protocol
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

# RULE 1: Execution Protocol

## Definition — verbatim
> "RULE 1: Execution Protocol" — .claude/skills/planner/scripts/executor.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 71 | defined here | Protocol rule heading establishing the 4-step execution workflow before starting any plan phase. |

## Consumes
Approved plan and milestone definitions.

## Produces
Tracking setup, dependency analysis, task delegations, and validated increments.

## When applied
Applied before commencing any phase of plan execution.

## Sub-concepts
todowrite, dependency-analysis

## Part of
execution-rules

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
Rule 1 defines the standard four-step operational protocol for executing plan phases: track progress with TodoWrite, analyze dependencies for parallelism, delegate code work to specialized agents, and validate each increment before proceeding.
