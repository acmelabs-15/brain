---
package: rjm
name: DEFAULT_CHILD_TIMEOUT_S
slug: default-child-timeout-s
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_CHILD_TIMEOUT_S

## Definition — verbatim
(used, not defined)

> "DEFAULT_CHILD_TIMEOUT_S = 1800" — scripts/eval/eval-model-sweep.py:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-model-sweep.py | 74 | defined here | Configuration constant specifying the 1800-second wall-clock timeout for child evaluation subprocesses. |

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
defects: missing-path, doc-drift

## Design notes
A configuration constant identifier specifying the child subprocess timeout bound, classified as name-only per D-023.
