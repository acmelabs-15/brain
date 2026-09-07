---
package: rjm
name: _SCAN_GLOBS
slug: scan-globs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/ruff_count_ratchet.py, sha256: e8ec4aae7eeeb3ebec27b426f609c8a04849394340012720a17c92248ac33fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _SCAN_GLOBS

## Definition — verbatim
(used, not defined)

> "_SCAN_GLOBS = (\"*.py\", \"*.pyi\", \"*.ipynb\")" — scripts/ci/ruff_count_ratchet.py:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/ruff_count_ratchet.py | 75 | defined here | Constant tuple of file glob patterns specifying extensions inspected during ruff lint count ratcheting. |

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
`_SCAN_GLOBS` is an internal configuration tuple in `ruff_count_ratchet.py` listing scanned file extensions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
