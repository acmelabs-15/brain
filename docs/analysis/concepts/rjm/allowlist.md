---
package: rjm
name: allowlist
slug: allowlist
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

# allowlist

## Definition — verbatim
(used, not defined)

> "the next free number (069, 070, 071). The allowlist is therefore empty: the" — scripts/validation/check_adr_uniqueness.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_uniqueness.py | 15 | used here | Described in module docstring as an empty exemption list that enforces ADR uniqueness with zero exceptions. |

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
`allowlist` is a parameter and exemption mechanism identifier in `check_adr_uniqueness.py` tracking duplicate ADR exemptions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
