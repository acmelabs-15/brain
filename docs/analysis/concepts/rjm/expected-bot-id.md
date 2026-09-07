---
package: rjm
name: EXPECTED_BOT_ID
slug: expected-bot-id
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

# EXPECTED_BOT_ID

## Definition — verbatim
(used, not defined)

> "- ``MATCH``: probe succeeded and the id equals ``EXPECTED_BOT_ID``. Exit 0." — scripts/ci/check_bot_identity.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_bot_identity.py | 19 | used here | Referenced as the expected bot account ID environment variable against which probe results are compared. |

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
A configuration environment variable identifier (`EXPECTED_BOT_ID`) for the target bot account ID recorded during inventory analysis, classified as `name-only` per D-023.
