---
package: rjm
name: FixtureError
slug: fixtureerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_e2e_delivery_core.py, sha256: f7aeb40a86977036c93513fb424b27e9249ddcde90e7e4dc92fdd0097340ccab}
  - {path: scripts/eval/_oneshot_bench_core.py, sha256: ca0711a16c6783ec1ee13ffd37a3eae9dcc589eeb8dd2d79f2101029e9bb876a}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FixtureError

## Definition — verbatim
(used, not defined)

> "class FixtureError(ValueError):" — scripts/eval/_e2e_delivery_core.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_e2e_delivery_core.py | 65 | defined here | Exception class raised when an end-to-end delivery evaluation fixture fails schema validation. |
| scripts/eval/_oneshot_bench_core.py | 42 | defined here | Exception class raised when a benchmark fixture file has missing or invalid fields. |
| scripts/eval/eval-oneshot-vs-shipped.py | 35 | used here | Imported exception used for error handling during oneshot benchmark execution. |

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
clean

## Design notes
A custom Python exception class identifier in evaluation core modules indicating fixture validation failures, classified as `name-only` per D-023.
