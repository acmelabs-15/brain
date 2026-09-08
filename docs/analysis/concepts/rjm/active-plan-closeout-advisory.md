---
package: rjm
name: Active Plan Closeout Advisory
slug: active-plan-closeout-advisory
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Active Plan Closeout Advisory

## Definition — verbatim
> "Active Plan Closeout Advisory" — scripts/validation/pre_pr_sequence.py:352

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 352 | defined here | Pre-PR validation gate warning when all tracking issues on an active plan are closed. |

## Consumes
Active execution plans in `.agents/plans/active/` and GitHub tracking issue states.

## Produces
Advisory warning notification when tracking issues on an active plan are closed.

## When applied
Evaluated during the pre-PR validation sequence before submitting pull requests.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
An advisory validation gate in `pre_pr_sequence.py` (Issue #3426) that checks whether all tracking issues referenced by active execution plans in `.agents/plans/active/` have been closed. It surfaces stale plans for closeout and archival so completed work does not silently refill active planning directories.
