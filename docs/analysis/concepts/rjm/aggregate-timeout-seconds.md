---
package: rjm
name: _AGGREGATE_TIMEOUT_SECONDS
slug: aggregate-timeout-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_ratchet.py, sha256: f11eedc4dca23178e7d74dc884946ff7010c35fc54cfc9f35a6bdd3051c79156}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _AGGREGATE_TIMEOUT_SECONDS

## Definition — verbatim
(used, not defined)

> "_AGGREGATE_TIMEOUT_SECONDS = 85" — scripts/validation/checks_ratchet.py:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_ratchet.py | 98 | defined here | Constant defining the 85-second cumulative execution deadline for all registered count ratchets. |

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
A Python module-level constant identifier in `checks_ratchet.py` setting an aggregate execution timeout rather than an agent lifecycle concept.
