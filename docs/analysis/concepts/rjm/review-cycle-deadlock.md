---
package: rjm
name: Review Cycle Deadlock
slug: review-cycle-deadlock
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Review Cycle Deadlock

## Definition — verbatim
> "### Review Cycle Deadlock (3+ Iterations)" — docs/autonomous-issue-development.md:387
> "**Detection**: Same feedback received 3 times without resolution." — docs/autonomous-issue-development.md:389

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 387 | defined here | Defines the deadlock condition and escalation protocol when recursive review feedback recurs three or more times without resolution. |

## Consumes
Repetitive review feedback from Critic, QA, or Security agents recurring three times.

## Produces
WIP pull request, documented blocking feedback in description, `blocked` issue label, human escalation comment, and queue advance.

## When applied
Applied during recursive review cycles when the same feedback is received 3 times without reaching approval.

## Sub-concepts
none

## Part of
autonomous-issue-development-prompt

## Implementation status
defects: missing-path

## Design notes
Review Cycle Deadlock provides an automated escape valve for recursive multi-agent review loops, converting repeated review failures into an escalated WIP pull request flagged for human intervention to prevent infinite agent loops.
