---
package: rjm
name: vanilla guard
slug: vanilla-guard
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

# vanilla guard

## Definition — verbatim
(used, not defined)

> "the vanilla guard's precondition correctly reports that interpreters " — scripts/validation/run_workflow_local_test.py:873

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/run_workflow_local_test.py | 873 | used here | Precondition guard verifying that test matrix rows run in a clean environment lacking ambient Python interpreters. |

## Consumes
Execution environment PATH and installed interpreter state.

## Produces
Precondition verification asserting absence of ambient Python interpreters.

## When applied
Evaluated during workflow matrix validation for vanilla runner rows.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A quality gate verifying that designated matrix testing rows run in Python-free vanilla environments so plugin hooks cannot inadvertently rely on an ambient Python runtime.
