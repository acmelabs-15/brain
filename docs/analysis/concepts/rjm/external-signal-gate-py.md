---
package: rjm
name: external_signal_gate.py
slug: external-signal-gate-py
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

# external_signal_gate.py

## Definition — verbatim
(used, not defined)

> "# Public: the adapter in scripts/quality_gate/external_signal_gate.py reads" — scripts/external_signals/gate_aggregator.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/external_signals/gate_aggregator.py | 43 | used here | Cited in comments as the quality gate adapter reading KNOWN_VERDICTS to alias tokens. |

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
`external_signal_gate.py` is a quality gate adapter script file name translating verdict tokens rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
