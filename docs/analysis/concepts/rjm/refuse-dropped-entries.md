---
package: rjm
name: refuse_dropped_entries
slug: refuse-dropped-entries
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# refuse_dropped_entries

## Definition — verbatim
(used, not defined)

> "\"refuse_dropped_entries\"," — scripts/validation/portability_baseline.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_baseline.py | 52 | defined here | Exported function symbol in __all__ that refuses baseline writes recording less debt than predecessors. |

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
An exported validation function identifier in `portability_baseline.py`, classified as name-only per D-023.
