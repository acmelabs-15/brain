---
package: rjm
name: AUTHORIZED_HOOKS
slug: authorized-hooks
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AUTHORIZED_HOOKS

## Definition — verbatim
(used, not defined)

> "The two survivors are recorded in `AUTHORIZED_HOOKS` in" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 165 | used here | Cites the authoritative test whitelist constant in `tests/hooks/test_dispatch_groups_parity.py` tracking active hooks. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
clean

## Design notes
A constant identifier in the hook test suite that serves as the live ledger of authorized hooks, rather than a lifecycle concept.
