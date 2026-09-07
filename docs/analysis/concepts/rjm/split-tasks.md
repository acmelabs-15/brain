---
package: rjm
name: split_tasks
slug: split-tasks
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# split_tasks

## Definition — verbatim
> "Partition ``task_ids`` into optimize, held-out, and reserve groups." — scripts/eval/_optimizer_core.py:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 219 | defined here | Pure function partitioning task IDs into opt, sel, and test groups based on deterministic SHA-256 rank hashing. |

## Consumes
A sequence of unique task IDs, a non-empty seed string, selection ratio, test ratio, and minimum selection size.

## Produces
A `TaskSplit` containing partitioned tuples of task IDs and a tamper-evident split fingerprint.

## When applied
Called when configuring an evaluation dataset before beginning prompt or artifact optimization passes.

## Sub-concepts
tasksplit, split-fingerprint

## Part of
optimize-artifact

## Implementation status
clean

## Design notes
`split_tasks` deterministically partitions evaluation task suites into distinct subsets using SHA-256 hash ranking. It guarantees exact group sizing rather than approximate hash bucketing, ensuring held-out evaluation sets maintain statistically meaningful sample sizes while remaining completely reproducible across environments.
