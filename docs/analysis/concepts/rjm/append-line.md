---
package: rjm
name: append_line
slug: append-line
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/diagnose_copilot_cli.py, sha256: d05040c1d6bdaab669157a383c9f470e3cbc1261e0cb4974c89666ee59ec0b39}
  - {path: scripts/ci/install_copilot_cli.py, sha256: 43ad4fb2f64407170551ebf0a912601b74ab3574b2bcd44f81e0dd5cfc1260ae}
  - {path: scripts/ci/load_ai_review_prompt.py, sha256: 5b7992a516e98e447bf020615ea72faa136a9dcaf75d08b425074c7fd937445f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# append_line

## Definition — verbatim
(used, not defined)

> "def append_line(path: Path, line: str) -> None:" — scripts/ci/diagnose_copilot_cli.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/diagnose_copilot_cli.py | 64 | defined here | File helper function appending a single line to a specified path with UTF-8 encoding. |
| scripts/ci/install_copilot_cli.py | 44 | defined here | File helper function appending a line to the step output file. |
| scripts/ci/load_ai_review_prompt.py | 20 | defined here | File helper function appending a line to the step output file. |

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
defects: orphan

## Design notes
`append_line` is a Python helper function identifier across CI scripts for appending single lines to step output or environment files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
