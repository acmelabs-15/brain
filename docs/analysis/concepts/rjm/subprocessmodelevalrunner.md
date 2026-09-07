---
package: rjm
name: SubprocessModelEvalRunner
slug: subprocessmodelevalrunner
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

# SubprocessModelEvalRunner

## Definition — verbatim
(used, not defined)

> "any API spend; the live implementation is ``SubprocessModelEvalRunner``." — scripts/eval/eval-model-sweep.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-model-sweep.py | 15 | defined here | Default runner implementation that executes the base evaluator script via subprocess. |

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
A Python class identifier implementing the ModelEvalRunner protocol via subprocess invocation of the base evaluator script, classified as name-only per D-023.
