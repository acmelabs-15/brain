---
package: rjm
name: SENTINEL
slug: sentinel
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
  - {path: scripts/eval/eval_runtime_parity.py, sha256: b82cb3ba9712885b31d0393a91be3a2c390ebeb27c3759d1f2c8f61c5a8d281f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SENTINEL

## Definition — verbatim
(used, not defined)

> "SENTINEL = " — scripts/eval/_runtime_parity.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_parity.py | 17 | defined here | String constant injected into profile instructions to detect instruction adherence across runtimes. |
| scripts/eval/eval_runtime_parity.py | 61 | used here | Imported to verify sentinel token emission in test outputs. |

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
defects: script-bug

## Design notes
A token constant used to verify prompt instruction injection and adherence across runtime environments, classified as name-only per D-023.
