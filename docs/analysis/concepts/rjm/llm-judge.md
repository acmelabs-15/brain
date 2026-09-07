---
package: rjm
name: LLM judge
slug: llm-judge
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_oneshot_bench_core.py, sha256: ca0711a16c6783ec1ee13ffd37a3eae9dcc589eeb8dd2d79f2101029e9bb876a}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# LLM judge

## Definition — verbatim
(used, not defined)

> "then grades the agent's fix against what shipped with an LLM judge." — scripts/eval/_oneshot_bench_core.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_oneshot_bench_core.py | 5 | used here | Cited as the automated grading mechanism comparing agent proposals against merged fixes. |
| scripts/eval/eval-skill-overlap.py | 14 | used here | Cited as the evaluator scoring prompt responses on a 1-5 scale across skill pairs to compute overlap verdicts. |

## Consumes
Candidate agent fixes, ground truth shipped fixes, discourse edge cases, and structured evaluation rubrics.

## Produces
Structured evaluation verdicts (JudgeVerdict, 1-5 rubric scores, grade classifications) and identified edge case coverage.

## When applied
Applied during offline evaluation workflows (one-shot benchmarking, skill overlap detection) to provide qualitative grading against ground truth or scoring rubrics.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
In rjm's evaluation framework, an LLM judge is an automated evaluation role and technique where a secondary language model evaluates agent outputs against human ground truth or standardized rubrics, producing structured JSON verdicts without participating in production gating loops.
