---
package: rjm
name: SKIP_WORKFLOW_LOCAL_TEST
slug: skip-workflow-local-test
kind: name-only
package_phase: none
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

# SKIP_WORKFLOW_LOCAL_TEST

## Definition — verbatim
(used, not defined)

> "``SKIP_WORKFLOW_LOCAL_TEST=true``; the bypass is logged, not hidden." — scripts/validation/run_workflow_local_test.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/run_workflow_local_test.py | 25 | used here | Environment variable flag used to bypass local GitHub Actions workflow testing for unrunnable workflows. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An environment variable configuration switch used to bypass local pre-push workflow validation rather than an agent lifecycle concept, classified as name-only per D-023.
