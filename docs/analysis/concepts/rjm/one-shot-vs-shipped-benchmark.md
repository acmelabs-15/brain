---
package: rjm
name: one-shot-vs-shipped benchmark
slug: one-shot-vs-shipped-benchmark
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_oneshot_bench_core.py, sha256: ca0711a16c6783ec1ee13ffd37a3eae9dcc589eeb8dd2d79f2101029e9bb876a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# one-shot-vs-shipped benchmark

## Definition — verbatim
> "The benchmark points an agent at a closed bug plus its full issue/PR discourse, withholds the merged fix, has the agent reason a fix and set its own acceptance, then grades the agent's fix against what shipped with an LLM judge." — scripts/eval/_oneshot_bench_core.py:3-5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_oneshot_bench_core.py | 1 | used here | Documented in module docstring as the benchmarking evaluation framework comparing agent zero-shot bug fixes against merged ground truth. |

## Consumes
Closed bug reports with issue/PR discourse, merged ground truth fixes from source repositories, and test fixtures with difficulty annotations.

## Produces
Benchmark grade distribution (FULL, PARTIAL, NONE), edge-case coverage metrics, and structured benchmark summary reports.

## When applied
Applied when evaluating an agent's one-shot bug resolution and self-acceptance capability against historical production bugs.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The one-shot-vs-shipped benchmark is an evaluation technique that tests whether an agent can independently diagnose, solve, and set acceptance criteria for a closed production bug using only issue discourse, breaking the self-grading loop by evaluating agent proposals against human-merged ground truth via an LLM judge.
