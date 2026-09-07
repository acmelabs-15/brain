---
package: rjm
name: get_line_ending_stats
slug: get-line-ending-stats
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/normalize_line_endings.py, sha256: 3d66a3ba4fefcb0c7308eb253b3e9432968e507b169a042ab0e45437e454059f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_line_ending_stats

## Definition — verbatim
(used, not defined)

> "def get_line_ending_stats(stage: str) -> dict[str, int]:" — scripts/normalize_line_endings.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/normalize_line_endings.py | 37 | defined here | Defines helper function counting LF and CRLF line endings in the Git index and working tree. |

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
A Python helper function identifier querying repository line ending statistics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
