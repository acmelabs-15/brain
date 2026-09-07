---
package: rjm
name: _detect_script_name
slug: detect-script-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/output.py, sha256: d440cb852e8bebf189d17d130b5715593516e4ce0a2d71bc303d7cf8357efead}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _detect_script_name

## Definition — verbatim
(used, not defined)

> "def _detect_script_name() -> str:" — scripts/github_core/output.py:269

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/output.py | 269 | defined here | Internal helper inspecting the Python call stack to discover the calling script filename. |

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
Internal stack inspection helper function for determining calling script metadata, classified as name-only per D-023.
