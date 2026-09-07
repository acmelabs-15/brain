---
package: rjm
name: SYNC_FILE_PAIRS
slug: sync-file-pairs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/sync_plugin_lib.py, sha256: 8311587c8a293fb29bddf255c8f8d6adcf33b4821de992b06dbb6d831bb3f982}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SYNC_FILE_PAIRS

## Definition — verbatim
(used, not defined)

> "SYNC_FILE_PAIRS: list[tuple[str, str]] = [" — scripts/sync_plugin_lib.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_plugin_lib.py | 41 | defined here | Configuration list defining individual single-file source-to-destination pairs for exact byte copies. |

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
`SYNC_FILE_PAIRS` is a Python configuration list constant specifying single-file module copy mappings rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
