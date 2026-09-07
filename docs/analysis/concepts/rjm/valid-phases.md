---
package: rjm
name: VALID_PHASES
slug: valid-phases
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_phase_gates.py, sha256: c2a815e2ce0a260c4f706854a1879f790b3d2bcd21b628e77cff85e4778aa8de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_PHASES

## Definition — verbatim
(used, not defined)

> "VALID_PHASES = frozenset({" — scripts/validate_phase_gates.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_phase_gates.py | 31 | defined here | Constant frozenset defining the allowable SPARC development phase names. |

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
A constant identifier defining the set of valid lifecycle phases rather than an agent lifecycle concept.
