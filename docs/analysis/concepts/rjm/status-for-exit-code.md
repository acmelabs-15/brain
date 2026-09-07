---
package: rjm
name: _status_for_exit_code
slug: status-for-exit-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/map_pr_description_result.py, sha256: d66a421358b9d32edb77d5b838d4121c0c70d7e0ed27d436e524b8acafb46fc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _status_for_exit_code

## Definition — verbatim
(used, not defined)

> "def _status_for_exit_code(exit_code: int) -> str:" — scripts/ci/map_pr_description_result.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/map_pr_description_result.py | 24 | defined here | Maps PR description validator exit codes to status strings (PASS, FAIL, ERROR) for workflow step output. |

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
defects: script-bug, orphan

## Design notes
`_status_for_exit_code` is a Python helper function in `map_pr_description_result.py` mapping validator return codes to GitHub Actions step output status strings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
