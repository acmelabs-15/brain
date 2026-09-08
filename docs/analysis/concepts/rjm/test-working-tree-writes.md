---
package: rjm
name: Test Working Tree Writes
slug: test-working-tree-writes
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

# Test Working Tree Writes

## Definition — verbatim
> "Test Working Tree Writes" — scripts/validation/pre_pr_sequence.py:233

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 233 | defined here | Pre-PR validation gate verifying that test executions do not leave modified or untracked files in the working tree. |

## Consumes
Git working tree status before and after test executions.

## Produces
Pass/fail validation verdict ensuring tests write artifacts only to isolated temporary directories rather than the tracked tree.

## When applied
During pre-PR validation sequence execution prior to pull request submission.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Hermetic test enforcement gate that validates tests do not write temporary files or side effects directly into the tracked repository working tree.
