---
package: rjm
name: MISMATCH
slug: mismatch
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

# MISMATCH

## Definition — verbatim
(used, not defined)

> "- ``MISMATCH``: probe succeeded but the id differs. The credential is a real" — scripts/ci/check_bot_identity.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_bot_identity.py | 20 | defined here | Documented as the verdict when the probed GitHub ID differs from the expected account. |

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
An identity probe verdict string and status constant (`MISMATCH`) indicating unexpected account credentials recorded during inventory analysis, classified as `name-only` per D-023.
