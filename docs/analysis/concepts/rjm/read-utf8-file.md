---
package: rjm
name: read_utf8_file
slug: read-utf8-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# read_utf8_file

## Definition — verbatim
(used, not defined)

> "def read_utf8_file(path: Path, description: str) -> str:" — scripts/ci/build_ai_review_context.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_ai_review_context.py | 50 | defined here | Helper function reading file content with UTF-8 decoding and error reporting. |

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
`read_utf8_file` is a Python file reading utility function identifier in `build_ai_review_context.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
