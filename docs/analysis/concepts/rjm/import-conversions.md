---
package: rjm
name: IMPORT_CONVERSIONS
slug: import-conversions
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

# IMPORT_CONVERSIONS

## Definition — verbatim
(used, not defined)

> "IMPORT_CONVERSIONS: list[tuple[re.Pattern[str], str]] = [" — scripts/sync_plugin_lib.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_plugin_lib.py | 49 | defined here | Regex pattern list used to rewrite absolute scripts/ imports into relative imports for plugin distribution. |

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
`IMPORT_CONVERSIONS` is a Python constant list compiling regex patterns for import path rewriting rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
