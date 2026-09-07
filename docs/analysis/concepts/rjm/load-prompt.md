---
package: rjm
name: load_prompt
slug: load-prompt
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/load_ai_review_prompt.py, sha256: 5b7992a516e98e447bf020615ea72faa136a9dcaf75d08b425074c7fd937445f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# load_prompt

## Definition — verbatim
(used, not defined)

> "def load_prompt(" — scripts/ci/load_ai_review_prompt.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/load_ai_review_prompt.py | 34 | defined here | Function resolving prompt contents from custom path, default path, or fallback and exporting step outputs. |

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
load_prompt is a Python helper function resolving prompt source templates and publishing GitHub step outputs rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
