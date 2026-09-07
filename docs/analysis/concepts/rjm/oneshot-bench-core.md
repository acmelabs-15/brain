---
package: rjm
name: _oneshot_bench_core
slug: oneshot-bench-core
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _oneshot_bench_core

## Definition — verbatim
(used, not defined)

> "`_oneshot_bench_core`; this file owns argument parsing, the API transport, and" — scripts/eval/eval-oneshot-vs-shipped.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-oneshot-vs-shipped.py | 7 | used here | Core benchmark module housing grading logic, prompts, and score aggregation. |

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
A Python module identifier for the core one-shot benchmark grading and prompt building logic, classified as name-only per D-023.
