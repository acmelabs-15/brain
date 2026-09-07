---
package: rjm
name: Race Condition
slug: race-condition
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Race Condition

## Definition — verbatim
> "CRITICAL-NEW-003: Race Condition in Label Creation" — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 148 | defined here | Documented as critical vulnerability CRITICAL-NEW-003 representing a time-of-check to time-of-use (TOCTOU) race condition in GitHub label operations. |

## Consumes
Concurrent API requests, non-atomic check-then-act sequences, and shared mutable state.

## Produces
Inconsistent state, runtime exceptions, and duplicate entity creation failures.

## When applied
Audited during code and review passes for asynchronous API interactions, label management, or resource provisioning.

## Sub-concepts
none

## Part of
vulnerabilities

## Implementation status
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`Race Condition` highlights the concurrency anti-pattern where a non-atomic check precedes an action (TOCTOU), allowing parallel workflow executions to collide and corrupt external system state.
