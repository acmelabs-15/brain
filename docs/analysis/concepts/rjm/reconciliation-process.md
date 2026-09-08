---
package: rjm
name: Reconciliation Process
slug: reconciliation-process
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reconciliation Process

## Definition — verbatim
> "### Reconciliation Process" — templates/agents/task-decomposer.shared.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/task-decomposer.shared.md | 221 | defined here | Protocol steps for extracting, summing, and comparing source vs. derived task estimates. |

## Consumes
Source PRD/epic estimates and aggregate task breakdown estimates.

## Produces
Completed estimate reconciliation table and divergence percentage calculation.

## When applied
Triggered whenever derived task breakdown estimates differ from source estimates by more than 10%.

## Sub-concepts
none

## Part of
task-decomposer-agent

## Implementation status
clean

## Design notes
A three-step comparison workflow that compares summed task estimates against source epic estimates to enforce accountability and catch estimate drift early in planning.
