---
package: rjm
name: ALL_ROLES
slug: all-roles
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_seed_parity.py, sha256: c25853828b45f5da25b2e26fd0e51b4ec2b4c68b8fcceb4ed6f8c7061ae67f59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ALL_ROLES

## Definition — verbatim
(used, not defined)

> "ALL_ROLES: tuple[str, ...] = (" — scripts/validation/validate_seed_parity.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_seed_parity.py | 55 | defined here | Constant tuple listing all six canonical review role names. |

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
A Python constant tuple identifier in `validate_seed_parity.py`, classified as name-only per D-023.
