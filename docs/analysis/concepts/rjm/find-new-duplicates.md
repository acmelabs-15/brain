---
package: rjm
name: find_new_duplicates
slug: find-new-duplicates
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_uniqueness.py, sha256: 3edae483b4be86c2960b172be8a075d30959d47c1552eadc093b43e1fe2b0a4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# find_new_duplicates

## Definition — verbatim
(used, not defined)

> "def find_new_duplicates(" — scripts/validation/check_adr_uniqueness.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_uniqueness.py | 58 | defined here | Function detecting duplicate ADR numbers not covered by the historical allowlist. |

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
`find_new_duplicates` is a Python helper function identifier in `check_adr_uniqueness.py` filtering duplicate ADR file occurrences rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
