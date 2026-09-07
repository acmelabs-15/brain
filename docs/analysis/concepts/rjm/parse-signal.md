---
package: rjm
name: parse_signal
slug: parse-signal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/external_signals/gate_aggregator.py, sha256: f9f7a2f2f9ebcc47353b79aad06d7aeeafbb32ccc699027030b5673c83df71e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_signal

## Definition — verbatim
(used, not defined)

> "def parse_signal(spec: str) -> Signal:" — scripts/external_signals/gate_aggregator.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/external_signals/gate_aggregator.py | 61 | defines | Parses a signal specification string into kind, name, and verdict components, returning a Signal instance. |

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
`parse_signal` is a Python function validating and parsing signal specification strings into `Signal` objects rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
