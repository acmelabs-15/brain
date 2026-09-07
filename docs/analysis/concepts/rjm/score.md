---
package: rjm
name: score
slug: score
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# score

## Definition — verbatim
> "Return the passing fraction of ``task_ids``." — scripts/eval/_optimizer_core.py:599

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 598 | defined here | Function calculating the ratio of passing tasks across a set of task IDs, strictly requiring all tasks to have boolean results. |
| scripts/eval/README.md | 494 | defined here | Documented CLI subcommand that computes the passing fraction of a specified task group. |

## Consumes
A mapping of task IDs to boolean pass/fail outcomes, and a sequence of expected task IDs.

## Produces
A float value between 0.0 and 1.0 representing the proportion of passing tasks.

## When applied
Evaluated when measuring model performance across optimization, selection, or test splits.

## Sub-concepts
none

## Part of
optimize-artifact

## Implementation status
clean (scripts/eval/_optimizer_core.py); defects: doc-drift, missing-path, script-bug (scripts/eval/README.md)

## Design notes
`score` calculates the passing ratio across a task set within rjm's evaluation framework. It enforces strict result completeness by raising an exception if any task result is missing rather than treating absences as failures, preventing crashed or truncated runs from silently corrupting evaluation scores.
