---
package: rjm
name: Triage first
slug: triage-first
kind: pattern
package_phase: rjm:coordinator
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Triage first

## Definition — verbatim
> "**Triage first.** Before delegating, classify:" — .claude/agents/orchestrator.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 51 | defined here | Core orchestrator protocol classifying incoming tasks across complexity, scope, and urgency. |
| src/claude/orchestrator.md | 51 | defined here | Mandatory initial classification step before any agent delegation. |
| templates/agents/orchestrator.shared.md | 64 | defined here | Core routing requirement ensuring tasks are properly categorized prior to dispatch. |

## Consumes
User requests, issue reports, or system goals.

## Produces
Three-dimensional classification profile: Complexity tier (Cynefin), Scope (single/multi-step/cross-domain), and Urgency (P0-P3).

## When applied
Executed before any subagent delegation is issued.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift

## Design notes
Triage first is a fundamental behavioral invariant of the rjm orchestrator. It prohibits premature delegation by requiring a rigorous three-axis classification (Cynefin complexity tier, execution scope, and operational urgency) to determine the appropriate depth of the agent delegation chain.
