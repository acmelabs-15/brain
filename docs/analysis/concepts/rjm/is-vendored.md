---
package: rjm
name: _is_vendored
slug: is-vendored
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_dash.py, sha256: 706e2794af3fd28adc259ad441a2bcf0795a0e7675cd0093673750fc051a845d}
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _is_vendored

## Definition — verbatim
(used, not defined)

> "def _is_vendored(path: str) -> bool:" — scripts/validation/checks_dash.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_dash.py | 55 | defined here | Function returning True when path starts with any vendored prefix. |
| scripts/validation/checks_tooling.py | 37 | used here | Imported to filter out vendored files from markdown linting targets. |

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
A Python helper function in `scripts/validation/checks_dash.py` checking if paths belong to vendored directories, classified as name-only per D-023.
