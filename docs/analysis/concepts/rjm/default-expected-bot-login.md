---
package: rjm
name: DEFAULT_EXPECTED_BOT_LOGIN
slug: default-expected-bot-login
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

# DEFAULT_EXPECTED_BOT_LOGIN

## Definition — verbatim
(used, not defined)

> "DEFAULT_EXPECTED_BOT_LOGIN = \"rjmurillo-bot\"" — scripts/ci/check_bot_identity.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_bot_identity.py | 52 | defined here | Defined as the default login username for the expected bot account. |

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
A module-level fallback constant (`DEFAULT_EXPECTED_BOT_LOGIN`) defining default bot login handle recorded during inventory analysis, classified as `name-only` per D-023.
