---
package: rjm
name: taste ceiling
slug: taste-ceiling
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli.py, sha256: 42c92fa1b72b6b37bd4b7864b19b8d9987761bdcf034129d7cf2e7a40f70a16c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# taste ceiling

## Definition — verbatim
(used, not defined)

> "Split out of `_providers.py` because that module crossed the 500-line taste ceiling once this provider landed." — scripts/eval/_copilot_cli.py:3-4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli.py | 3 | used here | Informal 500-line file size heuristic cited as the rationale for splitting the Copilot CLI provider out of _providers.py. |

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
`taste ceiling` is an informal engineering rule of thumb capping Python module length around 500 lines to preserve modularity, classified as `kind: name-only` per D-023.
