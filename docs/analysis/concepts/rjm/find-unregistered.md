---
package: rjm
name: find_unregistered
slug: find-unregistered
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

# find_unregistered

## Definition — verbatim
(used, not defined)

> "def find_unregistered(" — scripts/validation/validate_sync_registry.py:152

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_sync_registry.py | 152 | defined here | Pure function scanning repo roots and sync pairs to collect all unregistered shared library package errors. |

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
`find_unregistered` is a Python validation function identifier returning library registration discrepancies in `validate_sync_registry.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
