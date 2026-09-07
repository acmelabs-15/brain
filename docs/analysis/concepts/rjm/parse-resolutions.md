---
package: rjm
name: parse_resolutions
slug: parse-resolutions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/apply_ai_conflict_resolution.py, sha256: 9512f33f965a12218ab0593839a2ca001322c12374c83279e2fd141966f4fb5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_resolutions

## Definition — verbatim
(used, not defined)

> "Return list of resolution dicts from AI findings text." — scripts/ci/apply_ai_conflict_resolution.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/apply_ai_conflict_resolution.py | 62 | defined here | Parses resolution dictionary objects from AI findings JSON text. |

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
defects: orphan, missing-path

## Design notes
`parse_resolutions` is a JSON parsing helper function in `scripts/ci/apply_ai_conflict_resolution.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
