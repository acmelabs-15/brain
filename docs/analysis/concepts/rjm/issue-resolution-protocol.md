---
package: rjm
name: issue_resolution_protocol
slug: issue-resolution-protocol
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

# issue_resolution_protocol

## Definition — verbatim
> "Present issues to user, collect decisions, delegate fixes." — .claude/skills/planner/scripts/executor.py:381

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 383 | defined here | Two-phase protocol for presenting QR issues to the user, collecting decisions, and executing fixes. |

## Consumes
Quality review findings sorted by severity (critical, high, medium, low) from Step 4.

## Produces
User decisions (`Fix`, `Skip`, `Alternative`) per finding, followed by delegated remediation tasks executed by `@agent-developer` and re-validation via QR loop.

## When applied
Applied during Step 5 of the executor when Step 4 quality review returns defects or conformance issues.

## Sub-concepts
askuserquestion

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A structured issue remediation protocol that bifurcates resolution into distinct collection and execution phases: decisions are first gathered for all findings via user interaction without code edits, and then batches of fixes are delegated before looping back to review.
