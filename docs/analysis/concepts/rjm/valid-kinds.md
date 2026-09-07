---
package: rjm
name: VALID_KINDS
slug: valid-kinds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/metrics/kill_criteria.py, sha256: df07f1498c8f0ffe5579934dc3331a3e5de5d023fd502207bfb31cb7ea8dc686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_KINDS

## Definition — verbatim
(used, not defined)

> "VALID_KINDS: Final[frozenset[str]] = frozenset" — scripts/metrics/kill_criteria.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 77 | defined here | Constant frozenset defining valid kill criteria identifiers for event validation. |

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
VALID_KINDS is a constant set used for runtime validation of kill criteria event kinds in scripts/metrics/kill_criteria.py rather than a lifecycle concept.
