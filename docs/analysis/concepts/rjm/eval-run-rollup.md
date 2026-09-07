---
package: rjm
name: eval-run rollup
slug: eval-run-rollup
kind: technique
package_phase: rjm:eval
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
  - {path: scripts/eval/eval_run_rollup.py, sha256: 753a8fee7f7e9c6e8be84160aadeb914cc92a954b39e96c482c0214f422821ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eval-run rollup

## Definition — verbatim
> "Data model and aggregation for the eval-run rollup (issue #2787)." — scripts/eval/_run_rollup_core.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_rollup_core.py | 1 | defined here | Core data model and cross-run aggregation engine for evaluating agent performance metrics across spikes. |
| scripts/eval/eval_run_rollup.py | 2 | defined here | CLI entry point and rendering formatting module presenting aggregated evaluation metrics in tables or JSON. |

## Consumes
On-disk `runs.jsonl` files from evaluation runs across agent spikes.

## Produces
Aggregated per-agent metric summaries (runs, error counts, tokens, estimated cost, mean latency) and statistical outlier drift flags.

## When applied
Applied after evaluation runs to summarize cross-run agent performance without altering the underlying on-disk `RunRecord` schema.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
eval-run rollup provides cross-run aggregation of latency, cost, and token metrics from individual agent evaluation logs, enabling tracking of agent performance and outlier drift across evaluation spikes without modifying the underlying RunRecord schema.
