---
package: rjm
name: _CLEANUP_RETRY_DELAYS
slug: cleanup-retry-delays
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/merge_tree_materialization.py, sha256: aeda3844a027c282ae04e33379a456f239d06f484aece396003e530861ba6b0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _CLEANUP_RETRY_DELAYS

## Definition — verbatim
(used, not defined)

> "_CLEANUP_RETRY_DELAYS = (0.1, 0.2, 0.4, 0.8, 1.6)" — scripts/ci/merge_tree_materialization.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_materialization.py | 17 | defined here | Defines backoff retry delay intervals for deleting temporary directory trees. |

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
`_CLEANUP_RETRY_DELAYS` is an internal Python tuple constant configuring backoff intervals for temporary directory deletion rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
