---
package: rjm
name: IDENTITY_STRICT
slug: identity-strict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_bot_identity.py, sha256: 562f63926cad000cc717a27a4697e34a7a516d869efce24a70feed52abcd2be7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# IDENTITY_STRICT

## Definition — verbatim
(used, not defined)

> "by default; ``IDENTITY_STRICT`` makes it exit 4 (auth)." — scripts/ci/check_bot_identity.py:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_bot_identity.py | 22 | used here | Referenced as the environment variable that enforces non-zero exit codes on bot identity failures. |

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
A configuration environment variable flag (`IDENTITY_STRICT`) controlling strict exit codes recorded during inventory analysis, classified as `name-only` per D-023.
