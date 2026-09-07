---
package: rjm
name: SPARC
slug: sparc
kind: pattern
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

# SPARC

## Definition — verbatim
(used, not defined)

> "Validate SPARC development phase gates in session logs." — scripts/validate_phase_gates.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_phase_gates.py | 2 | used here | Cites SPARC as the development phase methodology whose gates and progression are validated. |

## Consumes
Session logs and developmentPhase tracking records.

## Produces
Validation verdicts ensuring structured progression through specification, pseudocode, architecture, refinement, and completion phases.

## When applied
Applied during development lifecycle sessions to validate forward progression through defined methodology gates.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
The SPARC development methodology provides the structured framework of five progressive development phases whose session gate transitions are verified by validation tooling.
