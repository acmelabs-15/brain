---
package: rjm
name: summarize_variance
slug: summarize-variance
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# summarize_variance

## Definition — verbatim
(used, not defined)

> "def summarize_variance(records: list[RepRecord], expected: str) -> dict:" — scripts/eval/variance-control.py:239

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/variance-control.py | 239 | defined here | Function aggregating rep records into a summary payload with text variance, verdict distribution, and finding classification. |

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
`summarize_variance` is a Python function identifier in `variance-control.py` aggregating run metrics into summary records rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
