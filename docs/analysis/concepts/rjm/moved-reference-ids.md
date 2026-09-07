---
package: rjm
name: MOVED_REFERENCE_IDS
slug: moved-reference-ids
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MOVED_REFERENCE_IDS

## Definition — verbatim
(used, not defined)

> "MOVED_REFERENCE_IDS = (" — scripts/eval/software_engineering_library_activation_gate.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_gate.py | 20 | defined here | Constant tuple listing the eight book reference IDs subject to activation gating. |

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
A Python constant tuple identifier in `software_engineering_library_activation_gate.py` enumerating the eight book reference IDs subject to ADR-088 activation tracking, classified as `kind: name-only` per D-023.
