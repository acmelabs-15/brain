---
package: rjm
name: Workflow Local Run
slug: workflow-local-run
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

# Workflow Local Run

## Definition — verbatim
> "Workflow Local Run" — scripts/validation/pre_pr_sequence.py:406

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 406 | defined here | Pre-PR gate running actionlint and gh act dry-runs against changed GitHub Actions workflows. |

## Consumes
Modified GitHub Actions workflow YAML files in `.github/workflows/`.

## Produces
Pass/fail verification verdict ensuring workflow syntax and execution compatibility.

## When applied
Evaluated during the pre-PR validation sequence when workflow files are modified.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A pre-PR validation gate in `pre_pr_sequence.py` that runs `actionlint` syntax checking and `gh act` dry-runs against modified workflow files in `.github/workflows/`, preventing broken CI syntax from being pushed to remote branches.
