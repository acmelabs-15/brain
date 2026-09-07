---
package: rjm
name: Estimate Reconciliation Protocol
slug: estimate-reconciliation-protocol
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Estimate Reconciliation Protocol

## Definition — verbatim
> "## Estimate Reconciliation Protocol" — .claude/agents/task-decomposer.md:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/task-decomposer.md | 195 | defined here | Protocol ensuring task totals remain consistent with parent epic and PRD estimates. |
| templates/agents/task-decomposer.shared.md | 213 | defined here | Shared template specification defining the estimate reconciliation process. |

## Consumes
Parent PRD or epic effort estimates, aggregated task breakdown estimate sums.

## Produces
Reconciliation tables and mandatory remediation actions (Update source, Document rationale, or Flag for review) when estimates diverge.

## When applied
Applied after completing task breakdown to compare aggregate task effort against original high-level estimates.

## Sub-concepts
10-threshold-rule

## Part of
decomposition-process

## Implementation status
clean

## Design notes
Estimate Reconciliation Protocol is a governance protocol ensuring that the sum of granular task estimates aligns with the high-level epic/PRD estimate, enforcing explicit remediation actions when estimates diverge.
