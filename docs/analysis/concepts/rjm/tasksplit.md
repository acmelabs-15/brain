---
package: rjm
name: TaskSplit
slug: tasksplit
kind: artifact
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

# TaskSplit

## Definition — verbatim
> "A deterministic partition of an eval set." — scripts/eval/_optimizer_core.py:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 132 | defined here | Dataclass containing the partitioned `opt`, `sel`, and `test` task id tuples and the cryptographic split fingerprint. |

## Consumes
A set of evaluation task identifiers, a random seed, and partition ratios.

## Produces
Disjoint tuples of task IDs for optimization, held-out gating, and optional test evaluation, along with a SHA-256 fingerprint.

## When applied
Generated at the start of an optimization workflow to partition scenarios before iterative prompt revision.

## Sub-concepts
split-fingerprint

## Part of
split-tasks

## Implementation status
clean

## Design notes
`TaskSplit` is the partitioned dataset structure in rjm's evaluation optimizer. It establishes strict separation between optimization tasks (`opt`) visible during prompt drafting, held-out selection tasks (`sel`) used exclusively for gating candidates, and reserve evaluation tasks (`test`), preventing evaluation laundering and data leakage across iterations.
