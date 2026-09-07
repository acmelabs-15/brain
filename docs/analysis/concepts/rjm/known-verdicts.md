---
package: rjm
name: KNOWN_VERDICTS
slug: known-verdicts
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

# KNOWN_VERDICTS

## Definition — verbatim
(used, not defined)

> "KNOWN_VERDICTS = frozenset(_BLOCKING | _WARNING | _PASSING | {"UNKNOWN"})" — scripts/external_signals/gate_aggregator.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/external_signals/gate_aggregator.py | 47 | defines | Public frozenset of valid gate verdict tokens used by adapters to identify known verdicts. |

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
`KNOWN_VERDICTS` is a Python frozenset constant specifying the vocabulary of supported gate verdict tokens rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
