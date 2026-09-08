---
package: rjm
name: LIB_ALLOWLIST
slug: lib-allowlist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_sync_registry.py, sha256: 734ce57ac1a577046d451345bd66d40918335da96ccd787a5e70d203acef74e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# LIB_ALLOWLIST

## Definition — verbatim
(used, not defined)

> "LIB_ALLOWLIST: frozenset[str] = frozenset()" — scripts/validation/validate_sync_registry.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_sync_registry.py | 68 | defined here | Defines frozenset of lib directory package names permitted to exist without a SYNC_PAIRS destination. |

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
`LIB_ALLOWLIST` is a Python constant frozenset identifier in `validate_sync_registry.py` tracking allowlisted lib packages rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
