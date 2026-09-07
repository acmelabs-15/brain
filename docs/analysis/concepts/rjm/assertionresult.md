---
package: rjm
name: AssertionResult
slug: assertionresult
kind: artifact
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AssertionResult

## Definition — verbatim
> "Outcome of scoring one assertion against a model response." — scripts/eval/_eval_agent_types.py:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_agent_types.py | 100 | defined here | Defined as a frozen dataclass recording pass/fail boolean, matched text, actual verdict, and failure details. |
| scripts/eval/_run_persistence.py | 51 | used here | Imported to serialize and deserialize assertion evaluation results within jsonl run records. |
| scripts/eval/_scoring_engine.py | 13 | used here | Imported and instantiated as the output of scorer strategy functions evaluating agent responses. |
| scripts/eval/eval-agent-vs-baseline.py | 40 | used here | Imported and collected across benchmark runs to compute pass rates and format failure summaries. |

## Consumes
An `Assertion` instance, model response text, and evaluator extraction results.

## Produces
A structured verdict record containing a boolean pass status, failure message, and matched or extracted values.

## When applied
Produced immediately after an assertion scorer evaluates a model completion against assertion rules.

## Sub-concepts
none

## Part of
runrecord

## Implementation status
defects: exit-code-mismatch, script-bug

## Design notes
`AssertionResult` is the evaluation outcome artifact capturing the granular result of executing an `Assertion` against an agent's completion. By mirroring the shape of the input assertion (including pattern, expected value, and description), it enables persistence stores and reporter modules to render detailed failure reports without needing to join back to source fixture definitions.
