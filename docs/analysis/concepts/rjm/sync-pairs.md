---
package: rjm
name: SYNC_PAIRS
slug: sync-pairs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/sync_plugin_lib.py, sha256: 8311587c8a293fb29bddf255c8f8d6adcf33b4821de992b06dbb6d831bb3f982}
  - {path: scripts/validation/validate_sync_registry.py, sha256: 734ce57ac1a577046d451345bd66d40918335da96ccd787a5e70d203acef74e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SYNC_PAIRS

## Definition — verbatim
(used, not defined)

> "SYNC_PAIRS: list[tuple[str, str]] = [" — scripts/sync_plugin_lib.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_plugin_lib.py | 27 | defined here | Configuration list of directory tuples mapping source packages under scripts/ to .claude/lib/ destinations. |
| scripts/validation/validate_sync_registry.py | 6 | used here | Referenced as the authoritative registry checked by the gate to ensure all shared packages are registered. |

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
`SYNC_PAIRS` is a Python configuration list constant registering package directory synchronization mappings rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
