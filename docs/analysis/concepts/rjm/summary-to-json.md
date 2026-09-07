---
package: rjm
name: summary_to_json
slug: summary-to-json
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

# summary_to_json

## Definition — verbatim
(used, not defined)

> "def summary_to_json(summary: BenchmarkSummary, *, model: str) -> dict[str, object]:" — scripts/eval/eval-oneshot-vs-shipped.py:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-oneshot-vs-shipped.py | 146 | defined here | Converts benchmark summary data into a dictionary structure for JSON artifact export. |

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
An internal serialization helper function identifier converting benchmark results to JSON dictionary format, classified as name-only per D-023.
