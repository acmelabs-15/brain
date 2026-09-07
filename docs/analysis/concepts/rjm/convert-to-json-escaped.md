---
package: rjm
name: convert_to_json_escaped
slug: convert-to-json-escaped
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# convert_to_json_escaped

## Definition — verbatim
(used, not defined)

> "def convert_to_json_escaped(input_string: str) -> str:" — scripts/ai_review_common/issue_triage.py:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/issue_triage.py | 92 | defined here | Serializes and escapes strings for embedding safely into JSON payloads. |

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
defects: script-bug, other

## Design notes
A Python helper function identifier (convert_to_json_escaped) escaping input strings for JSON embedding rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
