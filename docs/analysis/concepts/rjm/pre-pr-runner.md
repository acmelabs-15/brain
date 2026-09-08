---
package: rjm
name: pre-PR runner
slug: pre-pr-runner
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# pre-PR runner

## Definition — verbatim
(used, not defined)

> "the pre-PR runner delegate here so the YAML stays out of shell logic and the" — scripts/validation/run_workflow_local_test.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/run_workflow_local_test.py | 6 | used here | Cited alongside the pre-push hook as delegating changed workflow local test execution to run_workflow_local_test.py. |

## Consumes
Local git branch state, staged files, and modified workflow definitions.

## Produces
Validation verdicts and test reports guarding pull request readiness.

## When applied
Executed before creating or updating a pull request or pushing commits to remote repositories.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The pre-PR validation runner executes local test suites, static analysis, and ratchet checks prior to pull request submission, ensuring that workflows and code changes pass all quality gates locally before CI runs.
