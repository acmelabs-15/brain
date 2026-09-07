---
package: rjm
name: verify_github_auth.py
slug: verify-github-auth-py
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

# verify_github_auth.py

## Definition — verbatim
(used, not defined)

> "identity diagnostic (``verify_github_auth.py``) is gated behind" — scripts/ci/check_bot_identity.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_bot_identity.py | 8 | used here | Referenced as the prior identity diagnostic script that was gated behind interactive prompts. |

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
A script file name (`verify_github_auth.py`) referenced as an authentication diagnostic tool recorded during inventory analysis, classified as `name-only` per D-023.
