---
package: rjm
name: _make_writable_and_retry
slug: make-writable-and-retry
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

# _make_writable_and_retry

## Definition — verbatim
(used, not defined)

> "def _make_writable_and_retry(" — scripts/ci/merge_tree_materialization.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_materialization.py | 21 | defined here | Error handler callback that removes read-only attributes on Windows files during tree removal retries. |

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
`_make_writable_and_retry` is an internal Python error handler function clearing filesystem read-only permissions during directory removal rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
