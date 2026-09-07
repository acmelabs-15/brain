---
package: rjm
name: parse_judge_response
slug: parse-judge-response
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

# parse_judge_response

## Definition — verbatim
(used, not defined)

> "def parse_judge_response(raw: str) -> dict[str, Any]:" — scripts/eval/_e2e_delivery_core.py:252

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_e2e_delivery_core.py | 252 | defined here | Function extracting and validating JSON scores and rationale from raw LLM judge responses. |
| scripts/eval/_oneshot_bench_core.py | 194 | defined here | Function parsing raw judge output into structured JudgeVerdict records for bug fix evaluation. |
| scripts/eval/eval-oneshot-vs-shipped.py | 42 | used here | Imported parsing helper used during evaluation execution. |

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
A Python helper function identifier in evaluation harnesses for parsing and validating model judge outputs into structured score records, classified as `name-only` per D-023.
