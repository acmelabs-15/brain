---
package: rjm
name: gate_aggregator.py
slug: gate-aggregator-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gate_aggregator.py

## Definition — verbatim
(used, not defined)

> "### `gate_aggregator.py`" — docs/design/external-signal-gating.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/design/external-signal-gating.md | 58 | defined here | Heading introducing the Python helper script for aggregating tool and LLM signal verdicts. |

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
defects: missing-path

## Design notes
A Python script file name implementing deterministic gate verdict aggregation and refusing closed-loop PASS verdicts rather than an operational lifecycle concept.
