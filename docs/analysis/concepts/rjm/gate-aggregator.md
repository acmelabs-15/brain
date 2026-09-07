---
package: rjm
name: gate_aggregator
slug: gate-aggregator
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/quality_gate/external_signal_gate.py, sha256: cb8b033119ec2c000474d36abc089ece414b9a36cf71b30921df7a95b37ed48d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gate_aggregator

## Definition — verbatim
(used, not defined)

> "scripts/external_signals/gate_aggregator.py" — scripts/quality_gate/external_signal_gate.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/external_signal_gate.py | 7 | used here | Imported script module aggregating external deterministic signals and agent review verdicts. |

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
defects: orphan

## Design notes
`gate_aggregator` is a Python module identifier referencing the external signal gate aggregator script rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
